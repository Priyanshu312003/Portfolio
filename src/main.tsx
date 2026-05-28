import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HoloCursor } from "@/components/portfolio/HoloCursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience, Education } from "@/components/portfolio/Timeline";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";

function App() {
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

const root = document.getElementById("root")!;
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
