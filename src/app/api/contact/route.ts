import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResendClient = () => {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
    const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
    const resendClient = getResendClient();

    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
    const sheetsWebhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN?.trim();

    const canSendEmail = Boolean(apiKey && toEmail && fromEmail && resendClient);
    const canSaveToSheets = Boolean(sheetsWebhookUrl && sheetsWebhookToken);

    if (!canSendEmail && !canSaveToSheets) {
        console.error('Contact form integrations are not configured.', {
            hasApiKey: Boolean(apiKey),
            hasToEmail: Boolean(toEmail),
            hasFromEmail: Boolean(fromEmail),
            hasResendClient: Boolean(resendClient),
            hasSheetsWebhookUrl: Boolean(sheetsWebhookUrl),
            hasSheetsWebhookToken: Boolean(sheetsWebhookToken),
        });

        return NextResponse.json(
            { message: 'We are unable to receive requests right now. Please try again shortly.' },
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

    // Google Sheets is best-effort so a Sheets outage cannot block the enquiry email.
    let sheetsSaved = false;
    if (canSaveToSheets) {
        try {
            await appendToGoogleSheet(lead);
            sheetsSaved = true;
        } catch (error) {
            console.error('Google Sheets contact submission failed. Continuing with email.', {
                message: error instanceof Error ? error.message : 'Unknown error',
                reference,
            });
        }
    }

    let emailSent = false;
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

    if (canSendEmail) {
        try {
            const result = await resendClient!.emails.send({
                from: fromEmail!,
                to: [toEmail!],
                replyTo: email,
                subject: `[SM Associate] ${formattedReason} - ${name}`,
                text: textBody,
                html: htmlBody,
            });

            if (result.error) {
                console.error('Resend email send failed.', { error: result.error, reference });
            } else {
                emailSent = true;
            }
        } catch (error) {
            console.error('Contact form email error.', {
                message: error instanceof Error ? error.message : 'Unknown error',
                reference,
            });
        }
    }

    if (emailSent || sheetsSaved) {
        return NextResponse.json(
            { success: true, reference, emailSent, sheetsSaved },
            { status: 200 }
        );
    }

    return NextResponse.json(
        { message: 'Your request could not be delivered right now. Please try again shortly.' },
        { status: 502 }
    );
}

export async function GET() {
    return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 });
}
