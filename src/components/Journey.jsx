import { useLanguage } from "../context/LanguageContext";

const Journey = () => {
  const { t } = useLanguage();

  return (
    <section id="journey" className="portfolio-section">
      <div className="portfolio-wrap grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="portfolio-eyebrow">{t.journey.eyebrow}</p>
          <h2 className="mt-5 max-w-md font-display font-semibold text-4xl leading-tight">{t.journey.title}</h2>
          <span aria-hidden="true" className="mt-8 block font-display text-5xl text-primary">
            “
          </span>
        </div>
        <div className="max-w-2xl space-y-5 text-sm leading-8 text-muted-foreground text-justify">
          <p>{t.journey.paragraphs[0]}</p>
          <p>{t.journey.paragraphs[1]}</p>
          <blockquote className="mt-7 border-t border-border pt-6 font-display font-semibold text-2xl italic leading-9 text-foreground">
            “{t.journey.quote}”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Journey;
