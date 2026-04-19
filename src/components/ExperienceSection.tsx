"use client";
import StatusBar from "./StatusBar";
import VerticalGrid from "./VerticalGrid";

// Helper function to match tech tags with specific colors
const getTechStyle = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react") || t.includes("next"))
    return "text-[#61dafb] border-[#61dafb]/30 bg-[#61dafb]/10";
  if (t.includes("node") || t.includes("mongo") || t.includes("excel"))
    return "text-[#4db33d] border-[#4db33d]/30 bg-[#4db33d]/10";
  if (t.includes("python") || t.includes("api") || t.includes("c++"))
    return "text-[#4285F4] border-[#4285F4]/30 bg-[#4285F4]/10";
  if (t.includes("solana"))
    return "text-[#14F195] border-[#14F195]/30 bg-[#14F195]/10";
  if (t.includes("ethereum") || t.includes("ethers") || t.includes("blockchain"))
    return "text-[#627EEA] border-[#627EEA]/30 bg-[#627EEA]/10";
  if (t.includes("rust") || t.includes("html") || t.includes("phaser"))
    return "text-[#e34f26] border-[#e34f26]/30 bg-[#e34f26]/10";
  if (t.includes("javascript") || t.includes("typescript"))
    return "text-[#f7df1e] border-[#f7df1e]/30 bg-[#f7df1e]/10";
  if (t.includes("tailwind") || t.includes("css") || t.includes("websocket"))
    return "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10";
  return "text-[#888] border-[#333] bg-[#111]";
};

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
    <>
      <VerticalGrid />
      <div className="page-enter max-w-4xl mx-auto pt-[100px] px-6 pb-10">

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
              <div className="flex justify-between items-start flex-wrap gap-3 mb-[20px]">
                <div className="flex items-center gap-4">
                  {/* Logo */}
                  <div className="w-12 h-12 bg-[#111] border border-[#222] flex items-center justify-center text-[20px] shrink-0">
                    {exp.logo}
                  </div>
                  {/* Company & Role */}
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <span className="text-[18px] font-bold text-[#e2e2e2] tracking-[0.02em] font-pixel">
                        {exp.company}
                      </span>
                      <span className="bg-[#141414] border border-[#222] px-2.5 py-[2px] text-[12px] text-[#666]">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-[15px] text-[#888] font-pixel">
                      {exp.role}
                    </div>
                  </div>
                </div>

                {/* Location & Period */}
                <div className="text-right mt-1 sm:mt-0">
                  <div className="text-[13px] text-[#666] mb-0.5">{exp.period}</div>
                  <div className="text-[12px] text-[#555]">{exp.location}</div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-5">
                <p className="text-[11px] tracking-[0.12em] text-[#555] mb-3 uppercase">
                  Key Responsibilities
                </p>
                <ul className="list-none p-0 m-0">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri} className="text-[14px] leading-[1.85] text-[#a0a0a0] pl-5 relative mb-2">
                      <span className="absolute left-0 text-[#555] top-[2px]">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech */}
              <div>
                <p className="text-[11px] tracking-[0.12em] text-[#555] mb-3 uppercase">
                  Technology Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`flex items-center gap-1.5 px-2 py-1 border text-[11px] tracking-wide transition-colors duration-200 ${getTechStyle(t)}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <StatusBar />
      </div>
    </>
  );
}