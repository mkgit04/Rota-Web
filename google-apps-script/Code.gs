const SPREADSHEET_ID = "1sG8uIvrZsJMrGuSo2l1XOnYNC1ROYpX0BEpkSQabmJM";
const SUPPORT_SHEET_GID = 1058935008;
const SUPPORT_HEADERS = ["Received at", "Name", "Email", "Category", "Message", "App version / device"];
const ALLOWED_CATEGORIES = ["bug-report", "feedback", "privacy-request", "other"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REQUEST_ID_PATTERN = /^[\w-]{1,80}$/;
const EMAIL_RATE_LIMIT_SECONDS = 60;

function doPost(event) {
  const params = event && event.parameter ? event.parameter : {};
  const requestId = String(params.requestId || "");
  if (!REQUEST_ID_PATTERN.test(requestId)) {
    return createResponse_("", false, "invalid");
  }

  if (String(params.website || "").trim()) {
    return createResponse_(requestId, false, "invalid");
  }

  const submission = {
    name: String(params.name || "").trim(),
    email: String(params.email || "").trim(),
    category: String(params.category || ""),
    message: String(params.message || "").trim(),
    device: String(params.device || "").trim(),
  };

  if (
    !EMAIL_PATTERN.test(submission.email)
    || submission.email.length > 254
    || !ALLOWED_CATEGORIES.includes(submission.category)
    || !submission.message
    || submission.name.length > 120
    || submission.message.length > 5000
    || submission.device.length > 200
  ) {
    return createResponse_(requestId, false, "invalid");
  }

  const emailHash = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    submission.email.toLowerCase(),
  ).map((byte) => ((byte + 256) % 256).toString(16).padStart(2, "0")).join("");
  const cacheKey = `support-email-${emailHash}`;
  const lock = LockService.getScriptLock();

  if (!lock.tryLock(10000)) {
    return createResponse_(requestId, false, "unavailable");
  }

  try {
    const cache = CacheService.getScriptCache();
    if (cache.get(cacheKey)) {
      return createResponse_(requestId, false, "rate_limited");
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheets().find((candidate) => candidate.getSheetId() === SUPPORT_SHEET_GID);
    if (!sheet) {
      console.error(`Support sheet tab ${SUPPORT_SHEET_GID} was not found.`);
      return createResponse_(requestId, false, "unavailable");
    }

    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, SUPPORT_HEADERS.length).setValues([SUPPORT_HEADERS]);
    }

    const row = [
      new Date(),
      submission.name,
      submission.email,
      submission.category,
      submission.message,
      submission.device,
    ];
    const rowRange = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
    rowRange.setNumberFormats([["yyyy-mm-dd hh:mm:ss", "@", "@", "@", "@", "@"]]);
    rowRange.setValues([row]);

    try {
      cache.put(cacheKey, "received", EMAIL_RATE_LIMIT_SECONDS);
    } catch (error) {
      console.error("Could not apply the support submission rate limit.", error);
    }
    return createResponse_(requestId, true, "saved");
  } catch (error) {
    console.error("Could not save a support message to Google Sheets.", error);
    return createResponse_(requestId, false, "unavailable");
  } finally {
    lock.releaseLock();
  }
}

function createResponse_(requestId, success, code) {
  const response = JSON.stringify({
    type: "rota-support-result",
    requestId,
    success,
    code,
  });
  const html = `<!doctype html><meta charset="utf-8"><script>
    const response = ${response};
    window.top.postMessage(response, "*");
    if (window.parent !== window.top) window.parent.postMessage(response, "*");
  </script>`;
  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
