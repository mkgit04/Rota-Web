import { useEffect, useState } from "react";
import { pageTitles } from "./data";
import { Footer, Header } from "./components/SiteChrome";
import HomePage from "./pages/HomePage";
import {
  AboutPage,
  DownloadPage,
  FaqPage,
  FeaturesPage,
  HowItWorksPage,
  TicketsPage,
} from "./pages/InformationPages";
import { PrivacyPage, TermsPage } from "./pages/LegalPage";
import { ContactPage, SupportPage } from "./pages/SupportPages";

function readPreference(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function getPageFromHash() {
  const hash = window.location.hash.slice(1);
  return pageTitles[hash] ? hash : "home";
}

export default function App() {
  const [language, setLanguage] = useState(() => readPreference("rota-lang", "en"));
  const [theme, setTheme] = useState(() => readPreference("rota-theme", ""));
  const [page, setPage] = useState(getPageFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = (english, arabic) => language === "ar" ? arabic : english;

  useEffect(() => {
    const updatePage = () => {
      setPage(getPageFromHash());
      setMenuOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", updatePage);
    return () => window.removeEventListener("hashchange", updatePage);
  }, []);

  useEffect(() => {
    const updateHeader = () => {
      document.querySelector("header")?.classList.toggle("sc", window.scrollY > 8);
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(
      "main .w > h1, main .w > h2, main .w > p, main .w > .note, main .w > .c, main .w > form, main .g > *, main details, main .legal-section, footer .g > *",
    ).forEach((element, index) => {
      element.classList.add("rv");
      element.style.setProperty("--d", `${(index % 4) * 70}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [page]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = t(...pageTitles[page]);
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = t(
        "Explore Cairo Metro lines, plan journeys, calculate fares and follow your trip with Rota.",
        "استكشف خطوط مترو القاهرة وخطط رحلتك واحسب الأجرة وتابع رحلتك مع روتا.",
      );
    }
    try {
      window.localStorage.setItem("rota-lang", language);
    } catch {
      // Preferences remain available for the current page when storage is disabled.
    }
  }, [language, page]);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      if (theme) window.localStorage.setItem("rota-theme", theme);
      else window.localStorage.removeItem("rota-theme");
    } catch {
      // Theme selection still applies to the current page when storage is disabled.
    }
  }, [theme]);

  const toggleLanguage = () => setLanguage((current) => current === "ar" ? "en" : "ar");
  const toggleTheme = () => {
    const currentlyDark = theme === "dark"
      || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setTheme(currentlyDark ? "light" : "dark");
  };

  const pages = {
    home: <HomePage t={t} />,
    features: <FeaturesPage t={t} />,
    tickets: <TicketsPage t={t} />,
    "how-it-works": <HowItWorksPage t={t} />,
    faq: <FaqPage t={t} />,
    support: <SupportPage t={t} />,
    contact: <ContactPage t={t} />,
    about: <AboutPage t={t} />,
    "privacy-policy": <PrivacyPage t={t} />,
    terms: <TermsPage t={t} />,
    download: <DownloadPage t={t} />,
  };

  return (
    <>
      <a className="skip-link" href="#main">{t("Skip to content", "تخطَّ إلى المحتوى")}</a>
      <Header
        page={page}
        language={language}
        setLanguage={toggleLanguage}
        onThemeToggle={toggleTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      <main id="main" tabIndex="-1">{pages[page]}</main>
      <Footer t={t} />
    </>
  );
}
