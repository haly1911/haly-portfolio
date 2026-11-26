import { FaArrowDown, FaArrowUp, FaGithub, FaInfinity, FaTerminal } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { lang, t } = useLanguage();
  return (
    <section
      id="intro"
      className="portfolio-wrap grid min-h-162 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20"
    >
      <div className="relative z-10 max-w-152">
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="portfolio-eyebrow">{t.hero.role}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3 py-1.5 text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {t.hero.availability}
          </span>
        </div>
        <p className="mb-2 text-base text-muted-foreground">{t.hero.hello}</p>
        <h1 className="font-display text-5xl leading-[0.98] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
          {t.hero.name}
          <span className="pl-3 text-primary">✳</span>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg text-justify">
          {t.hero.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-primary px-5 text-sm font-semibold text-background shadow-lg shadow-accent"
          >
            {t.hero.ctaProjects}
            <FaArrowDown size={15} />
          </a>
          <a
            href="mailto:haly991119@gmail.com?subject=CV%20request"
            className="inline-flex items-center gap-2 h-11 rounded-full px-5 text-sm border border-border shadow-lg"
          >
            {t.hero.cv}
            <FaArrowUp size={15} />
          </a>
          <a
            className="portfolio-link ml-1 inline-flex p-3 items-center justify-center rounded-full border border-border shadow-lg"
            href="https://github.com/haly1911"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-6">
          <div>
            <span className="block font-display text-2xl text-foreground">04</span>
            <span className="text-xs text-muted-foreground">{t.about.highlights.projects}</span>
          </div>
          <div>
            <span className="block font-display text-2xl text-foreground">NestJS</span>
            <span className="text-xs text-muted-foreground">{t.hero.roleTag}</span>
          </div>
          <div>
            <span className="block font-display text-2xl text-foreground">
              <FaInfinity />
            </span>
            <span className="text-xs text-muted-foreground">{t.about.highlights.learning}</span>
          </div>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-117 lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[46%_46%_8px_8px] border border-border/70 bg-surface-raised">
          <img
            src="/portrait.jpg"
            alt="portrait-photo"
            width={1152}
            height={1152}
            className="aspect-[0.83] w-full object-cover object-[66%_center]"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 border border-border/70 bg-background/90 px-4 py-3 backdrop-blur-md">
            <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary">
              <FaTerminal size={17} />
            </span>
            <div>
              <span className="block text-xs font-semibold">{t.hero.roleTag}</span>
              <span className="mt-0.5 block text-[10px] text-muted-foreground">
                {lang === "vi" ? "Từng dòng code, từng ý tưởng thành hình." : "One line of code at a time."}
              </span>
            </div>
          </div>
        </div>
        <span className="absolute right-3 top-10 translate-x-1/2 font-display text-4xl text-primary">✳</span>
        <span className="absolute left-0 bottom-28 -translate-x-1/2 font-display text-3xl text-primary/70">✳</span>
      </div>
    </section>
  );
};

export default Hero;
