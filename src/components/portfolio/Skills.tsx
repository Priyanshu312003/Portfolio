import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "./ScrollReveal";

type Skill = { name: string; level: number; color: string };

const skills: Skill[] = [
  { name: "TypeScript", level: 90, color: "var(--acid-green)" },
  { name: "Node.js", level: 92, color: "var(--acid-green)" },
  { name: "React", level: 88, color: "var(--cyber-cyan)" },
  { name: "Python", level: 82, color: "var(--electric-violet)" },
  { name: "MongoDB", level: 80, color: "var(--acid-green)" },
  { name: "Express", level: 90, color: "var(--cyber-cyan)" },
  { name: "AWS", level: 65, color: "var(--electric-violet)" },
  { name: "Stripe", level: 75, color: "var(--cyber-cyan)" },
  { name: "JWT/Auth", level: 85, color: "var(--acid-green)" },
  { name: "Tailwind", level: 92, color: "var(--cyber-cyan)" },
  { name: "Java", level: 70, color: "var(--electric-violet)" },
  { name: "C++", level: 72, color: "var(--electric-violet)" },
];

function Radar({ skills, active }: { skills: Skill[]; active: number | null }) {
  const size = 370;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 140;
  const n = skills.length;

  const points = skills.map((s, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = (s.level / 100) * maxR;
    return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
  });
  const labels = skills.map((_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * (maxR + 20), y: cy + Math.sin(angle) * (maxR + 20) };
  });

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto max-w-md">
      {/* grid rings */}
      {[0.25, 0.5, 0.75, 1].map((p) => (
        <circle key={p} cx={cx} cy={cy} r={maxR * p} fill="none" stroke="rgba(0,255,148,0.1)" strokeDasharray="2 4" />
      ))}
      {/* axes */}
      {skills.map((_, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + Math.cos(a) * maxR}
            y2={cy + Math.sin(a) * maxR}
            stroke="rgba(255,255,255,0.05)"
          />
        );
      })}
      {/* polygon */}
      <polygon
        points={points.map((p) => `${p.x},${p.y}`).join(" ")}
        fill="rgba(0,255,148,0.12)"
        stroke="var(--acid-green)"
        strokeWidth="1.5"
        style={{ filter: "drop-shadow(0 0 8px rgba(0,255,148,0.5))" }}
      />
      {/* nodes + labels */}
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r={active === i ? 6 : 3}
            fill={skills[i].color}
            style={{ filter: `drop-shadow(0 0 ${active === i ? 10 : 4}px ${skills[i].color})`, transition: "all 0.3s" }}
          />
          <text
            x={labels[i].x}
            y={labels[i].y}
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
            fill={active === i ? skills[i].color : "rgba(255,255,255,0.6)"}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ textTransform: "uppercase", letterSpacing: "0.1em", transition: "fill 0.3s" }}
          >
            {skills[i].name}
          </text>
        </g>
      ))}
      {/* center dot */}
      <circle cx={cx} cy={cy} r="2" fill="white" />
    </svg>
  );
}

export function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            num="02"
            label="capability_matrix"
            title="Tech tree."
            subtitle="$ system.capabilities --verbose"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center mt-12">
          <div className="relative flex justify-center">
            <Radar skills={skills} active={active} />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-6">
              // hover any node
            </p>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((s, i) => (
                <button
                  key={s.name}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="group text-left p-3 border border-white/10 hover:border-primary transition-all relative"
                  style={
                    active === i
                      ? { borderColor: s.color, boxShadow: `inset 0 0 16px ${s.color}22` }
                      : undefined
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-wider">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-px w-full bg-white/5 relative overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 transition-all duration-500"
                      style={{
                        width: `${s.level}%`,
                        background: s.color,
                        boxShadow: `0 0 8px ${s.color}`,
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}