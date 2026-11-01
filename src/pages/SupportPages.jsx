import { useEffect, useRef, useState } from "react";
import { ContactMethods } from "../components/SiteChrome";

const SUPPORT_WEB_APP_URL = import.meta.env.VITE_SUPPORT_WEB_APP_URL?.trim()
  || "https://script.google.com/macros/s/AKfycbySIz9niuTvlxh6wAZexW2Ymv_bsejgQbI5TlMUy6s-Fg6ZQ61XCO4t2NhC1DlcQOWw/exec";
const REQUEST_TIMEOUT_MS = 60000;

const responseMessages = {
  configuration: [
    "Support messages aren't configured yet. Deploy the Google Apps Script web app and set VITE_SUPPORT_WEB_APP_URL.",
    "لم يتم إعداد رسائل الدعم بعد. انشر تطبيق Google Apps Script واضبط VITE_SUPPORT_WEB_APP_URL.",
  ],
  invalid: ["Enter a valid email address and message.", "أدخل بريدًا إلكترونيًا صحيحًا ورسالة."],
  sending: ["Sending your message…", "جارٍ إرسال رسالتك…"],
  success: ["Your support message was saved. We'll be in touch if a reply is needed.", "تم حفظ رسالتك. سنتواصل معك إذا لزم الرد."],
  rateLimited: ["A recent message was already received from this email. Please wait a minute before sending another.", "تم استلام رسالة حديثة من هذا البريد. يُرجى الانتظار دقيقة قبل إرسال رسالة أخرى."],
  timeout: ["We couldn't confirm whether your message was saved. Check with support before submitting again.", "تعذر التأكد من حفظ رسالتك. تواصل مع الدعم قبل إعادة إرسالها."],
  unavailable: ["The support service is temporarily unavailable. Please try again later.", "خدمة الدعم غير متاحة مؤقتًا. يُرجى المحاولة لاحقًا."],
  failure: ["Your message couldn't be saved. Please try again later.", "تعذر حفظ رسالتك. يُرجى المحاولة لاحقًا."],
};

function getSupportEndpoint() {
  try {
    const endpoint = new URL(SUPPORT_WEB_APP_URL);
    if (
      endpoint.origin !== "https://script.google.com"
      || !/^\/macros\/s\/[^/]+\/(?:exec|dev)$/.test(endpoint.pathname)
    ) {
      return "";
    }
    return endpoint.href;
  } catch {
    return "";
  }
}

function getResponseMessage(result) {
  if (result.success) return responseMessages.success;
  if (result.code === "rate_limited") return responseMessages.rateLimited;
  if (result.code === "invalid") return responseMessages.invalid;
  if (result.code === "timeout") return responseMessages.timeout;
  if (result.code === "unavailable") return responseMessages.unavailable;
  return responseMessages.failure;
}

export function SupportPage({ t }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    category: "feedback",
    message: "",
    device: "",
    website: "",
  });
  const [attempted, setAttempted] = useState(false);
  const [submission, setSubmission] = useState({ kind: "idle", message: null });
  const pendingRequest = useRef(null);
  const isSubmitting = submission.kind === "submitting";
  const emailIsValid = /^\S+@\S+\.\S+$/.test(values.email.trim());
  const messageIsValid = values.message.trim().length > 0;

  useEffect(() => () => {
    const pending = pendingRequest.current;
    if (!pending) return;
    window.clearTimeout(pending.timeout);
    window.removeEventListener("message", pending.onMessage);
    pending.form.remove();
    pending.iframe.remove();
    pendingRequest.current = null;
  }, []);

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmission((current) => current.kind === "submitting"
      ? current
      : { kind: "idle", message: null });
  };

  const submit = (event) => {
    event.preventDefault();
    setAttempted(true);
    if (pendingRequest.current) return;

    if (!emailIsValid || !messageIsValid) {
      setSubmission({ kind: "error", message: responseMessages.invalid });
      return;
    }

    const endpoint = getSupportEndpoint();
    if (!endpoint) {
      setSubmission({ kind: "error", message: responseMessages.configuration });
      return;
    }

    const requestId = window.crypto?.randomUUID?.()
      ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const iframe = document.createElement("iframe");
    iframe.name = `support-submit-${requestId}`;
    iframe.title = "Support message submission";
    iframe.tabIndex = -1;
    iframe.hidden = true;

    const form = document.createElement("form");
    form.method = "POST";
    form.action = endpoint;
    form.target = iframe.name;
    form.hidden = true;

    const payload = {
      requestId,
      name: values.name,
      email: values.email.trim(),
      category: values.category,
      message: values.message.trim(),
      device: values.device,
      website: values.website,
    };

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.append(input);
    });

    const finish = (result) => {
      const pending = pendingRequest.current;
      if (!pending || pending.requestId !== requestId) return;
      window.clearTimeout(pending.timeout);
      window.removeEventListener("message", pending.onMessage);
      pending.form.remove();
      pending.iframe.remove();
      pendingRequest.current = null;

      if (result.success) {
        setValues({
          name: "",
          email: "",
          category: "feedback",
          message: "",
          device: "",
          website: "",
        });
        setAttempted(false);
        setSubmission({ kind: "success", message: getResponseMessage(result) });
      } else {
        setSubmission({ kind: "error", message: getResponseMessage(result) });
      }
    };

    const onMessage = (messageEvent) => {
      const googleOrigin = [
        "https://script.google.com",
        "https://script.googleusercontent.com",
      ].includes(messageEvent.origin);
      const sandboxedOrigin = messageEvent.origin === "null";
      if (
        (
          messageEvent.source !== iframe.contentWindow
          && !googleOrigin
          && !sandboxedOrigin
        )
        || messageEvent.data?.type !== "rota-support-result"
        || messageEvent.data?.requestId !== requestId
      ) {
        return;
      }
      finish({
        success: messageEvent.data.success === true,
        code: messageEvent.data.code,
      });
    };

    const timeout = window.setTimeout(
      () => finish({ success: false, code: "timeout" }),
      REQUEST_TIMEOUT_MS,
    );
    pendingRequest.current = { requestId, form, iframe, onMessage, timeout };
    window.addEventListener("message", onMessage);
    document.body.append(iframe, form);
    setSubmission({ kind: "submitting", message: responseMessages.sending });
    form.submit();
  };

  return (
    <section><div className="w support-width">
      <h1>{t("Support", "الدعم")}</h1>
      <p>
        {t("Check the", "اطّلع على")} <a href="#faq">{t("FAQ", "الأسئلة الشائعة")}</a>.{" "}
        {t("See our", "راجع")} <a href="#privacy-policy">{t("Privacy policy", "سياسة الخصوصية")}</a>.
      </p>
      <div className="note">{t(
        "Your message, email address and any optional details you provide will be sent to our support Google Sheet. Don't include sensitive information.",
        "ستُرسل رسالتك وبريدك الإلكتروني وأي تفاصيل اختيارية تقدمها إلى جدول بيانات دعم روتا على Google. لا تُدرج معلومات حساسة.",
      )}</div>
      <form onSubmit={submit} noValidate>
        <label htmlFor="support-name">{t("Name (optional)", "الاسم (اختياري)")}</label>
        <input id="support-name" name="name" value={values.name} onChange={update} maxLength="120" autoComplete="name" disabled={isSubmitting} />

        <label htmlFor="support-email">{t("Email", "البريد الإلكتروني")}</label>
        <input
          id="support-email"
          name="email"
          type="email"
          value={values.email}
          onChange={update}
          maxLength="254"
          autoComplete="email"
          aria-invalid={attempted && !emailIsValid}
          aria-describedby="email-error"
          disabled={isSubmitting}
        />
        <div className="er" id="email-error" role="alert">
          {attempted && !emailIsValid && t("Enter a valid email address.", "أدخل بريدًا إلكترونيًا صحيحًا.")}
        </div>

        <label htmlFor="support-category">{t("Category", "التصنيف")}</label>
        <select className="f" id="support-category" name="category" value={values.category} onChange={update} disabled={isSubmitting}>
          {[
            ["bug-report", "Bug report", "بلاغ عن خطأ"],
            ["feedback", "Feedback", "ملاحظات"],
            ["privacy-request", "Privacy request", "طلب خصوصية"],
            ["other", "Other", "أخرى"],
          ].map(([value, en, ar]) => <option value={value} key={value}>{t(en, ar)}</option>)}
        </select>

        <label htmlFor="support-message">{t("Message", "الرسالة")}</label>
        <textarea
          id="support-message"
          name="message"
          rows="5"
          value={values.message}
          onChange={update}
          maxLength="5000"
          aria-invalid={attempted && !messageIsValid}
          aria-describedby="message-error"
          disabled={isSubmitting}
        />
        <div className="er" id="message-error" role="alert">
          {attempted && !messageIsValid && t("Please write a message.", "يرجى كتابة رسالة.")}
        </div>

        <label htmlFor="support-device">{t("App version / device (optional)", "إصدار التطبيق / الجهاز (اختياري)")}</label>
        <input id="support-device" name="device" value={values.device} onChange={update} maxLength="200" disabled={isSubmitting} />
        <div className="support-honeypot" aria-hidden="true">
          <label htmlFor="support-website">Website</label>
          <input
            id="support-website"
            name="website"
            value={values.website}
            onChange={update}
            tabIndex="-1"
            autoComplete="off"
            disabled={isSubmitting}
          />
        </div>

        <p className="mut form-hint">{t("Do not include sensitive information. See the privacy policy.", "لا تُدرج معلومات حساسة. راجع سياسة الخصوصية.")}</p>
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? t("Sending…", "جارٍ الإرسال…") : t("Send", "إرسال")}
        </button>
        <div className={`support-result ${submission.kind}`} role={submission.kind === "error" ? "alert" : "status"} aria-live="polite">
          {submission.message && t(...submission.message)}
        </div>
      </form>
    </div></section>
  );
}

export function ContactPage({ t }) {
  return (
    <section><div className="w">
      <h1>{t("Contact", "تواصل معنا")}</h1>
      <ContactMethods t={t} />
    </div></section>
  );
}
