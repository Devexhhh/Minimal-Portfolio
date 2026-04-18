"use client";
import StatusBar from "./StatusBar";

// Helper function to match tech tags with specific colors
const getTechStyle = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("react") || t.includes("next"))
    return "text-[#61dafb] border-[#61dafb]/30 bg-[#61dafb]/10";
  if (t.includes("node") || t.includes("mongo") || t.includes("excel"))
    return "text-[#4db33d] border-[#4db33d]/30 bg-[#4db33d]/10";
  if (t.includes("python") || t.includes("api"))
    return "text-[#4285F4] border-[#4285F4]/30 bg-[#4285F4]/10";
  if (t.includes("solana"))
    return "text-[#14F195] border-[#14F195]/30 bg-[#14F195]/10";
  if (t.includes("ethereum") || t.includes("ethers"))
    return "text-[#627EEA] border-[#627EEA]/30 bg-[#627EEA]/10";
  if (t.includes("rust") || t.includes("html"))
    return "text-[#e34f26] border-[#e34f26]/30 bg-[#e34f26]/10";
  if (t.includes("javascript") || t.includes("typescript"))
    return "text-[#f7df1e] border-[#f7df1e]/30 bg-[#f7df1e]/10";
  return "text-[#888] border-[#333] bg-[#111]";
};

const hacks = [
  {
    placement: "1ST PLACE",
    color: "#facc15",
    event: "SMART INDIA HACKATHON · 2024",
    title: "Groundwater Analysis Platform",
    description:
      "Built a scientific web platform to visualize multi-decade groundwater trends for Ranchi district, Jharkhand. Consolidated CGWB data spanning 30+ years tracking pre/post-monsoon water table depths and seasonal aquifer depletion patterns. The platform presents findings in a scientific-editorial Next.js interface.",
    tech: ["Next.js", "Python", "Excel", "Data Analysis", "TypeScript"],
    github: "#",
  },
  {
    placement: "1ST PLACE",
    color: "#facc15",
    event: "BLOCKCHAIN OPEN BUILD · 2025",
    title: "Kryptix — Multi-Chain HD Wallet",
    description:
      "Built Kryptix, an HD wallet supporting Solana and Ethereum with BIP-44 compliant key derivation, responsive Tailwind UI, and localStorage persistence. Included full transaction signing, account management flows, and address derivation for multiple coins from a single seed phrase.",
    tech: ["TypeScript", "React", "Solana Web3.js", "Ethers.js", "Tailwind"],
    github: "#",
  },
  {
    placement: "BUILT",
    color: "#aaa",
    event: "48-HOUR SOLO GAME JAM · 2025",
    title: "Penance of the Lost",
    description:
      "Soulsborne-style browser game built entirely in a single HTML file using Phaser 3. Procedurally generated assets, stamina-based combat with dodge rolls, AI enemy pathing, and a multi-phase boss fight. Zero external dependencies beyond Phaser. Ships as one file you can just double-click.",
    tech: ["Phaser 3", "JavaScript", "HTML5 Canvas", "Procedural Gen"],
    github: "#",
  },
  {
    placement: "ONGOING",
    color: "#aaa",
    event: "WORLDQUANT BRAIN IQC · 2026",
    title: "Alpha Research Strategies",
    description:
      "Preparing quantitative alpha strategies for the IQC 2026 competition. Studying factor models, Sharpe ratio optimization, turnover constraints, and platform-specific simulation. Coming from a finance beginner baseline and working through foundational concepts in market microstructure.",
    tech: ["Python", "Statistics", "Quant Finance", "BRAIN Platform"],
    github: null,
  },
  {
    placement: "BOUNTY",
    color: "#aaa",
    event: "SOLANA DEVNET BUILD · 2025",
    title: "LST Liquid Staking Token",
    description:
      "Built a Liquid Staking Token project on Solana devnet. Resolved MintTo errors by correctly using Associated Token Accounts. Explored stake pool mechanics, epoch reward distribution, and LST mint/burn flows against devnet validators.",
    tech: ["Rust", "Solana", "Anchor", "SPL Token", "TypeScript"],
    github: "#",
  },
];

export default function HacksSection() {
  return (
    <div className="page-enter max-w-4xl mx-auto pt-[100px] px-6 pb-10">
      <p className="section-kicker">Competitions</p>
      <h1 className="section-title pixel-head">HACKATHONS</h1>
      <p className="section-sub">Competitions, bounties, and builds under pressure.</p>

      <div className="mt-12">
        {hacks.map((h, i) => (
          <div
            key={i}
            // CHANGED: Reduced pb-[52px] and mb-[52px] to pb-[32px] and mb-[32px]
            className={`group pb-[25px] transition-all duration-300 ${i < hacks.length - 1 ? "border-b border-[#1c1c1c] mb-[25px]" : "mb-0"}`}
            style={{ "--accent-color": h.color }}
          >
            {/* Placement */}
            <h2 className="text-[16px] font-pixel tracking-widest mb-[6px] text-[#666] transition-colors duration-300 group-hover:text-[var(--accent-color)]">
              {h.placement}
            </h2>

            {/* Underline rule */}
            <div className="w-[44px] h-[2px] mb-6 bg-[#333] transition-colors duration-300 group-hover:bg-[var(--accent-color)]" />

            {/* Event */}
            <p className="text-[12px] text-[#888] tracking-[0.15em] uppercase mb-[10px]">
              {h.event}
            </p>

            {/* Title */}
            <h3 className="text-[20px] font-bold text-white mb-4 tracking-[0.02em] font-pixel">
              {h.title}
            </h3>

            {/* Description */}
            <p className="text-[14px] font-mono leading-[1.8] text-[#a0a0a0] mb-6 max-w-[800px]">
              {h.description}
            </p>

            {/* Tech Tags Layout */}
            <div className="flex flex-wrap gap-1.5 mb-[20px]">
              {h.tech.map((t, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-1.5 px-2 py-1 border text-[11px] tracking-wide transition-colors duration-200 ${getTechStyle(t)}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                  {t}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            {h.github && (
              <a
                href={h.github}
                className="inline-flex items-center gap-[8px] text-[13px] font-medium text-[#777] hover:text-white transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>

      <StatusBar />
    </div>
  );
}