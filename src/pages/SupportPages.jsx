import { useState } from "react";
import { ContactMethods } from "../components/SiteChrome";

export function SupportPage({ t }) {
  const [values, setValues] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const emailIsValid = /^\S+@\S+\.\S+$/.test(values.email);
  const messageIsValid = values.message.trim().length > 0;
  const update = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setSubmitted(false);
  };
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section><div className="w support-width">
      <h1>{t("Support", "الدعم")}</h1>
      <p>
        {t("Check the", "اطّلع على")} <a href="#faq">{t("FAQ", "الأسئلة الشائعة")}</a>.{" "}
        {t("The feedback form link is not configured yet.", "رابط نموذج الملاحظات لم يُعدّ بعد.")}{" "}
        <a href="#privacy-policy">{t("Privacy policy", "سياسة الخصوصية")}</a> · <a href="#terms">{t("Terms", "الشروط")}</a>
      </p>
      <div className="note">{t(
        "The contact form is not connected to a destination yet, so messages cannot be sent from this page.",
        "نموذج التواصل غير متصل بوجهة بعد، لذلك لا يمكن إرسال الرسائل من هذه الصفحة.",
      )}</div>
      <form onSubmit={submit} noValidate>
        <label htmlFor="support-name">{t("Name (optional)", "الاسم (اختياري)")}</label>
        <input id="support-name" name="name" />
        <label htmlFor="support-email">{t("Email", "البريد الإلكتروني")}</label>
        <input id="support-email" name="email" type="email" value={values.email} onChange={update} aria-describedby="email-error" />
        <div className="er" id="email-error" role="alert">
          {submitted && !emailIsValid && t("Enter a valid email address.", "أدخل بريدًا إلكترونيًا صحيحًا.")}
        </div>
        <label htmlFor="support-category">{t("Category", "التصنيف")}</label>
        <select className="f" id="support-category" name="category">
          {[
            ["Bug report", "بلاغ عن خطأ"], ["Feedback", "ملاحظات"],
            ["Privacy request", "طلب خصوصية"], ["Other", "أخرى"],
          ].map(([en, ar]) => <option key={en}>{t(en, ar)}</option>)}
        </select>
        <label htmlFor="support-message">{t("Message", "الرسالة")}</label>
        <textarea id="support-message" name="message" rows="5" value={values.message} onChange={update} aria-describedby="message-error" />
        <div className="er" id="message-error" role="alert">
          {submitted && !messageIsValid && t("Please write a message.", "يرجى كتابة رسالة.")}
        </div>
        <label htmlFor="support-device">{t("App version / device (optional)", "إصدار التطبيق / الجهاز (اختياري)")}</label>
        <input id="support-device" name="device" />
        <p className="mut form-hint">{t("Do not include sensitive information. See the privacy policy.", "لا تُدرج معلومات حساسة. راجع سياسة الخصوصية.")}</p>
        <button className="btn" type="submit">{t("Send", "إرسال")}</button>
        <div role="status" aria-live="polite">
          {submitted && emailIsValid && messageIsValid && t(
            "Submission is not configured yet. Your message was not sent.",
            "الإرسال غير مُعدّ بعد. لم تُرسل رسالتك.",
          )}
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
