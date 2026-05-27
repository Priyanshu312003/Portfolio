export function SectionHeader({
  num,
  label,
  title,
  subtitle,
}: {
  num: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative mb-16 animate-fade-up">
      <span className="section-numeral -top-8 -left-2 md:-left-6">{num}</span>
      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-primary" />
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-primary">
            {label}
          </p>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-sm md:text-base text-muted-foreground font-mono max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}