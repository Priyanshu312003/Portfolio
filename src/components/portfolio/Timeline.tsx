import { Briefcase, Shield, GraduationCap, Award, BookOpen, School } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

type TimelineItem = {
  icon: typeof Briefcase;
  role: string;
  org: string;
  when: string;
  body: string;
  bullets?: string[];
};

const experience: TimelineItem[] = [
  {
    icon: Briefcase,
    role: "AASE — Advanced Associate Software Engineer",
    org: "Accenture",
    when: "Joining 2026",
    body: "Incoming engineer. Training tracks: Java, SQL, AWS.",
  },
  {
    icon: Shield,
    role: "Cybersecurity Virtual Intern",
    org: "Palo Alto Networks",
    when: "Sept 2023 – Nov 2023",
    body: "Virtual internship focused on practical cybersecurity fundamentals.",
    bullets: [
      "Performed hands-on labs on how attackers exploit vulnerabilities and how defenses block them",
      "Learned core network security: firewalls, routing, NAT, secure network design",
      "Studied real-world threats: malware, phishing, ransomware and organizational response",
      "Practiced threat detection and incident response through guided labs",
    ],
  },
];

const education: TimelineItem[] = [
  {
    icon: GraduationCap,
    role: "B.Tech, Computer Science & Engineering (AI & ML)",
    org: "G.L. Bajaj Institute of Technology and Management, Greater Noida",
    when: "Nov 2022 – July 2026",
    body: "Specialization in Artificial Intelligence and Machine Learning.",
  },
  {
    icon: Award,
    role: "Google Cloud Certifications",
    org: "Google",
    when: "Multiple",
    body: "Generative AI · LLMs · Responsible AI · Cloud Security · Digital Transformation.",
  },
  {
    icon: BookOpen,
    role: "Intermediate (CBSE)",
    org: "Academic Global School, Gorakhpur",
    when: "2022",
    body: "Senior secondary education.",
  },
  {
    icon: School,
    role: "Matriculation (ICSE)",
    org: "Little Flower School, Gorakhpur",
    when: "2020",
    body: "Secondary education.",
  },
];

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-10 md:pl-14">
      <div
        className="absolute left-4 md:left-6 top-2 bottom-2 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,255,148,0.6), transparent)" }}
      />
      <div className="space-y-5">
        {items.map((it, i) => (
          <div key={it.role + i} className="relative animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div
              className="absolute -left-[26px] md:-left-[34px] top-6 h-5 w-5 border border-primary bg-black flex items-center justify-center"
              style={{ boxShadow: "0 0 16px rgba(0,255,148,0.6)" }}
            >
              <it.icon className="h-2.5 w-2.5 text-primary" />
            </div>
            <div className="term-box scan-border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg">{it.role}</h3>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">{it.when}</span>
              </div>
              <p className="text-sm font-mono text-foreground/70 mb-2">{">"} {it.org}</p>
              <p className="text-sm text-muted-foreground">{it.body}</p>
              {it.bullets && (
                <ul className="mt-4 space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-foreground/80">
                      <span className="text-primary font-mono mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeader num="03" label="career.log" title="Experience." subtitle="$ cat ~/career.json" />
        </ScrollReveal>
        <TimelineList items={experience} />
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            num="04"
            label="training_data"
            title="Education & certs."
            subtitle="$ cat ~/education.json"
          />
        </ScrollReveal>
        <TimelineList items={education} />
      </div>
    </section>
  );
}