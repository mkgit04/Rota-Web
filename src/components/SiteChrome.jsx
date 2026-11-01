import { navigation, pageTitles } from "../data";

export function Header({ page, language, setLanguage, onThemeToggle, menuOpen, setMenuOpen, t }) {
  return (
    <header>
      <div className="w bar">
        <a className="logo" href="#home">
          <i aria-hidden="true"><b /><s /><b /></i>Rota
        </a>
        <nav id="nav" className={menuOpen ? "o" : ""} aria-label={t("Main", "القائمة الرئيسية")}>
          {navigation.map(([id, english, arabic]) => (
            <a href={`#${id}`} aria-current={page === id ? "page" : undefined} key={id}>
              {t(english, arabic)}
            </a>
          ))}
        </nav>
        <div className="ctl">
          <button className="ib" type="button" aria-label={t("Switch theme", "تغيير المظهر")} onClick={onThemeToggle}>◐</button>
          <button className="ib" type="button" aria-label={t("Change language", "تغيير اللغة")} onClick={setLanguage}>
            {language === "ar" ? "English" : "عربي"}
          </button>
          <button
            className="ib"
            id="mb"
            type="button"
            aria-label={t("Menu", "القائمة")}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >☰</button>
        </div>
      </div>
    </header>
  );
}

export function Footer({ t }) {
  const firstGroup = ["features", "tickets", "how-it-works", "faq"];
  const secondGroup = ["support", "contact", "about", "download"];
  const label = (id) => {
    const title = pageTitles[id]?.[0] ?? id;
    return t(title.split(" –")[0], pageTitles[id]?.[1].split(" –")[0] ?? id);
  };

  return (
    <footer>
      <div className="w">
        <div className="g">
          <div>
            <div className="logo">Rota</div>
            <p className="mut">{t("Independent Cairo Metro navigation and trip companion.", "رفيق مستقل للتنقل ورحلات مترو القاهرة.")}</p>
          </div>
          <div>{firstGroup.map((id) => <a href={`#${id}`} key={id}>{label(id)}</a>)}</div>
          <div>
            {secondGroup.map((id) => <a href={`#${id}`} key={id}>{label(id)}</a>)}
            <a href="#privacy-policy">{t("Privacy policy", "سياسة الخصوصية")}</a>
            <a href="#terms">{t("Terms of service", "شروط الخدمة")}</a>
          </div>
          <div><strong>{t("Contact", "تواصل")}</strong><br /><span className="mut">{t("Not configured yet", "لم يتم الإعداد بعد")}</span></div>
        </div>
        <p className="mut footer-copy">
          © {new Date().getFullYear()} Rota. {t(
            "Rota is an independent app, not affiliated with Cairo Metro or the National Authority for Tunnels.",
            "روتا تطبيق مستقل غير تابع لمترو القاهرة أو الهيئة القومية للأنفاق.",
          )}
        </p>
      </div>
    </footer>
  );
}

export function PhoneMockup({ t }) {
  return (
    <div className="ph" role="img" aria-label={t("Illustrative app mockup, not a real screenshot", "نموذج توضيحي للتطبيق وليس لقطة شاشة حقيقية")}>
      <span className="tag">{t("Illustrative demo", "عرض توضيحي")}</span>
      <h3 className="phone-title">{t("Origin → Destination", "البداية ← الوجهة")}</h3>
      <div className="rt"><b className="f" /><s /><b /><s /><b /></div>
      <div className="phone-stations">
        <span>{t("Origin", "البداية")}</span><span>{t("Transfer", "تبديل")}</span><span>{t("Destination", "الوجهة")}</span>
      </div>
      <p className="phone-fare">
        {t("Fare: — EGP (demo)", "الأجرة: — جنيه (توضيحي)")}<br />
        {t("Duration: — min (demo)", "المدة: — دقيقة (توضيحي)")}
      </p>
      <div className="pr" aria-label={t("Progress", "التقدم")}><i /></div>
      <p className="mut phone-current">{t("Current station · Next station", "المحطة الحالية · المحطة التالية")}</p>
    </div>
  );
}

export function CardGrid({ items, t }) {
  return (
    <div className="g">
      {items.map(([english, arabic], index) => (
        <div className="c" key={`${english}-${index}`}><h3>{t(english, arabic)}</h3></div>
      ))}
    </div>
  );
}

export function GpsNote({ t }) {
  return (
    <div className="note">
      <strong>{t("GPS and tracking limits", "حدود GPS والتتبع")}</strong><br />
      {t(
        "GPS can be weak or unavailable underground, so station detection may be interrupted. Background tracking depends on permissions, battery settings and system limits, and is not guaranteed after the operating system closes the app.",
        "قد تضعف إشارة GPS أو تنقطع تحت الأرض، لذلك قد يتوقف اكتشاف المحطات. يعتمد التتبع في الخلفية على الأذونات وإعدادات البطارية وقيود النظام، ولا يُضمن بعد إغلاق النظام للتطبيق.",
      )}
    </div>
  );
}
