// SplitImage.tsx
import { useEffect, useRef, useState } from "react";
import "./SplitImage.css";

export default function SplitImage({ disabled = false }: { disabled?: boolean }) {
  const [animate, setAnimate] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const setSplit = (pct: number) => {
    const home = rootRef.current?.closest(".home") as HTMLElement | null;
    if (!home) return;
    const p = Math.max(0, Math.min(100, pct));
    home.style.setProperty("--split-p", `${p}%`);
  };

  const setHasMoved = () => {
    const home = rootRef.current?.closest(".home");
    home?.classList.add("has-moved");
  };

  useEffect(() => {
    setSplit(50);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, []);

  const moveFrom = (clientX: number, target: HTMLDivElement) => {
    if (disabled) return; // ⛔ bloqueado
    const r = target.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setSplit(pct);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    moveFrom(e.clientX, e.currentTarget);
    if (!disabled) setHasMoved();
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    moveFrom(t.clientX, e.currentTarget);
    if (!disabled) setHasMoved();
  };

  return (
    <div
      ref={rootRef}
      className="split-container"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      role="img"
      aria-label="Retrato mitad color, mitad blanco y negro con deslizador"
    >
      <img
        src="/assets/lawyer.webp"
        alt=""
        className={`half left ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 var(--split-r) 0 0)` }}
      />
      <img
        src="/assets/lawyer_brown.webp"
        alt=""
        className={`half right ${animate ? "animate" : ""}`}
        style={{ clipPath: `inset(0 0 0 var(--split-p))` }}
      />
    </div>
  );
}
