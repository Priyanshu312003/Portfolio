import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "X / Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Gmail", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full bg-black/40 border border-white/15 rounded-none px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition placeholder:text-muted-foreground/50";

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            num="06"
            label="terminal :: connect"
            title="Open channel."
            subtitle="$ ssh priyanshu@maurya.dev"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="term-box p-8 md:col-span-3 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                /msg.compose
              </span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2 block">
                {">"} name
              </label>
              <input required type="text" className={inputCls} placeholder="Your name" />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2 block">
                {">"} email
              </label>
              <input required type="email" className={inputCls} placeholder="you@domain.com" />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground mb-2 block">
                {">"} message
              </label>
              <textarea required rows={5} className={`${inputCls} resize-none`} placeholder="What's on your mind?" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.25em] hover:bg-primary/90 disabled:opacity-70 transition-all"
              style={{ boxShadow: "var(--shadow-glow-green)" }}
            >
              {sent ? (
                <>[ transmission_complete ] ✓</>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  [ transmit_message ]
                </>
              )}
            </button>
          </form>

          <div className="md:col-span-2 space-y-4">
            <div className="term-box p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-4">
                // sockets.open
              </p>
              <div className="space-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group flex items-center justify-between border border-white/10 hover:border-primary/60 hover:bg-primary/5 px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <s.icon className="h-3.5 w-3.5 text-primary" />
                      {s.label}
                    </span>
                    <span className="text-muted-foreground group-hover:text-primary">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="term-box p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-2">
                // location
              </p>
              <p className="font-mono text-sm">India · UTC+5:30</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">Remote-first</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>© {new Date().getFullYear()} priyanshu.maurya // all systems nominal</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
            built with react · typescript · tailwind
          </span>
        </footer>
      </div>
    </section>
  );
}