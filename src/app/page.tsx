"use client";
import { useState } from "react";
import Navbar, { type Tab } from "@/components/Navbar";
import CatSprite from "@/components/CatSprite";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import HacksSection from "@/components/HacksSection";

export default function Home() {
  const [tab, setTab] = useState<Tab>("about");

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#0c0c0c] relative z-[1]">
      <Navbar activeTab={tab} onTabChange={setTab} />
      <CatSprite />
      {tab === "about" && <AboutSection key="about" />}
      {tab === "projects" && <ProjectsSection key="projects" />}
      {tab === "experience" && <ExperienceSection key="experience" />}
      {tab === "hacks" && <HacksSection key="hacks" />}
    </main>
  );
}