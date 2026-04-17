"use client";
import { useMemo, useState, useRef, useEffect } from "react";

const BG_PALETTE = ["bg-[#141414]", "bg-neutral-800", "bg-neutral-600", "bg-neutral-400", "bg-white"];
const BORDER_PALETTE = ["border-[#1e1e1e]", "border-neutral-800", "border-neutral-600", "border-neutral-400", "border-white"];

function getLevel(n: number) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (n <= 5) return 2;
  if (n <= 9) return 3;
  return 4;
}

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ContributionGrid({ total }: { total: number }) {
  const [mounted, setMounted] = useState(false);
  const [tooltip, setTooltip] = useState<null | { date: string; count: number; x: number; y: number }>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Tell React we are mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const { weeks, monthLabels } = useMemo(() => {
    const now = new Date();
    const WEEKS = 53;
    const weeks: { date: string; count: number }[][] = [];
    const monthLabels: { label: string; col: number }[] = [];
    let lastMonth = -1;

    for (let w = 0; w < WEEKS; w++) {
      const week: { date: string; count: number }[] = [];
      for (let d = 0; d < 7; d++) {
        const offset = (WEEKS - w) * 7 - d;
        const dt = new Date(now);
        dt.setDate(dt.getDate() - offset);
        const count = Math.random() < 0.28 ? 0 : Math.floor(Math.pow(Math.random(), 1.5) * 14);
        if (d === 0 && dt.getMonth() !== lastMonth) {
          lastMonth = dt.getMonth();
          monthLabels.push({ label: MONTH_NAMES[dt.getMonth()], col: w });
        }
        week.push({ date: dt.toISOString().split("T")[0], count });
      }
      weeks.push(week);
    }
    return { weeks, monthLabels };
  }, []);

  // Prevent server-rendering the random grid to avoid hydration mismatch
  if (!mounted) {
    return <div className="h-[140px] w-full" />; // Empty placeholder matching grid height
  }

  return (
    <div ref={containerRef} className="overflow-x-auto pb-1">
      {/* Month labels */}
      <div className="flex mb-[5px] pl-0 relative h-4">
        {monthLabels.map((m, i) => (
          <span
            key={i}
            style={{ left: `${m.col * 13}px` }}
            className="absolute text-[10px] text-[#555] whitespace-nowrap leading-none"
          >
            {m.label}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="flex gap-[3px] w-fit">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((cell, di) => {
              const level = getLevel(cell.count);
              return (
                <div
                  key={di}
                  className={`contrib-cell border cursor-default ${BG_PALETTE[level]} ${BORDER_PALETTE[level]}`}
                  onMouseEnter={e => {
                    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    setTooltip({ date: cell.date, count: cell.count, x: r.left, y: r.top });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend + total */}
      <div className="flex justify-between items-center mt-2">
        <span className="text-[11px] text-[#4a4a4a]">Total {total.toLocaleString()} contributions</span>
        <div className="flex items-center gap-1 text-[10px] text-[#444]">
          Less
          {BG_PALETTE.map((bgClass, i) => (
            <div
              key={i}
              className={`contrib-cell border ${bgClass} ${BORDER_PALETTE[i]}`}
            />
          ))}
          More
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{ top: tooltip.y - 44, left: tooltip.x - 10 }}
          className="fixed bg-[#1a1a1a] border border-[#303030] rounded-md py-[5px] px-[10px] text-[11px] text-[#ccc] pointer-events-none z-[300] whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
        >
          <div className="font-bold text-[#e2e2e2]">{tooltip.date}</div>
          <div className="text-[#666]">{tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}</div>
        </div>
      )}
    </div>
  );
}