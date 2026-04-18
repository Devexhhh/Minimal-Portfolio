"use client";
import Tag from "./Tag";
import StatusBar from "./StatusBar";

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
  if (t.includes("motion") || t.includes("framer"))
    return "text-[#f43f5e] border-[#f43f5e]/30 bg-[#f43f5e]/10"; // Rose/Pink for Motion
  return "text-[#888] border-[#333] bg-[#111]";
};

const projects = [
  {
    title: "KeyZen",
    type: "Side Project · Web App",
    status: "Active",
    description: "A typing speed test built around the Keychron keyboard aesthetic with audio feedback on every keystroke. Tracks WPM, accuracy, and stats with a clean, minimal UI.",
    tags: ["Next.js", "TypeScript", "Motion", "Recharts", "shadcn/ui"],
    image: "/keyzen-screenshot.png", // Replace with your actual image path
    glyph: "K",
    gradientA: "#0a0a0a", gradientB: "#0a0a0a",
  },
  {
    title: "DeVallet",
    type: "Side Project · Web App",
    status: "Active",
    description: "Solana HD wallet with 'Dark Luxury' design — near-black base, warm gold accents, DM Serif Display + Sora + JetBrains Mono. Full BIP-44 key derivation, account management, and transaction signing.",
    tags: ["Next.js", "Solana", "TypeScript", "Tailwind"],
    glyph: "D",
    gradientA: "#0d1a0d", gradientB: "#0a0a0a",
  },
  {
    title: "NexusChat",
    type: "Side Project · Web App",
    status: "Active",
    description: "Real-time cyberpunk-themed chat app with cyan/violet color language, animated circuit grid background, glitch text effects, and WebSocket-based messaging infrastructure.",
    tags: ["React", "WebSocket", "Node.js", "CSS"],
    glyph: "N",
    gradientA: "#0a0d1a", gradientB: "#0a0a0a",
  },
  {
    title: "Penance of the Lost",
    type: "Game · Single HTML File",
    status: "Complete",
    description: "Soulsborne-style browser game built entirely in one HTML file using Phaser 3. Procedurally generated assets, stamina-based combat with dodge rolls, and a multi-phase boss fight.",
    tags: ["Phaser 3", "JavaScript", "HTML", "Canvas"],
    glyph: "P",
    gradientA: "#1a0a0a", gradientB: "#0a0a0a",
  },
  {
    title: "Groundwater Analysis",
    type: "Research Project",
    status: "Active",
    description: "Multi-decade water level analysis for Ranchi district, Jharkhand — 30+ years of CGWB data. Pre/post-monsoon trend visualization in a scientific-editorial Next.js web application.",
    tags: ["Next.js", "Python", "Excel", "Data Viz"],
    glyph: "G",
    gradientA: "#0a1218", gradientB: "#0a0a0a",
  },
  {
    title: "Kryptix",
    type: "Open Source · Web3",
    status: "Active",
    description: "Multi-chain HD wallet supporting Solana and Ethereum. BIP-44 compliant key derivation, responsive Tailwind UI, localStorage persistence, and full transaction signing.",
    tags: ["TypeScript", "React", "Solana", "Ethereum"],
    glyph: "K",
    gradientA: "#150d1a", gradientB: "#0a0a0a",
  },
  {
    title: "Ankar AI Clone",
    type: "UI · Marketing",
    status: "Complete",
    description: "Next.js recreation of an AI marketing site with animated canvas-based prism light effect, precise corner bracket decorations in the hero, and smooth scroll-triggered reveals.",
    tags: ["Next.js", "Canvas API", "TypeScript", "Framer Motion"],
    glyph: "A",
    gradientA: "#111118", gradientB: "#0a0a0a",
  },
];

export default function ProjectsSection() {
  return (
    <div className="page-enter max-w-4xl mx-auto pt-[100px] px-6 pb-10">
      <p className="section-kicker">Portfolio</p>
      <h1 className="section-title pixel-head">PROJECTS</h1>
      <p className="section-sub">A collection of things I&apos;ve built.</p>

      {/* CHANGED: Replaced auto-fill with standard responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative cursor-default bg-[#151515] border border-[#242424] hover:border-transparent flex flex-col transition-colors duration-200 cursor-pointer"
          >
            {/* Hover Dashed Bounding Box */}
            <div className="absolute inset-[-1px] border border-dashed border-[#666] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20" />

            {/* Hover Solid L-brackets (Corners) */}
            {[
              "top-[-2px] left-[-2px] border-t-2 border-l-2", // Top Left
              "top-[-2px] right-[-2px] border-t-2 border-r-2", // Top Right
              "bottom-[-2px] left-[-2px] border-b-2 border-l-2", // Bottom Left
              "bottom-[-2px] right-[-2px] border-b-2 border-r-2" // Bottom Right
            ].map((classes, ci) => (
              <div
                key={ci}
                className={`absolute w-[16px] h-[16px] border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 pointer-events-none ${classes}`}
              />
            ))}

            {/* Preview Section */}
            <div
              className="h-45 flex items-center justify-center relative overflow-hidden border-b border-[#242424] bg-[#0c0c0c]"
              style={!p.image ? { background: `radial-gradient(ellipse at 60% 40%, ${p.gradientA} 0%, ${p.gradientB} 70%)` } : {}}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <>
                  {/* Square Grid lines fallback */}
                  <div className="absolute inset-0 opacity-60 bg-[size:24px_24px] bg-[linear-gradient(#1c1c1c_1px,transparent_1px),linear-gradient(90deg,#1c1c1c_1px,transparent_1px)]" />

                  {/* Corner brackets fallback for image-less cards */}
                  {[
                    "top-[10px] left-[10px] border-t-[1.5px] border-l-[1.5px]",
                    "top-[10px] right-[10px] border-t-[1.5px] border-r-[1.5px]",
                    "bottom-[10px] left-[10px] border-b-[1.5px] border-l-[1.5px]",
                    "bottom-[10px] right-[10px] border-b-[1.5px] border-r-[1.5px]"
                  ].map((classes, ci) => (
                    <div key={ci} className={`absolute w-[10px] h-[10px] border-[#2e2e2e] ${classes}`} />
                  ))}

                  <span className="text-[72px] font-bold text-white opacity-[0.04] tracking-[0.05em] select-none relative z-[1]">
                    {p.glyph}
                  </span>
                </>
              )}
            </div>


            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1 relative z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[12px] text-[#999] tracking-tighter font-sans">{p.type}</span>
                <span className="bg-[#2c2c2c] border border-[#3a3a3a] py-1 px-3 text-[13px] font-medium text-[#f0f0f0]">
                  {p.status}
                </span>
              </div>

              <h3 className="text-[24px] font-bold text-white mb-3 tracking-tight font-pixel">
                {p.title}
              </h3>

              <p className="text-[13px] leading-[1.65] text-[#999] font-sans mb-6 flex-1">
                {p.description}
              </p>

              {/* Tech Tags Layout (CHANGED TO USE getTechStyle) */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t, idx) => (
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
  );
}
