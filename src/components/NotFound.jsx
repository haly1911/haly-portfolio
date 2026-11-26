import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowLeft, FaCode } from "react-icons/fa6";

const NotFound = () => {
  const { lang } = useLanguage();
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="portfolio-wrap flex h-16 items-center justify-between border-b border-border/70">
        <Link
          to="/"
          aria-label="Về trang chủ / Go to homepage"
          className="flex items-center gap-2.5 font-semibold text-foreground"
        >
          <span className="grid size-9 place-items-center rounded-full border border-primary/35 text-primary">
            <FaCode size={17} />
          </span>
          <span className="text-sm">
            haly<span className="text-primary">.dev</span>
          </span>
        </Link>
        <span className="portfolio-eyebrow hidden sm:inline">404 · Page not found</span>
      </header>

      <section className="portfolio-wrap grid flex-1 place-items-center py-8">
        <div className="w-full max-w-2xl text-center">
          <p aria-hidden="true" className="font-display text-8xl leading-[0.82] text-primary sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">
            {lang === "vi" ? "Trang này không tìm thấy" : "Page not found"}
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
            {lang === "vi"
              ? "Có thể liên kết đã cũ hoặc địa chỉ chưa chính xác"
              : "The link may be outdated or the address mistyped"}
          </p>
          <Link
            to="/"
            className="w-fit mx-auto flex items-center gap-2 mt-6 h-11 rounded-full border border-border bg-primary px-5 text-sm font-semibold text-background shadow-lg shadow-accent"
          >
            <FaArrowLeft size={16} />
            {lang === "vi" ? "Về trang chủ" : "Back to portfolio"}
          </Link>
        </div>
      </section>
      <footer className="portfolio-wrap flex min-h-12 items-center justify-between gap-4 border-t border-border/70 text-[11px] text-muted-foreground">
        <span>© 2026 haly.dev</span>
        <span className="text-right">A little detour, not the end</span>
      </footer>
    </main>
  );
};

export default NotFound;
