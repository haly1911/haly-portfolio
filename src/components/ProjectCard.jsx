import { FaArrowUpRightFromSquare, FaCheck, FaGithub } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { projectMeta } from "../data/portfolioMeta";

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const meta = projectMeta[project.id] || {};
  const detailSections = [
    {
      key: "features",
      label: t.projectsSection.labels.architecture,
      items: project.features,
    },
    {
      key: "implementation",
      label: t.projectsSection.labels.implementation,
      items: project.implementation,
    },
    {
      key: "learned",
      label: t.projectsSection.labels.learned,
      items: project.learned,
    },
  ];

  return (
    <article className="group flex flex-col border border-border bg-card transition-colors duration-300 hover:border-primary/50">
      <div
        className={`relative flex min-h-47 items-end justify-between overflow-hidden border-b border-border p-6 ${meta.color}`}
      >
        <span className="absolute -right-2 -top-8 font-display font-semibold text-[210px] leading-none text-primary/10">
          {meta.index}
        </span>
        <span className="portfolio-eyebrow relative z-10">{t.projectsSection.projectLabel}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display font-semibold text-2xl">{project.title}</h3>
        <p className="mt-2 text-[11px] text-muted-foreground">{meta.course}</p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.stack?.map((item) => (
            <span key={item} className="border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
              {item}
            </span>
          ))}
        </div>
        {detailSections.map((section) => (
          <div className="mt-6 border-t border-border pt-4" key={section.key}>
            <p className="mb-3 text-[10px] font-bold tracking-[0.12em] text-primary">{section.label}</p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {section.items?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
                  <FaCheck size={13} className="mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
            <a
              className="portfolio-link inline-flex items-center gap-1.5 text-xs"
              href={meta.repository}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={14} />
              {t.projectsSection.labels.repo}
              <FaArrowUpRightFromSquare size={12} />
            </a>
            {meta.demo && (
              <a
                className="portfolio-link inline-flex items-center gap-1.5 text-xs"
                href={meta.demo}
                target="_blank"
                rel="noreferrer"
              >
                {t.projectsSection.labels.live}
                <FaArrowUpRightFromSquare size={12} />
              </a>
            )}
            <span className="text-xs text-muted-foreground">{project.note}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
