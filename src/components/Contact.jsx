import { FaArrowRight, FaArrowUpRightFromSquare, FaDownload, FaGithub, FaLinkedin, FaMailchimp } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="portfolio-section bg-surface-raised/55">
      <div className="portfolio-wrap grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="portfolio-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="mt-5 max-w-2xl font-display text-5xl leading-tight sm:text-6xl">{t.contact.title}</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{t.contact.text}</p>
          <a
            href="mailto:haly991119@gmail.com"
            className="inline-flex items-center gap-2 mt-7 h-11 rounded-full px-5 text-sm text-background bg-primary border border-border shadow-lg shadow-accent"
          >
            {t.contact.emailCta}
            <FaArrowRight size={15} />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">haly991119@gmail.com · {t.contact.resume}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            className="portfolio-link inline-flex items-center gap-2 border border-border px-4 py-3 text-xs"
            href="https://github.com/haly1911"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={15} />
            GitHub
            <FaArrowUpRightFromSquare size={13} />
          </a>
          <a
            className="portfolio-link inline-flex items-center gap-2 border border-border px-4 py-3 text-xs"
            href="https://www.linkedin.com/in/haly1911/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={15} />
            LinkedIn
            <FaArrowUpRightFromSquare size={13} />
          </a>
          <a
            className="portfolio-link inline-flex items-center gap-2 border border-border px-4 py-3 text-xs"
            href="mailto:haly991119@gmail.com?subject=CV%20request"
          >
            <FaDownload size={15} />
            {t.contact.reqCv}
            <FaArrowUpRightFromSquare size={13} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
