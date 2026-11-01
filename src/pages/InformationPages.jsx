import { useState } from "react";
import { developer, developerLinks, downloadLinks, faqItems, features, howItWorks } from "../data";
import { CardGrid, DownloadPlatforms, GpsNote, PhoneMockup } from "../components/SiteChrome";

function DeveloperLinkIcon({ icon }) {
  const iconContent = {
    email: <path d="M3 5h18v14H3zM3 6l9 7 9-7" />,
    website: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    github: <><path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.3 14 4a13.2 13.2 0 0 0-6 0C4.5 1.3 2.3 2.6 2.3 2.6a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 .8 9.8c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7m0-10v.1M12 17v-7m0 3a3 3 0 0 1 6 0v4" /></>,
  };

  return (
    <svg className="developer-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      {iconContent[icon]}
    </svg>
  );
}

function developerLink(field, value) {
  const trimmedValue = value.trim();
  if (!trimmedValue) return "";
  if (field === "email") {
    return `mailto:${trimmedValue.replace(/^mailto:/i, "")}`;
  }
  if (/^https?:\/\//i.test(trimmedValue)) return trimmedValue;
  return `https://${trimmedValue}`;
}

export function FeaturesPage({ t }) {
  const categories = [
    ["Explore Cairo Metro", "استكشف مترو القاهرة", [0, 1]],
    ["Plan Your Journey", "خطط رحلتك", [2, 3, 4, 5]],
    ["Walking Navigation", "التنقل سيرًا على الأقدام", [6, 7]],
    ["Live Journey Tracking", "تتبع رحلتك المباشرة", [8, 9, 10]],
    ["Trip History & Favourites", "سجل الرحلات والمفضلة", [11]],
  ];

  return (
    <section>
      <div className="w">
        <h1>{t("Rota Features", "مميزات روتا")}</h1>

        <p className="mut">
          {t(
            "Everything you need to make your Cairo Metro journeys easier, from planning your route to tracking your trip.",
            "كل ما تحتاجه لجعل رحلاتك بمترو القاهرة أسهل، بدايةً من تخطيط مسارك وحتى متابعة رحلتك."
          )}
        </p>

        {categories.map(([en, ar, indexes]) => (
          <div key={en}>
            <h2>{t(en, ar)}</h2>
            <CardGrid
              items={indexes.map((index) => features[index])}
              t={t}
            />
          </div>
        ))}

        <h2>
          {t("Feedback & Notifications", "الملاحظات والإشعارات")}
        </h2>

        <CardGrid
          items={[
            [
              "Share your feedback and help us improve Rota.",
              "شاركنا ملاحظاتك وساعدنا على تحسين روتا."
            ],
            [
              "Receive supported notifications to stay updated.",
              "استقبل الإشعارات المدعومة للبقاء على اطلاع."
            ],
          ]}
          t={t}
        />

        <div className="note">
          {t(
            "Location access is required for nearby station discovery, walking navigation and live trip tracking. Background location access may be needed to keep tracking your journey when the app is not in the foreground. You can manage these permissions anytime through your device settings.",
            "يلزم السماح بالوصول إلى الموقع للعثور على المحطات القريبة واستخدام التنقل سيرًا على الأقدام وتتبع الرحلات المباشرة. وقد يتطلب استمرار تتبع رحلتك أثناء عدم استخدام التطبيق في الواجهة السماح بالوصول إلى الموقع في الخلفية. يمكنك إدارة هذه الأذونات في أي وقت من إعدادات جهازك."
          )}
        </div>

        <GpsNote t={t} />
      </div>
    </section>
  );
}

export function TicketsPage({ t, ticketConfig }) {
  const ticketNames = {
    "1": ["Yellow Ticket", "التذكرة الصفراء"],
    "2": ["Green Ticket", "التذكرة الخضراء"],
    "3": ["Red Ticket", "التذكرة الحمراء"],
    "4": ["Blue Ticket", "التذكرة الزرقاء"],
  };

  return (
    <section><div className="w">
      <h1>{t("Ticket information", "معلومات التذاكر")}</h1>
      <div className="note">{t(
        "Informational only. Rota does not sell, issue, validate or store tickets. Fares and conditions can change; verify against current official information.",
        "للمعلومات فقط. روتا لا يبيع التذاكر ولا يصدرها ولا يتحقق منها ولا يخزنها. قد تتغير الأجرة والشروط، فتحقق من المعلومات الرسمية الحالية.",
      )}</div>
      {/* <p className={`ticket-status ${ticketConfig.error ? "has-error" : ""}`} role={ticketConfig.error ? "alert" : "status"}>
        {ticketConfig.loading
          ? t("Connecting to Firebase Remote Config…", "جارٍ الاتصال بـ Firebase Remote Config…")
          : ticketConfig.error
            ? t(ticketConfig.error.en, ticketConfig.error.ar)
            : t("Ticket information loaded from Firebase Remote Config.", "تم تحميل معلومات التذاكر من Firebase Remote Config.")}
      </p> */}
      {ticketConfig.loading && <div className="ticket-loading" aria-hidden="true" />}
      {!ticketConfig.loading && ticketConfig.source === "remote" && <div className="g ticket-grid">{ticketConfig.tickets.map((ticket) => {
        const [englishName, arabicName] = ticketNames[ticket.id] ?? [ticket.title, ticket.title];
        const fares = [
          [t("Standard", "عادية"), ticket.price],
          [t("Elderly", "كبار السن"), ticket.elderlyPrice],
          [t("Disability", "ذوي الإعاقة"), ticket.disabilityPrice],
        ];

        return (
          <article
            className="c ticket-card"
            key={ticket.id}
            style={{
              "--ticket-accent": ticket.color,
              "--ticket-surface": ticket.secondaryColor,
              "--ticket-ink": ticket.tertiaryColor,
            }}
          >
            <div className="ticket-card-heading">
              <h2>{t(englishName, arabicName)}</h2>
              <span className="ticket-coverage">
                {t(`Up to ${ticket.maxNumOfStations} stations`, `حتى ${ticket.maxNumOfStations} محطة`)}
              </span>
            </div>
            <div className="ticket-fares">
              {fares.map(([label, price]) => (
                <div className="ticket-fare" key={label}>
                  <span>{label}</span>
                  <strong>{price} <small>{t("EGP", "جنيه")}</small></strong>
                </div>
              ))}
            </div>
          </article>
        );
      })}</div>}
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
  const configuredLinks = developerLinks
    .map(({ field, label, labelAr, icon }) => ({
      field,
      label,
      labelAr,
      icon,
      value: developer[field].trim(),
      href: developerLink(field, developer[field]),
    }))
    .filter(({ value }) => value);

  const hasDeveloperInfo = [
    developer.name,
    developer.nameAr,
    developer.image,
    developer.role,
    developer.roleAr,
    developer.bio,
    developer.bioAr,
  ].some((value) => value.trim()) || configuredLinks.length > 0;

  return (
    <section>
      <div className="w narrow">
        <h1>{t("About Rota", "عن روتا")}</h1>

        <p>
          {t(
            "Rota is designed to make Cairo Metro journeys easier, smarter, and more convenient. Explore metro lines, plan your trips, find the nearest station with walking distance and estimated time, calculate fares, track your journey progress, and save your favourite trips for quick access.",
            "تم تصميم روتا لجعل رحلات مترو القاهرة أسهل وأكثر ذكاءً وراحة. استكشف خطوط المترو، وخطط رحلاتك، واعثر على أقرب محطة مع معرفة مسافة ووقت المشي المتوقع، واحسب الأجرة، وتابع تقدم رحلتك، واحفظ رحلاتك المفضلة للوصول إليها بسهولة."
          )}
        </p>

        <div className="c">
          <h2>{t("Developer", "المطوّر")}</h2>

          {hasDeveloperInfo ? (
            <div className="developer-profile">
              {developer.image.trim() && (
                <img
                  className="developer-image"
                  src={developer.image}
                  alt={t(developer.imageAlt, developer.imageAltAr)}
                />
              )}

              <div className="developer-details">
                {(developer.name.trim() || developer.nameAr.trim()) && (
                  <h3 className="developer-name">
                    {t(developer.name, developer.nameAr)}
                  </h3>
                )}

                {(developer.role.trim() || developer.roleAr.trim()) && (
                  <p className="mut">
                    {t(developer.role, developer.roleAr)}
                  </p>
                )}

                {(developer.bio.trim() || developer.bioAr.trim()) && (
                  <p>
                    {t(developer.bio, developer.bioAr)}
                  </p>
                )}

                {configuredLinks.length > 0 && (
                  <ul className="developer-links">
                    {configuredLinks.map(
                      ({ field, label, labelAr, icon, value, href }) => (
                        <li key={field}>
                          <DeveloperLinkIcon icon={icon} />
                          <strong>{t(label, labelAr)}: </strong>
                          <a
                            href={href}
                            target={field === "email" ? undefined : "_blank"}
                            rel={
                              field === "email"
                                ? undefined
                                : "noopener noreferrer"
                            }
                          >
                            {value}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <p className="mut">
              {t(
                "Developer details are not configured yet.",
                "لم يتم إعداد بيانات المطوّر بعد."
              )}
            </p>
          )}
        </div>

        <div className="note">
          {t(
            "Rota is an independent application and is not affiliated with, operated or endorsed by Cairo Metro or the National Authority for Tunnels.",
            "روتا تطبيق مستقل وغير تابع لمترو القاهرة أو الهيئة القومية للأنفاق ولا تشغّله أو تعتمده."
          )}
        </div>
      </div>
    </section>
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
