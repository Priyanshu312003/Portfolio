import { useEffect, useRef } from "react";

export function HoloCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
      const now = performance.now();
      if (now - last > 40) {
        last = now;
        const t = document.createElement("div");
        t.className = "holo-cursor-trail";
        t.style.left = `${e.clientX}px`;
        t.style.top = `${e.clientY}px`;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 600);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="holo-cursor hidden md:block" aria-hidden />;
}