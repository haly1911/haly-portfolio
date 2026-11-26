import { useLanguage } from "../context/LanguageContext";
import { skillGroups } from "../data/portfolioMeta";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="portfolio-section bg-surface-raised/55">
      <div className="portfolio-wrap">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="portfolio-eyebrow">{t.skills.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl">{t.skills.title}</h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-muted-foreground text-justify">{t.skills.sub}</p>
        </div>
        <div className="grid gap-0 border border-border divide-x divide-y sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((skills, groupIndex) => (
            <div className="p-5" key={groupIndex}>
              <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold">
                <span className="text-primary">0{groupIndex + 1}</span>
                {t.skills.groups[groupIndex]}
              </h3>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="size-1 rounded-full bg-primary/80" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
