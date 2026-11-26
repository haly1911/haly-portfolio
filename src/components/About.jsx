import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-wrap grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="portfolio-eyebrow">{t.about.eyebrow}</p>
          <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight">{t.about.title}</h2>
          <div className="mt-8 h-px w-20 bg-primary" />
        </div>
        <div className="max-w-2xl">
          <p className="whitespace-pre-line text-[15px] leading-8 text-muted-foreground text-justify">{t.about.paragraphs}</p>
          <blockquote className="mt-8 border-l-2 border-primary pl-5 font-display text-xl italic leading-8 text-foreground">
            “{t.about.note}”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
