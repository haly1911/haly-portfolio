import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { projectMeta } from "../data/portfolioMeta";

const OtherProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const meta = projectMeta[project.id] || {};

  return (
    <article className="group flex flex-col border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50">
      <span className="portfolio-eyebrow">{t.projectsSection.labels[meta.type]}</span>
      <h4 className="mt-4 font-display text-xl font-semibold">{project.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {meta.stack?.map((item) => (
          <span key={item} className="border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
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
      </div>
    </article>
  );
};

export default OtherProjectCard;
