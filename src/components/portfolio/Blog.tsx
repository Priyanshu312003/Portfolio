import { ArrowUpRight, Twitter } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

const posts = [
  { title: "MindVault Project Log", excerpt: "Architecture notes, decisions, and trade-offs while shipping a modular AI-powered second brain.", tag: "Build Log", date: "Coming soon" },
  { title: "Building an AI-Powered Backend from Scratch", excerpt: "From JWT auth and CRUD to semantic search — patterns I keep reaching for.", tag: "Backend", date: "Coming soon" },
  { title: "Daily Dev Log", excerpt: "Bite-sized notes on what I'm learning, breaking, and rebuilding each day.", tag: "Journal", date: "Ongoing" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            num="05"
            label="dev.log // ongoing"
            title="Writing & logs."
            subtitle="$ tail -f ~/notes.md"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className="group term-box scan-border p-6 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary border border-primary/40 px-2 py-1">
                  [{p.tag}]
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{p.excerpt}</p>
              <p className="mt-5 pt-4 border-t border-white/10 text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
                {p.date}
              </p>
            </a>
          ))}
        </div>

        <div>
          <a
            href="https://x.com/afkpriyanshu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 border border-primary/50 hover:border-primary hover:bg-primary/5 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-all"
          >
            <Twitter className="h-4 w-4" />
            [ follow.on('x') ]
          </a>
        </div>
      </div>
    </section>
  );
}