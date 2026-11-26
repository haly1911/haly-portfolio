import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import OtherProjectCard from "./OtherProjectCard";

const Projects = () => {
  const { t } = useLanguage();
  const { other } = t.projectsSection;

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-wrap">
        <div className="mb-10">
          <p className="portfolio-eyebrow">{t.projectsSection.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl">{t.projectsSection.title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{t.projectsSection.sub}</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {t.projectsSection.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mb-8 mt-20">
          <h3 className="font-display text-3xl">{other.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{other.sub}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {other.items.map((project) => (
            <OtherProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
