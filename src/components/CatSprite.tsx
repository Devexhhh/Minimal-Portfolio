"use client";
import { useEffect, useRef, useState } from "react";

export default function CatSprite() {
  const [x, setX] = useState(-80);
  const [flip, setFlip] = useState(false);
  const [frame, setFrame] = useState(0);
  const dir = useRef(1);
  const pos = useRef(-80);

  useEffect(() => {
    let raf: number;
    let frameCount = 0;

    const tick = () => {
      pos.current += 1.4 * dir.current;
      frameCount++;
      if (frameCount % 8 === 0) setFrame(f => (f + 1) % 4);

      if (pos.current > window.innerWidth + 80) {
        dir.current = -1;
        setFlip(true);
      }
      if (pos.current < -80) {
        dir.current = 1;
        setFlip(false);
      }
      setX(pos.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 4-frame walk cycle leg positions
  const legOffsets = [[0, 0], [2, -1], [0, -2], [-2, -1]];
  const [lf, lb] = legOffsets[frame];

  return (
    <div
      className={`fixed bottom-4 z-50 pointer-events-none ${flip ? "-scale-x-100" : "scale-x-100"}`}
      style={{ left: x }}
    >
      <svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
        {/* shadow */}
        <ellipse cx="20" cy="29" rx="12" ry="2" fill="#000" opacity="0.3" />
        {/* body */}
        <rect x="8" y="10" width="18" height="11" rx="4" fill="#d4d4d4" />
        {/* head */}
        <rect x="20" y="4" width="14" height="12" rx="5" fill="#d4d4d4" />
        {/* ears */}
        <polygon points="21,4 19,0 24,3" fill="#d4d4d4" />
        <polygon points="31,4 34,0 30,3" fill="#d4d4d4" />
        <polygon points="21,4 20,2 23,3" fill="#f0a0b0" />
        <polygon points="31,4 33,1 30,3" fill="#f0a0b0" />
        {/* eyes */}
        <ellipse cx="24" cy="9" rx="1.5" ry="1.5" fill="#111" />
        <ellipse cx="30" cy="9" rx="1.5" ry="1.5" fill="#111" />
        <circle cx="24.5" cy="8.5" r="0.5" fill="white" />
        <circle cx="30.5" cy="8.5" r="0.5" fill="white" />
        {/* nose */}
        <ellipse cx="27" cy="12" rx="1.2" ry="0.8" fill="#f0a0b0" />
        {/* whiskers */}
        <line x1="28" y1="12" x2="35" y2="11" stroke="#888" strokeWidth="0.5" opacity="0.6" />
        <line x1="28" y1="13" x2="35" y2="13" stroke="#888" strokeWidth="0.5" opacity="0.6" />
        <line x1="26" y1="12" x2="19" y2="11" stroke="#888" strokeWidth="0.5" opacity="0.6" />
        {/* tail */}
        <path d="M8 14 C2 12 1 8 4 6 C6 4 8 7 7 10" stroke="#d4d4d4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* legs - animated */}
        <rect x="11" y={20 + lf} width="4" height={6 - lf} rx="2" fill="#c4c4c4" />
        <rect x="17" y={20 + lb} width="4" height={6 - lb} rx="2" fill="#c4c4c4" />
        <rect x="22" y={20 + lb} width="4" height={6 - lb} rx="2" fill="#c4c4c4" />
      </svg>
    </div>
  );
}