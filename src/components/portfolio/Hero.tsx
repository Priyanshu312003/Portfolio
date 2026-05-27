import { useEffect, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

const ROLES = ["Full-Stack Developer", "Backend Engineer", "Building in Public"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[i];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="cursor-blink text-primary">{text}</span>
  );
}

function HeroGraphic() {
  return (
    <div className="relative h-[420px] w-full flex items-center justify-center" aria-hidden>
      {/* concentric rings */}
      <div className="absolute inset-0 grid place-items-center">
        {[140, 200, 280, 360].map((s) => (
          <div
            key={s}
            className="absolute rounded-full border border-primary/15"
            style={{ width: s, height: s }}
          />
        ))}
        {/* radar sweep */}
        <div
          className="absolute h-[360px] w-[360px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, rgba(0,255,148,0.18) 30deg, transparent 60deg)",
            animation: "radar-sweep 4s linear infinite",
            maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
          }}
        />
      </div>

      {/* wireframe cube */}
      <div className="relative" style={{ width: 180, height: 180, perspective: 800 }}>
        <div className="cube" style={{ width: 180, height: 180 }}>
          <div style={{ transform: "translateZ(90px)" }} />
          <div style={{ transform: "rotateY(180deg) translateZ(90px)" }} />
          <div style={{ transform: "rotateY(90deg) translateZ(90px)" }} />
          <div style={{ transform: "rotateY(-90deg) translateZ(90px)" }} />
          <div style={{ transform: "rotateX(90deg) translateZ(90px)" }} />
          <div style={{ transform: "rotateX(-90deg) translateZ(90px)" }} />
        </div>
      </div>

      {/* orbiting dots */}
      {[
        { r: 160, d: 8, c: "var(--acid-green)" },
        { r: 220, d: 14, c: "var(--electric-violet)" },
        { r: 290, d: 22, c: "var(--cyber-cyan)" },
      ].map((o, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            width: 8,
            height: 8,
            borderRadius: 9999,
            background: o.c,
            boxShadow: `0 0 12px ${o.c}`,
            // @ts-expect-error css var
            "--r": `${o.r}px`,
            animation: `orbit ${o.d}s linear infinite`,
          }}
        />
      ))}

      {/* corner brackets */}
      <span className="absolute top-0 left-0 h-4 w-4 border-l border-t border-primary/60" />
      <span className="absolute top-0 right-0 h-4 w-4 border-r border-t border-primary/60" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-l border-b border-primary/60" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-r border-b border-primary/60" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 px-6 md:px-12"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      {/* PM watermark */}
      <div
        className="absolute right-[-2vw] bottom-[5vh] font-mono font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(20rem, 38vw, 50rem)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          letterSpacing: "-0.08em",
        }}
        aria-hidden
      >
        PM
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 border border-primary/40 px-3 py-1.5 mb-10 animate-fade-up bg-black/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-primary pulse-dot" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
              Available for opportunities
            </span>
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.05s" }}>
            // user.profile :: index_001
          </div>

          <h1
            className="font-bold tracking-tight leading-[0.88] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-6xl md:text-8xl lg:text-9xl">PRIYANSHU</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl holo-text mt-1">MAURYA</span>
          </h1>

          <div
            className="mt-8 font-mono text-base md:text-xl text-foreground/90 animate-fade-up h-7"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-muted-foreground">{">"} </span>
            <Typer />
          </div>

          <p
            className="mt-6 text-base md:text-lg text-foreground/70 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            I build intelligent backends, ship fast, and document everything.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-all"
              style={{ boxShadow: "var(--shadow-glow-green)" }}
            >
              <span>[ view_projects ]</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-primary hover:text-primary font-mono text-xs uppercase tracking-[0.2em] transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>contact.init()</span>
            </a>
          </div>

          <div
            className="mt-14 grid grid-cols-3 gap-6 max-w-md font-mono text-xs animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { k: "LOC", v: "100K+" },
              { k: "PROJ", v: "12+" },
              { k: "UPTIME", v: "99.9%" },
            ].map((s) => (
              <div key={s.k} className="border-l border-primary/30 pl-3">
                <div className="text-muted-foreground text-[10px] uppercase tracking-widest">{s.k}</div>
                <div className="text-foreground text-lg mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <HeroGraphic />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3">
        <span className="h-px w-8 bg-muted-foreground/50" />
        scroll to continue
      </div>
      <div className="absolute bottom-6 right-6 md:right-12 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        sys.status :: <span className="text-primary">ONLINE</span>
      </div>
    </section>
  );
}