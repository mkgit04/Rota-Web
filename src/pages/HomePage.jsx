
import { features } from "../data";
import {
  CardGrid,
  DownloadPlatforms,
  GpsNote,
  PhoneMockup,
} from "../components/SiteChrome";

export default function HomePage({ t }) {
  const steps = [
    [
      "Find the nearest metro station or choose your starting point and destination.",
      "اعثر على أقرب محطة مترو أو اختر محطة البداية والوجهة.",
    ],
    [
      "Compare routes, transfers, estimated fares and journey durations.",
      "قارن بين المسارات وعدد مرات التبديل والأجرة والمدة المتوقعة.",
    ],
    [
      "Start your journey and follow your progress with live trip tracking.",
      "ابدأ رحلتك وتابع تقدمك من خلال التتبع المباشر.",
    ],
    [
      "Save your favourite trips and revisit your trip history anytime.",
      "احفظ رحلاتك المفضلة وارجع إلى سجل رحلاتك في أي وقت.",
    ],
  ];

  return (
    <>
      {/* Hero */}
      <section className="hs">
        <i className="bl" aria-hidden="true" />
        <i className="bl b2" aria-hidden="true" />

        <div className="w hero">
          <div>
            <span className="tag">
              {t(
                "Your Independent Cairo Metro Companion",
                "رفيقك المستقل لمترو القاهرة"
              )}
            </span>

            <h1>
              {t(
                "Navigate Cairo Metro. Travel Smarter with Rota.",
                "تنقل في مترو القاهرة. رحلات أذكى مع روتا."
              )}
            </h1>

            <p className="mut">
              {t(
                "Discover metro lines, find the nearest station, calculate walking distances and estimated times, plan your journey, and track every trip with ease.",
                "اكتشف خطوط المترو، واعثر على أقرب محطة، واحسب مسافات وأوقات المشي المتوقعة، وخطط رحلتك وتابع كل رحلة بسهولة."
              )}
            </p>

            <div className="hero-actions">
              <a className="btn" href="#download">
                {t("Get Rota", "حمّل روتا")}
                <span className="arr">→</span>
              </a>

              <a className="btn s" href="#features">
                {t("Explore Features", "استكشف المزايا")}
              </a>
            </div>
          </div>

          <PhoneMockup t={t} />
        </div>
      </section>

      {/* Features */}
      <section className="bg2" id="features">
        <div className="w">
          <h2>{t("Everything You Need for Your Journey", "كل ما تحتاجه لرحلتك")}</h2>

          <p className="mut">
            {t(
              "From finding your nearest station to keeping track of your journeys, Rota makes navigating Cairo Metro easier.",
              "من العثور على أقرب محطة وحتى متابعة رحلاتك، يجعل روتا التنقل في مترو القاهرة أسهل."
            )}
          </p>

          <CardGrid items={features} t={t} />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="w">
          <h2>{t("Your Journey in Four Simple Steps", "رحلتك في أربع خطوات بسيطة")}</h2>

          <div className="g">
            {steps.map(([en, ar], index) => (
              <div className="c" key={en}>
                <span className="tag">{index + 1}</span>
                <p>{t(en, ar)}</p>
              </div>
            ))}
          </div>

          <GpsNote t={t} />
        </div>
      </section>

      {/* Walking and live tracking */}
      <section className="bg2">
        <div className="w">
          <h2>
            {t(
              "More Than Just a Metro Map",
              "أكثر من مجرد خريطة للمترو"
            )}
          </h2>

          <div className="g">
            <div className="c">
              <h3>{t("Walking Navigation", "التنقل سيرًا على الأقدام")}</h3>
              <p>
                {t(
                  "Find the nearest metro station using your location. Get walking distance and estimated travel time without depending on external navigation APIs.",
                  "اعثر على أقرب محطة مترو باستخدام موقعك، وتعرّف على مسافة المشي والوقت المتوقع للوصول دون الاعتماد على واجهات الملاحة الخارجية."
                )}
              </p>
            </div>

            <div className="c">
              <h3>{t("Live Trip Tracking", "تتبع الرحلات المباشرة")}</h3>
              <p>
                {t(
                  "Follow your active journey, monitor your trip progress, and stay updated through a persistent notification.",
                  "تابع رحلتك النشطة وراقب تقدمها وابقَ على اطلاع من خلال إشعار مستمر."
                )}
              </p>
            </div>

            <div className="c">
              <h3>{t("Trip History", "سجل الرحلات")}</h3>
              <p>
                {t(
                  "Keep track of your previous journeys and review your trip details whenever you need them.",
                  "احتفظ بسجل رحلاتك السابقة وراجع تفاصيلها في أي وقت تحتاج إليه."
                )}
              </p>
            </div>

            <div className="c">
              <h3>{t("Favourite Trips", "الرحلات المفضلة")}</h3>
              <p>
                {t(
                  "Save frequently used journeys and access them quickly whenever you travel.",
                  "احفظ رحلاتك المتكررة للوصول إليها بسرعة في كل مرة تسافر فيها."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey planner */}
      <section>
        <div className="w">
          <h2>
            {t("Plan Ahead. Travel with Confidence.", "خطط مسبقًا وسافر بثقة")}
          </h2>

          {/* <p className="mut">
            {t(
              "The phone mockup shown above is a conceptual demonstration using placeholder data. It does not represent actual fares, routes or live journey information.",
              "نموذج الهاتف المعروض أعلاه هو عرض توضيحي يستخدم بيانات افتراضية، ولا يمثل الأجرة أو المسارات أو معلومات الرحلات المباشرة الفعلية."
            )}
          </p> */}

          <p>
            {t(
              "Rota helps you plan and follow your journey, but it does not sell tickets, issue tickets or operate metro gates.",
              "يساعدك روتا على تخطيط رحلتك ومتابعتها، لكنه لا يبيع التذاكر أو يصدرها ولا يتحكم في بوابات المترو."
            )}
            {" "}
            <a href="#tickets">
              {t("Learn about tickets", "تعرف على معلومات التذاكر")}
            </a>
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg2" id="download">
        <div className="w c">
          <h2>{t("Ready for a Smarter Metro Journey?", "مستعد لرحلة مترو أكثر ذكاءً؟")}</h2>

          <p>
            {t(
              "Get started with Rota and make your Cairo Metro journeys easier.",
              "ابدأ باستخدام روتا واجعل رحلاتك في مترو القاهرة أسهل."
            )}
          </p>

          <DownloadPlatforms t={t} />
        </div>
      </section>
    </>
  );
}
