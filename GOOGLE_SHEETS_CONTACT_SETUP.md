# Contact Form Email + Google Sheets Setup

The SM Associate contact form submits to `/api/contact`. The API now:

1. Validates the form server-side.
2. Appends the lead to Google Sheets through a private Apps Script webhook.
3. Sends the same lead to the configured business email through Resend.
4. Returns a reference number to the website.

## Google Sheet

Create a Google Sheet and a tab named `Leads` (the tab can also be created automatically).

Columns created automatically:

- Timestamp
- Reference
- Full Name
- Email
- Phone
- Service / Subject
- Budget / Value
- Message

## Google Apps Script

Open the sheet, go to **Extensions → Apps Script**, and paste the code from:

`scripts/google-sheets-contact-webhook.gs`

In **Project Settings → Script Properties**, add:

- `SPREADSHEET_ID` — the ID from the Google Sheet URL.
- `SHEET_NAME` — `Leads`.
- `CONTACT_FORM_TOKEN` — a long random secret.

Deploy as **Web app**:

- Execute as: **Me**
- Who has access: **Anyone**

Copy the Web App URL ending in `/exec`.

## Vercel environment variables

Add these variables to the SM Associate Vercel project:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `GOOGLE_SHEETS_WEBHOOK_URL`
- `GOOGLE_SHEETS_WEBHOOK_TOKEN`

`GOOGLE_SHEETS_WEBHOOK_TOKEN` must exactly match the Apps Script `CONTACT_FORM_TOKEN`.

Never use `NEXT_PUBLIC_` for the webhook URL, token, Resend key, or any other secret.

After adding the variables, redeploy the site.

