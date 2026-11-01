import { useState } from "react";
import { downloadLinks, faqItems, features, howItWorks, ticketTypes } from "../data";
import { CardGrid, DownloadPlatforms, GpsNote, PhoneMockup } from "../components/SiteChrome";

export function FeaturesPage({ t }) {
  const categories = [
    ["Metro exploration", "استكشاف المترو", [0, 1]],
    ["Journey planning", "تخطيط الرحلة", [2, 3, 4, 5]],
    ["Location and navigation", "الموقع والتنقل", [6, 7]],
    ["Live trip", "الرحلة المباشرة", [8, 9, 10]],
    ["Personalization", "التخصيص", [11]],
  ];
  return (
    <section><div className="w">
      <h1>{t("Features", "المزايا")}</h1>
      {categories.map(([en, ar, indexes]) => (
        <div key={en}><h2>{t(en, ar)}</h2><CardGrid items={indexes.map((index) => features[index])} t={t} /></div>
      ))}
      <h2>{t("Feedback and notifications", "الملاحظات والإشعارات")}</h2>
      <CardGrid items={[
        ["Submit feedback via the configured feedback form", "أرسل ملاحظاتك عبر نموذج الملاحظات"],
        ["Supported push notifications", "إشعارات الدفع المدعومة"],
      ]} t={t} />
      <p className="mut">{t(
        "Location permission is used for nearby stations and live trips; you can change it in device settings.",
        "يُستخدم إذن الموقع لإيجاد المحطات القريبة والرحلات المباشرة، ويمكنك تغييره من إعدادات الجهاز.",
      )}</p>
      <GpsNote t={t} />
    </div></section>
  );
}

export function TicketsPage({ t }) {
  const fields = [
    ["Price (EGP)", "السعر (جنيه)"], ["Coverage", "التغطية"], ["Eligibility", "الأهلية"],
    ["Conditions", "الشروط"], ["Last verified", "آخر تحقق"], ["About", "نبذة"],
  ];
  return (
    <section><div className="w">
      <h1>{t("Ticket information", "معلومات التذاكر")}</h1>
      <div className="note">{t(
        "Informational only. Rota does not sell, issue, validate or store tickets. Fares and conditions can change; verify against current official information.",
        "للمعلومات فقط. روتا لا يبيع التذاكر ولا يصدرها ولا يتحقق منها ولا يخزنها. قد تتغير الأجرة والشروط، فتحقق من المعلومات الرسمية الحالية.",
      )}</div>
      <div className="g">{ticketTypes.map((ticket) => (
        <div className="c" key={ticket}>
          <h3>{t(`Ticket type ${ticket + 1}`, `نوع التذكرة ${ticket + 1}`)}</h3>
          {fields.map(([en, ar]) => (
            <p className="ticket-field" key={en}><strong>{t(en, ar)}:</strong> <span className="mut">{t("Details not yet supplied", "لم تُقدَّم التفاصيل بعد")}</span></p>
          ))}
        </div>
      ))}</div>
    </div></section>
  );
}

export function HowItWorksPage({ t }) {
  return (
    <section><div className="w">
      <h1>{t("How Rota works", "كيف يعمل روتا")}</h1>
      <div className="g">{howItWorks.map(([en, ar], index) => (
        <div className="c" key={en}><span className="tag">{index + 1}</span><p>{t(en, ar)}</p></div>
      ))}</div>
      <h2 className="section-subheading">{t("GPS, permissions and battery", "GPS والأذونات والبطارية")}</h2>
      <GpsNote t={t} />
      <p className="mut">{t(
        "Live tracking can use more battery. Revoking location permission or restricting background activity can interrupt a trip.",
        "قد يستهلك التتبع المباشر بطارية أكثر. سحب إذن الموقع أو تقييد النشاط في الخلفية قد يقطع الرحلة.",
      )}</p>
    </div></section>
  );
}

export function FaqPage({ t }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filteredItems = faqItems.filter((item) =>
    item.join(" ").toLocaleLowerCase().includes(normalizedQuery),
  );

  return (
    <section><div className="w narrow">
      <h1>{t("FAQ", "الأسئلة الشائعة")}</h1>
      <label htmlFor="faq-search">{t("Search questions", "ابحث في الأسئلة")}</label>
      <input id="faq-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} />
      {filteredItems.length === 0 && <p className="mut">{t("No matching questions.", "لا توجد أسئلة مطابقة.")}</p>}
      <div>{filteredItems.map(([question, answer, arabicQuestion, arabicAnswer]) => (
        <details key={question}><summary>{t(question, arabicQuestion)}</summary><p>{t(answer, arabicAnswer)}</p></details>
      ))}</div>
    </div></section>
  );
}

export function AboutPage({ t }) {
  return (
    <section><div className="w narrow">
      <h1>{t("About Rota", "عن روتا")}</h1>
      <p>{t(
        "Rota exists to make Cairo Metro journeys easier to understand: explore lines, plan trips, calculate fares and follow your progress.",
        "وُجد روتا ليجعل رحلات مترو القاهرة أسهل فهمًا: استكشاف الخطوط وتخطيط الرحلات وحساب الأجرة ومتابعة التقدم.",
      )}</p>
      <div className="c"><h3>{t("Developer", "المطوّر")}</h3><p className="mut">{t("Not configured yet", "لم يتم الإعداد بعد")}</p></div>
      <div className="note">{t(
        "Rota is an independent application and is not affiliated with, operated or endorsed by Cairo Metro or the National Authority for Tunnels.",
        "روتا تطبيق مستقل وغير تابع لمترو القاهرة أو الهيئة القومية للأنفاق ولا تشغّله أو تعتمده.",
      )}</div>
    </div></section>
  );
}

export function DownloadPage({ t }) {
  const hasAvailableLink = downloadLinks.some(({ url }) => url.trim());

  return (
    <section><div className="w">
      <h1>{t("Download", "التحميل")}</h1>
      <p className="mut">{hasAvailableLink
        ? t("Choose your platform to download Rota.", "اختر منصتك لتحميل روتا.")
        : t("Downloads aren't available yet. No store links have been published.", "التحميل غير متاح بعد. لم تُنشر أي روابط متاجر.")
      }</p>
      <div className="g">
        <DownloadPlatforms t={t} />
        <PhoneMockup t={t} />
      </div>
    </div></section>
  );
}
