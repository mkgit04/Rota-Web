import { privacySections, termsSections } from "../data";

function LegalContent({ title, sections, t }) {
  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderSectionText = (text) => {
    const contactPhrase = /(contact|التواصل عبر:)/i;
    const match = contactPhrase.exec(text);
    if (!match || match.index === undefined) return text;

    return (
      <>
        {text.slice(0, match.index)}
        <a href="#contact">{match[0]}</a>
        {text.slice(match.index + match[0].length)}
      </>
    );
  };

  return (
    <section><div className="w narrow">
      <h1>{title}</h1>
      <p className="mut">{t("Last updated", "آخر تحديث")}: {t("1 November 2026", "1 نوفمبر 2026")}</p>
      {/* <div className="note">{t(
        "Awaiting verification: some facts about this release are still being confirmed and are not stated as final.",
        "بانتظار التحقق: ما زال بعض الحقائق عن هذا الإصدار قيد التأكيد ولا تُعرض كنهائية.",
      )}</div> */}
      <nav className="toc" aria-label={t("Contents", "المحتويات")}>
        {sections.map((item, index) => (
          <a href={`#legal-${index}`} onClick={(event) => scrollToSection(event, `legal-${index}`)} key={item[0]}>
            {index + 1}. {t(item[0], item[2])}
          </a>
        ))}
      </nav>
      {sections.map((item, index) => (
        <div className="legal-section" id={`legal-${index}`} key={item[0]}>
          <h2>{index + 1}. {t(item[0], item[2])}</h2>
          <p>
            {renderSectionText(t(item[1], item[3]))}
            {/* {index === 0 || index === sections.length - 1
              ? <span className="mut">{t("Not configured yet", "لم يتم الإعداد بعد")}</span>
              : null} */}
          </p>
        </div>
      ))}
    </div></section>
  );
}

export function PrivacyPage({ t }) {
  return <LegalContent title={t("Privacy policy", "سياسة الخصوصية")} sections={privacySections} t={t} />;
}

export function TermsPage({ t }) {
  return <LegalContent title={t("Terms of service", "شروط الخدمة")} sections={termsSections} t={t} />;
}
