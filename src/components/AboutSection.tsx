"use client";
import ContributionGrid from "./ContributionGrid";
import StatusBar from "./StatusBar";

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

function highlight(text, bolds) {
  const regex = new RegExp(`(${bolds.map(b => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(regex).map((part, i) =>
    bolds.includes(part)
      ? <strong key={i} className="text-[#e2e2e2] font-bold">{part}</strong>
      : part
  );
}

export default function AboutSection() {
  return (
    <div className="page-enter max-w-[860px] mx-auto pt-[100px] px-6 pb-10">

      {/* Hero */}
      <p className="text-[15px] text-[#666] mb-3 tracking-[0.03em]">
        Hola I&apos;m 👋
      </p>

      {/* Added pixel-head here */}
      <h1 className="pixel-head text-[clamp(34px,6vw,58px)] font-bold tracking-[0.045em] uppercase leading-[1.05] text-[#efefef] mb-[18px]">
        Sujal Kumar
      </h1>

      <p className="text-[13px] text-[#555] tracking-[0.14em] uppercase mb-10">
        I build web apps, explore blockchain, and crunch data for research
      </p>

      {/* Terminal pill */}
      <div className="flex items-center gap-4 mb-[72px]">
        <div className="bg-[#111] border border-[#252525] rounded-lg py-2.5 px-5 text-[14px] text-[#d4d4d4] flex items-center gap-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          <span className="text-[#57c457] text-[10px]">●</span>
          <span className="font-mono">npx sujalkumar</span>
          <span className="blink text-[#555] font-light">_</span>
        </div>
        <span className="text-[13px] text-[#444]">← try this in your terminal</span>
      </div>

      {/* About Me */}
      {/* Added pixel-head here */}
      <h2 className="pixel-head text-xl font-bold tracking-[0.07em] text-[#aaa] mb-[20px] [font-variant-caps:small-caps]">
        About_Me
      </h2>

      <p className="text-[15px] leading-[1.95] text-[#a0a0a0] mb-4">
        Hi! I&apos;m Sujal Kumar — a student developer with interests spanning competitive programming,
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
      <p className="text-[14px] text-[#444] mb-4">
        My <strong className="text-[#666]">social links</strong> if you wish to connect with me
      </p>

      <div className="flex flex-wrap gap-3 mb-[60px]">
        {socials.map(s => (
          <a
            key={s.label}
            href={s.href}
            className="group relative inline-flex items-center justify-center bg-[#111] border border-[#242424] hover:border-transparent rounded-none px-4 py-2 text-[14px] text-[#aaa] no-underline transition-colors duration-200 hover:bg-[#161616] hover:text-white font-[inherit]"
          >
            {/* Hover Dashed Bounding Box */}
            <div className="absolute inset-[-1px] border border-dashed border-[#666] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10" />

            {/* Hover Solid L-brackets (Corners) */}
            {[
              "top-[-2px] left-[-2px] border-t border-l", // Top Left
              "top-[-2px] right-[-2px] border-t border-r", // Top Right
              "bottom-[-2px] left-[-2px] border-b border-l", // Bottom Left
              "bottom-[-2px] right-[-2px] border-b border-r" // Bottom Right
            ].map((classes, ci) => (
              <div
                key={ci}
                className={`absolute w-[6px] h-[6px] border-[#aaa] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-none ${classes}`}
              />
            ))}

            {/* Content (Z-indexed above effects) */}
            <span className="relative z-30 flex items-center gap-2">
              <span className="text-[13px]">{s.icon}</span>
              {s.label}
            </span>
          </a>
        ))}
      </div>

      {/* Contribution grid */}
      <ContributionGrid total={3847} />

      {/* Notable achievements */}
      {/* Added pixel-head here */}
      <h2 className="pixel-head text-xl font-bold tracking-[0.07em] text-[#aaa] mt-[60px] mb-6 [font-variant-caps:small-caps]">
        Notable_achievements
      </h2>

      <div className="flex flex-col gap-2">
        {achievements.map((a, i) => (
          <div key={i} className="achievement-block">
            <p className="text-[15px] leading-[1.9] text-[#909090]">
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
    </div>
  );
}