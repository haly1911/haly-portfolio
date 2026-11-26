import { FaCoffee } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="portfolio-wrap flex flex-col gap-3 py-7 text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <a href="#intro" className="font-semibold text-foreground">
        <span className="text-muted-foreground font-extralight">© 2026 </span>
        haly<span className="text-primary">.dev</span>
      </a>
      <span className="flex items-center gap-1.5">
        <FaHeart />
        {t.footer.text}
        <FaCoffee />
      </span>
    </footer>
  );
};

export default Footer;
