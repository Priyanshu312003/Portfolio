import { Github, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    name: "MindVault",
    tagline: "AI second brain",
    description:
      "Modular backend with JWT auth, content CRUD, tag system, public sharing, and Stripe-based Pro plan. AI semantic search in progress.",
    stack: ["NODE.JS", "EXPRESS", "TYPESCRIPT", "MONGODB", "STRIPE"],
    learned: "Designing for billing edge cases is harder than the feature itself.",
    github: "https://github.com/Priyanshu312003/mind-vault",
    demo: "#",
  },
  {
    name: "Portfolio v1",
    tagline: "Personal site",
    description:
      "Personal portfolio with terminal/holographic aesthetic, animated radar chart, horizontal scroll archive, and working contact form.",
    stack: ["REACT", "TYPESCRIPT", "VITE", "TAILWIND"],
    learned: "A design system pays for itself by the second component.",
    github: "https://github.com/Priyanshu312003/Portfolio",
    demo: "https://priyanshu-portfolio-v1.vercel.app",
  },
  {
    name: "Text Summarizer",
    tagline: "NLP pipeline",
    description:
      "Web app that returns both extractive and abstractive summaries of input text using a hybrid pipeline.",
    stack: ["PYTHON", "SPACY", "HUGGINGFACE", "BART", "HTML/CSS"],
    learned: "Hybrid models beat single-strategy summarizers on noisy input.",
    github: "https://github.com/Priyanshu312003/Hybrid-Text-Summarization-Tool",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            num="01"
            label="archive // selected_work"
            title="Things I have shipped."
            subtitle="$ ls ./projects --recent --sorted"
          />
        </ScrollReveal>
      </div>

      {/* Horizontal scroll rail */}
      <div className="mt-8 overflow-x-auto scrollbar-none">
        <div className="flex gap-6 px-6 md:px-12 pb-6 snap-x snap-mandatory">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group term-box scan-border snap-start relative flex-shrink-0 w-[320px] md:w-[380px] min-h-[520px] p-7 flex flex-col animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* upper-half grid + scanline pattern */}
              <div
                className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden"
                aria-hidden
              >
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,255,148,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,148,0.35) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-x-0 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,255,148,0.7), transparent)",
                    boxShadow: "0 0 12px rgba(0,255,148,0.6)",
                    animation: `card-scan 3.6s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              </div>

              {/* huge background number */}
              <span
                className="absolute -top-6 -right-2 font-mono font-black leading-none select-none pointer-events-none"
                style={{
                  fontSize: "10rem",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.06)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  /proj_{String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="h-8 w-8 border border-white/15 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="h-8 w-8 border border-white/15 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                  {p.tagline}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:holo-text transition-all">
                  {p.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono tracking-wider px-2 py-1 border border-primary/30 text-primary/90 bg-primary/5"
                    >
                      [{t}]
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                    {">"} learned
                  </p>
                  <p className="text-xs text-foreground/80 italic">{p.learned}</p>
                </div>
              </div>
            </article>
          ))}

          {/* end marker */}
          <div className="flex-shrink-0 w-[280px] flex items-center justify-center font-mono text-xs text-muted-foreground">
            <span className="cursor-blink">end_of_archive</span>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-3">
        <span>→</span> scroll horizontally to browse archive
      </div>
    </section>
  );
}