import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isFinePointer = useMediaQuery("(pointer: fine) and (min-width: 1024px)");

  useEffect(() => {
    if (!isFinePointer) return;

    const ring = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };
    let frame: number;

    function handleMove(event: MouseEvent) {
      target = { x: event.clientX, y: event.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.x}px, ${target.y}px)`;
      }
    }

    function animateRing() {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      frame = requestAnimationFrame(animateRing);
    }

    window.addEventListener("mousemove", handleMove);
    frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-500 dark:bg-brass-400"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brass-500/40 dark:border-brass-400/40"
      />
    </>
  );
}
