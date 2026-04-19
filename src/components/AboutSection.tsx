"use client";
import ContributionGrid from "./ContributionGrid";
import StatusBar from "./StatusBar";
import VerticalGrid from "./VerticalGrid";
import HorizontalGrid from "./HorizontalGrid";

const socials = [
  { label: "Twitter", icon: "𝕏", href: "https://twitter.com" },
  { label: "Github", icon: "⬡", href: "https://github.com" },
  { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
  { label: "Discord", icon: "◈", href: "#" },
  { label: "Email", icon: "✉", href: "mailto:sujal@example.com" },
];

const achievements = [
  {
    title: "Smart India Hackathon.",
    body: "Made it to SIH 2024 in my very first attempt. Didn't really know what I was doing, but figured it out. Still one of the best experiences.",
    bold: ["SIH 2024"],
  },
  {
    title: "Hackathons.",
    body: "Built multiple projects under pressure — DeVallet (Solana HD wallet with Dark Luxury design), NexusChat (cyberpunk real-time chat), and more. Each one shipped from scratch in 48 hours.",
    bold: ["DeVallet", "NexusChat"],
    link: { text: "GitHub", href: "https://github.com" },
  },
  {
    title: "Blockchain & Web3.",
    body: "Built Kryptix, a multi-chain HD wallet supporting Solana and Ethereum. Resolved Solana devnet LST MintTo flows. Interested in DeFi primitives and on-chain credit systems.",
    bold: ["Kryptix", "Solana", "Ethereum"],
  },
  {
    title: "Groundwater Research.",
    body: "Building a multi-decade water level analysis platform for Ranchi district, Jharkhand — tracking 30+ years of pre/post-monsoon CGWB data in a Next.js scientific-editorial web app.",
    bold: ["Ranchi", "Jharkhand"],
  },
  {
    title: "Competitive Programming.",
    body: "Active on Codeforces working through sliding window, MSB-grouping, spanning tree constructions, DP range queries, and modular arithmetic in C++ with void solve() structure.",
    bold: ["Codeforces"],
  },
];

function highlight(text: string, bolds: string[]) {
  const regex = new RegExp(
    `(${bolds.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g"
  );
  return text.split(regex).map((part, i) =>
    bolds.includes(part)
      ? <strong key={i} className="text-[#e2e2e2] font-bold">{part}</strong>
      : part
  );
}

function SocialButton({ label, icon, href }: { label: string; icon: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 bg-[#111] border border-[#242424] hover:border-transparent hover:bg-[#161616] hover:text-white px-4 py-2 text-[13px] text-[#aaa] no-underline transition-all duration-200 font-[inherit]"
    >
      {/* Dashed border on hover */}
      <div className="absolute inset-[-1px] border border-dashed border-[#666] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      {/* Corner L-brackets */}
      <div className="absolute top-[-2px] left-[-2px] w-[7px] h-[7px] border-t border-l border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute top-[-2px] right-[-2px] w-[7px] h-[7px] border-t border-r border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-[-2px] left-[-2px] w-[7px] h-[7px] border-b border-l border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      <div className="absolute bottom-[-2px] right-[-2px] w-[7px] h-[7px] border-b border-r border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
      {/* Content */}
      <span className="relative z-10 text-[12px]">{icon}</span>
      <span className="relative z-10">{label}</span>
    </a>
  );
}

export default function AboutSection() {
  return (
    <>
      {/* Background Grids (fixed, behind content) */}
      <VerticalGrid />
      {/* Main Content (z-10 to stay on top, max-w-4xl to match grid lines) */}
      <div className="page-enter relative z-10 max-w-4xl mx-auto pt-[100px] px-6 pb-10">

        {/* Hero */}
        <p className="text-[13px] text-[#666] mb-3 tracking-[0.03em]">
          Hola I&apos;m 👋
        </p>

        <h1 className="font-[family-name:var(--font-pixel)] text-[clamp(34px,6vw,58px)] font-medium tracking-[0.045em] uppercase leading-[1.05] text-[#efefef] mb-5">
          Kumar Sujal
        </h1>

        <p className="text-[11px] text-[#555] tracking-[0.14em] uppercase mb-9">
          I build web apps, explore blockchain, and crunch data for research
        </p>

        {/* Terminal pill */}
        <div className="flex items-center gap-4 mb-[72px]">
          <div className="bg-[#111] border border-[#252525] py-2 px-[18px] text-[13px] text-[#d4d4d4] flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            <span className="text-[#57c457] text-[9px]">●</span>
            <span>npx kumarsujal</span>
            <span className="blink text-[#555] font-light">_</span>
          </div>
          <span className="text-[11px] text-[#444]">← try this in your terminal</span>
        </div>


        {/* About Me heading */}
        <h2 className="font-[family-name:var(--font-pixel)] text-xl font-medium tracking-[0.07em] uppercase text-[#aaa] mb-5">
          About_Me
        </h2>

        <p className="text-[15px] leading-[1.95] text-[#a0a0a0] mb-3.5">
          Hi! I&apos;m Kumar Sujal — a student developer with interests spanning competitive programming,
          Web3/blockchain, and environmental data analysis. I love building things that look great and
          work even better, from dark luxury wallet UIs to scientific research platforms.
        </p>
        <p className="text-[15px] leading-[1.95] text-[#a0a0a0] mb-12">
          I&apos;ve spent time working on complex groundwater datasets for Ranchi district, building
          Solana DApps on devnet, grinding Codeforces C++ problems, and starting to explore
          quantitative finance via WorldQuant BRAIN&apos;s IQC. I enjoy the messy infrastructure
          work just as much as shipping the final product.
        </p>

        {/* Social links */}
        <p className="text-[14px] text-[#444] mb-3">
          My <strong className="text-[#666]">social links</strong> if you wish to connect with me
        </p>
        <div className="flex flex-wrap gap-2 mb-[60px]">
          {socials.map(s => <SocialButton key={s.label} {...s} />)}
        </div>


        {/* Contribution grid */}
        <ContributionGrid total={3847} />

        {/* Notable achievements heading */}
        <h2 className="font-[family-name:var(--font-pixel)] text-xl font-medium tracking-[0.07em] uppercase text-[#aaa] mt-[60px] mb-6">
          Notable_achievements
        </h2>

        <div className="flex flex-col">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="border-l-2 border-[#1e1e1e] hover:border-[#3a3a3a] pl-5 py-3.5 transition-colors duration-200"
            >
              <p className="text-[13px] leading-[1.9] text-[#909090]">
                <strong className="text-[#d0d0d0]">{a.title}</strong>{" "}
                {highlight(a.body, a.bold)}
                {a.link && (
                  <> <a href={a.link.href} className="text-[#777] underline hover:text-white transition-colors">{a.link.text}</a></>
                )}
              </p>
            </div>
          ))}
        </div>

        <StatusBar />
      </div >
    </>
  );
}