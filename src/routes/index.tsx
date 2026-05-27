import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience, Education } from "@/components/portfolio/Timeline";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { HoloCursor } from "@/components/portfolio/HoloCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanshu Maurya — Full-Stack Developer & AI/ML Engineer" },
      { name: "description", content: "Portfolio of Priyanshu Maurya: full-stack developer and AI/ML engineer building intelligent backends in public." },
      { property: "og:title", content: "Priyanshu Maurya — Full-Stack Developer & AI/ML Engineer" },
      { property: "og:description", content: "I build intelligent backends, ship fast, and document everything." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <HoloCursor />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Blog />
      <Contact />
    </main>
  );
}
