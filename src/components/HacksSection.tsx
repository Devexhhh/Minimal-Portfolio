"use client";
import StatusBar from "./StatusBar";

const hacks = [
  {
    placement: "1ST PLACE",
    color: "#d4d4d4",
    event: "SMART INDIA HACKATHON · 2024",
    title: "Groundwater Analysis Platform",
    description:
      "Built a scientific web platform to visualize multi-decade groundwater trends for Ranchi district, Jharkhand. Consolidated CGWB data spanning 30+ years tracking pre/post-monsoon water table depths and seasonal aquifer depletion patterns. The platform presents findings in a scientific-editorial Next.js interface.",
    tech: "Next.js · Python · Excel · Data Analysis · TypeScript",
    github: "#",
  },
  {
    placement: "1ST PLACE",
    color: "#d4d4d4",
    event: "BLOCKCHAIN OPEN BUILD · 2025",
    title: "Kryptix — Multi-Chain HD Wallet",
    description:
      "Built Kryptix, an HD wallet supporting Solana and Ethereum with BIP-44 compliant key derivation, responsive Tailwind UI, and localStorage persistence. Included full transaction signing, account management flows, and address derivation for multiple coins from a single seed phrase.",
    tech: "TypeScript · React · Solana Web3.js · Ethers.js · Tailwind",
    github: "#",
  },
  {
    placement: "BUILT",
    color: "#888",
    event: "48-HOUR SOLO GAME JAM · 2025",
    title: "Penance of the Lost",
    description:
      "Soulsborne-style browser game built entirely in a single HTML file using Phaser 3. Procedurally generated assets, stamina-based combat with dodge rolls, AI enemy pathing, and a multi-phase boss fight. Zero external dependencies beyond Phaser. Ships as one file you can just double-click.",
    tech: "Phaser 3 · JavaScript · HTML5 Canvas · Procedural Generation",
    github: "#",
  },
  {
    placement: "ONGOING",
    color: "#888",
    event: "WORLDQUANT BRAIN IQC · 2026",
    title: "Alpha Research Strategies",
    description:
      "Preparing quantitative alpha strategies for the IQC 2026 competition. Studying factor models, Sharpe ratio optimization, turnover constraints, and platform-specific simulation. Coming from a finance beginner baseline and working through foundational concepts in market microstructure.",
    tech: "Python · Statistics · Quantitative Finance · BRAIN Platform",
    github: null,
  },
  {
    placement: "BOUNTY",
    color: "#888",
    event: "SOLANA DEVNET BUILD · 2025",
    title: "LST Liquid Staking Token",
    description:
      "Built a Liquid Staking Token project on Solana devnet. Resolved MintTo errors by correctly using Associated Token Accounts. Explored stake pool mechanics, epoch reward distribution, and LST mint/burn flows against devnet validators.",
    tech: "Rust · Solana · Anchor · SPL Token · TypeScript",
    github: "#",
  },
];

export default function HacksSection() {
  return (
    <div className="page-enter max-w-[860px] mx-auto pt-[100px] px-6 pb-10">

      <p className="section-kicker">Competitions</p>
      <h1 className="section-title pixel-head">HACKATHONS</h1>
      <p className="section-sub">Competitions, bounties, and builds under pressure.</p>

      <div>
        {hacks.map((h, i) => (
          <div
            key={i}
            className={`pb-[52px] ${i < hacks.length - 1 ? "border-b border-[#161616] mb-[52px]" : "mb-0"}`}
          >
            {/* Placement */}
            <h2 className="hack-place mb-[6px]" style={{ color: h.color }}>
              {h.placement}
            </h2>

            {/* Underline rule */}
            <div className="w-[44px] h-[1.5px] bg-[#282828] mb-4" />

            {/* Event */}
            <p className="text-[10px] text-[#484848] tracking-[0.14em] uppercase mb-[10px]">
              {h.event}
            </p>

            {/* Title */}
            <h3 className="text-[17px] font-bold text-[#e0e0e0] mb-4 font-[inherit] tracking-[0.02em]">
              {h.title}
            </h3>

            {/* Description */}
            <p className="text-[13px] leading-[1.85] text-[#888] mb-4 max-w-[680px]">
              {h.description}
            </p>

            {/* Tech */}
            <p className="text-[11px] text-[#484848] mb-[14px] tracking-[0.02em]">
              {h.tech}
            </p>

            {/* GitHub link */}
            {h.github && (
              <a
                href={h.github}
                className="inline-flex items-center gap-[7px] text-xs text-[#666] no-underline transition-colors duration-150 hover:text-[#ccc]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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