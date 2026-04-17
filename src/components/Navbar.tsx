"use client";
import { useState } from "react";

export type Tab = "about" | "projects" | "experience" | "hacks";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "about", label: "About", emoji: "🏠" },
  { id: "projects", label: "Projects", emoji: "🗂️" },
  { id: "experience", label: "Experience", emoji: "💬" },
  { id: "hacks", label: "Hacks", emoji: "⭐" },
];

interface Props {
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
}

export default function Navbar({ activeTab, onTabChange }: Props) {
  const [dark, setDark] = useState(true);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[999] bg-[rgba(20,20,20,0.92)] backdrop-blur-[14px] border border-[#2a2a2a] rounded-full py-[5px] px-[6px] flex items-center gap-[2px] shadow-[0_12px_40px_rgba(0,0,0,0.7),inset_0_0_0_0.5px_rgba(255,255,255,0.04)]">
      {tabs.map(tab => {
        const active = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              rounded-full px-4 py-[7px] cursor-pointer text-[13px] font-[inherit] flex items-center gap-[6px] transition-all duration-150 ease-in-out whitespace-nowrap
              ${active
                ? "bg-[#252525] text-[#e2e2e2] shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
                : "bg-transparent text-[#606060] shadow-none"
              }
            `}
          >
            <span className="text-[13px] leading-none">{tab.emoji}</span>
            {tab.label}
          </button>
        );
      })}
      <button
        onClick={() => setDark(d => !d)}
        className="bg-transparent rounded-full w-[34px] h-[34px] cursor-pointer text-[#555] text-[15px] flex items-center justify-center ml-[2px] transition-colors duration-150 hover:text-[#aaa]"
      >
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}