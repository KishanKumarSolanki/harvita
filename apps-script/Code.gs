const SPREADSHEET_ID = "1NDNa5JBh9VQLBhVwLt6IiXt_Yrd58X0remDnLe2oTFc";
const SHEET_NAME = "Contact Enquiries";
const HEADERS = [
  "Submitted At",
  "Full Name",
  "Phone Number",
  "Email Address",
  "Service Required",
  "Message",
];

/**
 * Run setup once from the Apps Script editor to authorize spreadsheet access,
 * create the enquiry tab, and add its header row.
 */
function setup() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function doPost(event) {
  try {
    if (!event || !event.postData || typeof event.postData.contents !== "string") {
      throw new Error("Request body is missing.");
    }

    const payload = JSON.parse(event.postData.contents);
    const name = readText(payload.name, "Name", 120, true);
    const phone = readText(payload.phone, "Phone number", 40, true);
    const email = readText(payload.email, "Email address", 254, true);
    const service = readText(payload.service, "Service", 200, false);
    const message = readText(payload.message, "Message", 5000, false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("A valid email address is required.");
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      let sheet = spreadsheet.getSheetByName(SHEET_NAME);
      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
      }

      if (sheet.getLastRow() === 0) {
        sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
        sheet.setFrozenRows(1);
      }

      const nextRow = sheet.getLastRow() + 1;
      sheet.getRange(nextRow, 1, 1, HEADERS.length).setValues([[
        new Date(),
        safeCell(name),
        safeCell(phone),
        safeCell(email),
        safeCell(service),
        safeCell(message),
      ]]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      ok: false,
      message: error && error.message ? error.message : "Unable to save the enquiry.",
    });
  }
}

function readText(value, label, maxLength, required) {
  if (typeof value !== "string") {
    if (required) {
      throw new Error(label + " is required.");
    }
    return "";
  }

  const text = value.trim();
  if (required && !text) {
    throw new Error(label + " is required.");
  }
  if (text.length > maxLength) {
    throw new Error(label + " is too long.");
  }
  return text;
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
