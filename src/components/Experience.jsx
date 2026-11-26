import { useLanguage } from "../context/LanguageContext";
import TimelineEntry from "./TimelineEntry";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa6";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="portfolio-section bg-surface-raised/55">
      <div className="portfolio-wrap">
        <div className="mb-10">
          <p className="portfolio-eyebrow">{t.experience.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl">{t.experience.title}</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold">
              <FaBriefcase size={16} className="text-primary" />
              {t.about.highlights.expType}
            </h3>
            <div className="space-y-7 border-l border-border pl-6">
              {t.experience.work.timeline.map((item) => (
                <TimelineEntry key={item.date} {...item} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold">
              <FaGraduationCap size={17} className="text-primary" />
              {t.experience.education.label}
            </h3>
            <div className="space-y-7 border-l border-border pl-6">
              {t.experience.education.timeline.map((item) => (
                <TimelineEntry key={item.date} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
