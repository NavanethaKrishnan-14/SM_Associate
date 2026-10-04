/**
 * SM Associate - Contact Form -> Google Sheets
 *
 * Deploy this file as a Google Apps Script Web App.
 *
 * Script Properties required:
 *   SPREADSHEET_ID       = the Google Sheet ID
 *   SHEET_NAME           = the tab name, e.g. Leads
 *   CONTACT_FORM_TOKEN   = a long random secret matching Vercel
 *
 * Web App:
 *   Execute as: Me
 *   Who has access: Anyone
 */

const HEADERS = [
  'Timestamp',
  'Reference',
  'Full Name',
  'Email',
  'Phone',
  'Service / Subject',
  'Budget / Value',
  'Message'
];

function getConfig_() {
  const props = PropertiesService.getScriptProperties();
  return {
    spreadsheetId: props.getProperty('SPREADSHEET_ID'),
    sheetName: props.getProperty('SHEET_NAME') || 'Leads',
    token: props.getProperty('CONTACT_FORM_TOKEN')
  };
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return json_({ success: true, service: 'SM Associate contact webhook' });
}

function doPost(e) {
  try {
    const config = getConfig_();

    if (!config.spreadsheetId || !config.token) {
      const missing = [];
      if (!config.spreadsheetId) missing.push('SPREADSHEET_ID');
      if (!config.token) missing.push('CONTACT_FORM_TOKEN');
      return json_({ success: false, message: 'Webhook configuration is incomplete: ' + missing.join(', ') });
    }

    const suppliedToken = e && e.parameter ? e.parameter.token : '';
    if (!suppliedToken || suppliedToken !== config.token) {
      return json_({ success: false, message: 'Unauthorized.' });
    }

    if (!e || !e.postData || !e.postData.contents) {
      return json_({ success: false, message: 'Empty request.' });
    }

    const lead = JSON.parse(e.postData.contents);

    const required = ['reference', 'name', 'email', 'reason', 'message', 'submittedAt'];
    const missing = required.filter(function (key) {
      return !lead[key];
    });

    if (missing.length) {
      return json_({
        success: false,
        message: 'Missing required fields: ' + missing.join(', ')
      });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(config.spreadsheetId);
      let sheet = spreadsheet.getSheetByName(config.sheetName);

      if (!sheet) {
        sheet = spreadsheet.insertSheet(config.sheetName);
      }

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      }

      // Prevent accidental duplicate rows if the same reference is retried.
      const references = sheet
        .getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1)
        .getValues()
        .flat();

      if (references.indexOf(String(lead.reference)) !== -1) {
        return json_({ success: true, duplicate: true, reference: lead.reference });
      }

      sheet.appendRow([
        new Date(lead.submittedAt),
        String(lead.reference),
        String(lead.name),
        String(lead.email),
        String(lead.phone || ''),
        String(lead.reason || ''),
        String(lead.value || ''),
        String(lead.message || '')
      ]);

      return json_({ success: true, reference: lead.reference });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    console.error(error);
    return json_({
      success: false,
      message: error && error.message ? error.message : 'Unexpected webhook error.'
    });
  }
}
