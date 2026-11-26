const TimelineEntry = ({ date, title, company, desc }) => {
  return (
    <div className="relative">
      <span className="absolute -left-6.75 top-1 size-1.5 rounded-full bg-primary ring-4 ring-primary/10" />
      <p className="portfolio-eyebrow">{date}</p>
      <h4 className="mt-2 text-sm font-semibold">
        {title}
        {company && <span> · {company}</span>}
      </h4>
      {desc && <p className="mt-1 text-xs leading-6 text-muted-foreground">{desc}</p>}
    </div>
  );
};

export default TimelineEntry;
