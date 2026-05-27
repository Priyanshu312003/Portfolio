import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "projects", num: "01" },
  { href: "#skills", label: "skills", num: "02" },
  { href: "#experience", label: "experience", num: "03" },
  { href: "#education", label: "education", num: "04" },
  { href: "#blog", label: "logs", num: "05" },
  { href: "#contact", label: "contact", num: "06" },
];

export function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-sm">
      <nav className="flex items-center justify-between px-6 md:px-12 h-14">
        <a href="#hero" className="font-mono text-sm flex items-center gap-2">
          <span className="text-primary">▮</span>
          <span className="text-foreground font-bold tracking-wider">PM</span>
          <span className="text-muted-foreground text-xs">/ priyanshu.maurya</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-[9px] text-primary/60 group-hover:text-primary">{l.num}.</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>IST {time}</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
            LIVE
          </span>
        </div>
        <a
          href="#contact"
          className="md:hidden font-mono text-[11px] uppercase border border-primary text-primary px-3 py-1.5"
        >
          [ talk ]
        </a>
      </nav>
    </header>
  );
}