"use client";
import Tag from "./Tag";
import StatusBar from "./StatusBar";

const experiences = [
  {
    company: "WorldQuant BRAIN",
    logo: "𝕎",
    role: "Alpha Researcher (IQC 2026 Prep)",
    type: "Self-Directed",
    period: "2026 – Present",
    location: "Remote",
    responsibilities: [
      "Studying alpha archetypes, key metrics including Sharpe ratio, fitness, and turnover for quantitative strategy development.",
      "Exploring factor investing, order books, and EMH fundamentals from a beginner finance baseline.",
      "Building and back-testing simulated alpha strategies for BRAIN platform submission.",
    ],
    tech: ["Python", "Alpha Research", "Quantitative Finance", "Statistics"],
  },
  {
    company: "Academic Research",
    logo: "📊",
    role: "Data Analyst — Groundwater Study",
    type: "Research",
    period: "Jan 2026 – Present",
    location: "Dhanbad, India",
    responsibilities: [
      "Consolidated multi-decade Excel datasets from CGWB tracking pre/post-monsoon water levels for Ranchi district, Jharkhand.",
      "Building a Next.js web application with a scientific-editorial aesthetic to present findings academically.",
      "Analyzing 30+ years of data to identify seasonal depletion patterns and long-term aquifer trends.",
    ],
    tech: ["Next.js", "Python", "Excel", "Data Visualization", "TypeScript"],
  },
  {
    company: "Open Source / Projects",
    logo: "⬡",
    role: "Full Stack & Blockchain Developer",
    type: "Personal",
    period: "2024 – Present",
    location: "Remote",
    responsibilities: [
      "Built DeVallet — Solana HD wallet with 'Dark Luxury' design system (near-black, warm gold, DM Serif Display + JetBrains Mono).",
      "Built NexusChat — cyberpunk real-time chat with circuit grid background, glitch effects, and WebSocket architecture.",
      "Built Kryptix — multi-chain HD wallet supporting Solana and Ethereum with BIP-44 derivation and localStorage persistence.",
      "Built Penance of the Lost — Soulsborne browser game in a single HTML file using Phaser 3 with procedural asset generation.",
    ],
    tech: ["Next.js", "TypeScript", "Solana", "Phaser 3", "Tailwind", "WebSocket"],
  },
  {
    company: "Competitive Programming",
    logo: "⚡",
    role: "Codeforces Contestant",
    type: "Self-Directed",
    period: "2024 – Present",
    location: "Online",
    responsibilities: [
      "Active on Codeforces across problems involving sliding window, MSB-grouping, spanning tree constructions, and DP range queries.",
      "Developed expertise in modular arithmetic, binary exponentiation, and single-pass solution design.",
      "Uses concise C++ with void solve() structure and minimal branching for competitive submissions.",
    ],
    tech: ["C++", "Algorithms", "Data Structures", "Codeforces"],
  },
];

export default function ExperienceSection() {
  return (
    <div className="page-enter max-w-[860px] mx-auto pt-[100px] px-6 pb-10">

      <p className="section-kicker">Career</p>
      <h1 className="section-title pixel-head">EXPERIENCES</h1>
      <p className="section-sub">My journey as a developer over 2+ years</p>

      {/* Timeline */}
      <div className="relative pl-0">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#1c1c1c]" />

        {/* Entries */}
        {experiences.map((exp, i) => (
          <div key={i} className="exp-entry relative pl-10 pb-[52px]">
            <div className="exp-dot" />

            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-2.5 mb-[18px]">
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="w-10 h-10 bg-[#111] border border-[#222] rounded-[10px] flex items-center justify-center text-[18px] shrink-0">
                  {exp.logo}
                </div>
                {/* Company & Role */}
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[15px] font-bold text-[#d4d4d4] tracking-[0.02em]">
                      {exp.company}
                    </span>
                    <span className="bg-[#141414] border border-[#222] rounded px-2 py-[1px] text-[11px] text-[#555]">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-xs text-[#686868] mt-[2px]">
                    {exp.role}
                  </div>
                </div>
              </div>

              {/* Location & Period */}
              <div className="text-right">
                <div className="text-xs text-[#5a5a5a]">{exp.period}</div>
                <div className="text-[11px] text-[#3a3a3a]">{exp.location}</div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="mb-4">
              <p className="text-[10px] tracking-[0.12em] text-[#444] mb-2.5 uppercase">
                Key Responsibilities
              </p>
              <ul className="list-none p-0 m-0">
                {exp.responsibilities.map((r, ri) => (
                  <li key={ri} className="text-xs leading-[1.85] text-[#888] pl-4 relative mb-[2px]">
                    <span className="absolute left-0 text-[#333] top-[1px]">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div>
              <p className="text-[10px] tracking-[0.12em] text-[#444] mb-2 uppercase">
                Technology Used
              </p>
              <div className="flex flex-wrap gap-[6px]">
                {exp.tech.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <StatusBar />
    </div>
  );
}