import { features } from "../data";
import { CardGrid, DownloadPlatforms, GpsNote, PhoneMockup } from "../components/SiteChrome";

export default function HomePage({ t }) {
  const steps = [
    ["Find a station or select origin and destination.", "ابحث عن محطة أو اختر البداية والوجهة."],
    ["Review route, transfers, fare and estimated duration.", "راجع المسار والتبديل والأجرة والمدة."],
    ["Start a live trip when travelling and follow progress.", "ابدأ رحلة مباشرة أثناء السفر وتابع التقدم."],
  ];

  return (
    <>
      <section className="hs">
        <i className="bl" aria-hidden="true" /><i className="bl b2" aria-hidden="true" />
        <div className="w hero">
          <div>
            <span className="tag">{t("Independent Cairo Metro companion", "رفيقك المستقل لمترو القاهرة")}</span>
            <h1>{t("Your Cairo Metro Journey, Made Simpler.", "رحلتك في مترو القاهرة، أبسط.")}</h1>
            <p className="mut">{t(
              "Explore metro lines, plan your journey, calculate fares, find nearby stations, and follow your trip with Rota.",
              "استكشف خطوط المترو، وخطط رحلتك، واحسب الأجرة، وابحث عن أقرب محطة، وتابع رحلتك مع روتا.",
            )}</p>
            <a className="btn" href="#features">{t("Explore Features", "استكشف المزايا")} <span className="arr">→</span></a>
            <a className="btn s" href="#how-it-works">{t("How Rota Works", "كيف يعمل روتا")}</a>
          </div>
          <PhoneMockup t={t} />
        </div>
      </section>
      <section className="bg2">
        <div className="w"><h2>{t("What Rota does", "ماذا يقدم روتا")}</h2><CardGrid items={features} t={t} /></div>
      </section>
      <section>
        <div className="w">
          <h2>{t("How it works", "كيف يعمل")}</h2>
          <div className="g">{steps.map(([en, ar], index) => (
            <div className="c" key={en}><span className="tag">{index + 1}</span><p>{t(en, ar)}</p></div>
          ))}</div>
          <GpsNote t={t} />
        </div>
      </section>
      <section className="bg2">
        <div className="w">
          <h2>{t("Journey planner and live trip", "مخطط الرحلة والرحلة المباشرة")}</h2>
          <p className="mut">{t(
            "The mockup above is a conceptual demo with placeholder data; it is not real fare or route information.",
            "النموذج أعلاه عرض توضيحي ببيانات افتراضية وليس معلومات حقيقية عن الأجرة أو المسار.",
          )}</p>
          <p>{t(
            "A persistent notification shows your active trip. Rota does not sell tickets or open metro gates.",
            "يعرض إشعار مستمر رحلتك النشطة. روتا لا يبيع التذاكر ولا يفتح بوابات المترو.",
          )} <a href="#tickets">{t("Ticket information", "معلومات التذاكر")}</a></p>
        </div>
      </section>
      <section>
        <div className="w c">
          <h2>{t("Ready when you are", "جاهز عندما تكون جاهزًا")}</h2>
          <p>{t("Choose your platform to check download availability.", "اختر منصتك للتحقق من توفر التحميل.")}</p>
          <DownloadPlatforms t={t} />
        </div>
      </section>
    </>
  );
}
