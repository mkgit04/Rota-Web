import { contacts, downloadLinks, navigation, pageTitles } from "../data";
import logo from "../assets/app_logo.png";

function PlatformIcon({ platform }) {
  if (platform === "android") {
    return (
      <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 9a5 5 0 0 1 10 0v7H7zM5 10v5m14-5v5M9 5 7.5 3.5M15 5l1.5-1.5" />
        <circle cx="10" cy="7" r=".7" />
        <circle cx="14" cy="7" r=".7" />
      </svg>
    );
  }

  return (
    <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M10 5h4m-3 13h2" />
    </svg>
  );
}

function ContactIcon({ icon }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3c0 1.1-.9 2-2 2A16 16 0 0 1 5 5c0-1.1.9-2 2-2Z" />,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 2 2.5 4 4.5 4.5l1-1 2 1v1c0 .6-.5 1-1 1A8 8 0 0 1 8 9c0-.5.4-1 1-1h1l1 2-1 1" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" /></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />,
  };

  return (
    <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[icon]}
    </svg>
  );
}

function getContactHref(icon, value) {
  const contact = value.trim();
  if (!contact) return "";

  switch (icon) {
    case "email":
      return contact.startsWith("mailto:") ? contact : `mailto:${contact}`;
    case "phone": {
      const number = contact.replace(/^tel:/, "").replace(/[^\d+*#,;]/g, "");
      return number ? `tel:${number}` : "";
    }
    case "whatsapp": {
      if (/^https?:\/\//i.test(contact)) return contact;
      const number = contact.replace(/\D/g, "");
      return number ? `https://wa.me/${number}` : "";
    }
    case "instagram": {
      if (/^https?:\/\//i.test(contact)) return contact;
      const username = contact.replace(/^@/, "").replace(/^\/+|\/+$/g, "");
      return username ? `https://www.instagram.com/${username}/` : "";
    }
    default:
      return contact;
  }
}

export function ContactMethods({ t, compact = false }) {
  const availableContacts = contacts
    .map((contact) => ({ ...contact, href: getContactHref(contact.icon, contact.value) }))
    .filter(({ href }) => href);

  if (availableContacts.length === 0) {
    return <p className="mut">{t("Contacts not configured yet.", "لم يتم إعداد بيانات التواصل بعد.")}</p>;
  }

  return (
    <div className={compact ? "contact-methods compact" : "g contact-methods"}>
      {availableContacts.map(({ label, labelAr, icon, href }) => (
        <a
          className={compact ? "contact-method" : "c contact-method"}
          href={href}
          key={icon}
          target={href.startsWith("https://") ? "_blank" : undefined}
          rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
        >
          <ContactIcon icon={icon} />
          {t(label, labelAr)}
        </a>
      ))}
    </div>
  );
}

export function DownloadPlatforms({ t }) {
  return (
    <div className="g download-platforms">
      {downloadLinks.map(({ platform, icon, url }) => {
        const availableUrl = url.trim();

        return (
          <div className="c" key={platform}>
            <h3 className="download-platform-title"><PlatformIcon platform={icon} />{platform}</h3>
            {availableUrl ? (
              <a className="btn" href={availableUrl} target="_blank" rel="noopener noreferrer">
                {t(`Download from ${platform}`, `حمّل لنظام ${platform === "Android" ? "أندرويد" : "iOS"}`)}
              </a>
            ) : (
              <p className="mut">{t("Download link isn't available yet.", "رابط التحميل غير متاح بعد.")}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Header({ page, language, setLanguage, onThemeToggle, menuOpen, setMenuOpen, t }) {
  return (
    <header>
      <div className="w bar">
        <a className="logo" href="#home">
          <i aria-hidden="true"><img src={logo} width="28" alt="Rota" /></i>Rota
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
            {language === "ar" ? "EN" : "AR"}
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
          <div>
            <strong>{t("Contact", "تواصل")}</strong>
            <ContactMethods t={t} compact />
          </div>
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
