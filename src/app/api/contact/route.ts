import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResendClient = () => {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    return apiKey ? new Resend(apiKey) : null;
};

const normalizeText = (value: unknown): string => {
    if (typeof value !== 'string') return '';
    return value.replace(/\s+/g, ' ').trim();
};

const isAllowedOrigin = (origin: string | null, requestHost: string | null): boolean => {
    if (!origin) return true;

    try {
        const { hostname: originHostname } = new URL(origin);
        const originHost = originHostname.toLowerCase().replace(/^www\./, '');
        const currentHost = (requestHost || '').split(':')[0].toLowerCase().replace(/^www\./, '');

        // Allow the same-origin request. This covers the production domain,
        // Vercel preview deployments, and custom domains without opening the API
        // to arbitrary cross-site origins.
        if (currentHost && originHost === currentHost) {
            return true;
        }

        const allowedHosts = ['localhost', '127.0.0.1', 'smassociate.in'];
        return allowedHosts.includes(originHost) || originHost.endsWith('.smassociate.in');
    } catch {
        return false;
    }
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value: string): string =>
    value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const limitText = (value: string, maxLength: number): string =>
    value.slice(0, maxLength).trim();

type ContactLead = {
    reference: string;
    name: string;
    email: string;
    phone: string;
    reason: string;
    value: string;
    message: string;
    submittedAt: string;
};

const appendToGoogleSheet = async (lead: ContactLead): Promise<void> => {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
    const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN?.trim();

    if (!webhookUrl || !webhookToken) {
        throw new Error('Google Sheets integration is not configured.');
    }

    const url = new URL(webhookUrl);
    url.searchParams.set('token', webhookToken);

    const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(lead),
        cache: 'no-store',
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data?.success !== true) {
        throw new Error(
            typeof data?.message === 'string' && data.message
                ? data.message
                : 'Google Sheets submission failed.'
        );
    }
};

export async function POST(request: NextRequest) {
    const origin = request.headers.get('origin');
    const requestHost = request.headers.get('host');
    if (origin && !isAllowedOrigin(origin, requestHost)) {
        return NextResponse.json({ message: 'Forbidden origin.' }, { status: 403 });
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        return NextResponse.json({ message: 'Invalid request format.' }, { status: 415 });
    }

    let payload: unknown;

    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ message: 'Please complete the form and try again.' }, { status: 400 });
    }

    if (!payload || typeof payload !== 'object') {
        return NextResponse.json({ message: 'Please complete the form and try again.' }, { status: 400 });
    }

    const body = payload as Record<string, unknown>;
    const name = limitText(normalizeText(body.name), 120);
    const email = limitText(normalizeText(body.email).toLowerCase(), 254);
    const phone = limitText(normalizeText(body.phone), 30);
    const reason = limitText(normalizeText(body.reason), 80);
    const value = limitText(normalizeText(body.value), 80);
    const message = limitText(normalizeText(body.message), 4000);
    const honeypot = normalizeText(body.honeypot);

    if (honeypot) {
        return NextResponse.json({ message: 'Submission rejected.' }, { status: 400 });
    }

    if (!name || !email || !reason || !message) {
        return NextResponse.json({ message: 'Please complete all required fields and try again.' }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
        return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
    const resendClient = getResendClient();

    if (!apiKey || !toEmail || !fromEmail || !resendClient) {
        console.error('Contact form email configuration missing.', {
            hasApiKey: Boolean(apiKey),
            hasToEmail: Boolean(toEmail),
            hasFromEmail: Boolean(fromEmail),
            hasResendClient: Boolean(resendClient),
        });

        return NextResponse.json(
            { message: 'The contact form is not available right now. Please try again later.' },
            { status: 503 }
        );
    }

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
    const sheetsWebhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN?.trim();

    if (!sheetsWebhookUrl || !sheetsWebhookToken) {
        console.error('Google Sheets contact integration configuration missing.');
        return NextResponse.json(
            { message: 'The contact form is not fully configured yet. Please try again later.' },
            { status: 503 }
        );
    }

    const reference = `SM-${Date.now().toString(36).toUpperCase()}`;
    const formattedReason = reason
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    const submittedAt = new Date().toISOString();

    const lead: ContactLead = {
        reference,
        name,
        email,
        phone: phone || 'Not provided',
        reason: formattedReason,
        value: value || 'Not provided',
        message,
        submittedAt,
    };

    // Save the lead to Google Sheets first. If email later fails, the lead is still captured.
    try {
        await appendToGoogleSheet(lead);
    } catch (error) {
        console.error('Google Sheets contact submission failed.', {
            message: error instanceof Error ? error.message : 'Unknown error',
            reference,
        });

        return NextResponse.json(
            { message: 'Your enquiry could not be recorded right now. Please try again later.' },
            { status: 502 }
        );
    }

    const textBody = [
        `Reference: ${reference}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Subject: ${formattedReason}`,
        `Budget / Approximate Value: ${value || 'Not provided'}`,
        '',
        'Message:',
        message,
        '',
        `Submitted at: ${submittedAt}`,
    ].join('\n');

    const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
      <h2 style="margin-bottom: 12px;">New SM Associate contact enquiry</h2>
      <p><strong>Reference:</strong> ${escapeHtml(reference)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(formattedReason)}</p>
      <p><strong>Budget / Approximate Value:</strong> ${escapeHtml(value || 'Not provided')}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <div style="margin-top: 20px; padding: 12px 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; white-space: pre-wrap;">
        ${escapeHtml(message).replace(/\n/g, '<br />')}
      </div>
    </div>
  `;

    try {
        const result = await resendClient.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `[SM Associate] ${formattedReason} - ${name}`,
            text: textBody,
            html: htmlBody,
        });

        if (result.error) {
            console.error('Resend email send failed after Google Sheets save.', {
                error: result.error,
                reference,
            });
            return NextResponse.json(
                { message: 'Your enquiry was recorded, but the email notification could not be sent. Please try again later.', reference },
                { status: 502 }
            );
        }

        return NextResponse.json({ success: true, reference }, { status: 200 });
    } catch (error) {
        console.error('Contact form email error after Google Sheets save.', {
            message: error instanceof Error ? error.message : 'Unknown error',
            reference,
        });

        return NextResponse.json(
            { message: 'Your enquiry was recorded, but the email notification could not be sent. Please try again later.', reference },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}
