"use client";
import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDate(now.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "2-digit" }));
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-[11px] text-[#3a3a3a] flex flex-col gap-[2px] mt-[56px] pt-[20px] border-t border-[#181818]">
      <span>{date} · {time}</span>
      <div className="flex items-center gap-[6px]">
        <span>📍 Dhanbad, Jharkhand, India</span>
        <span>·</span>
        <span>☁️ 32°C</span>
        <span>·</span>
        <span className="text-[#3a3a3a]">⚡ 100%</span>
      </div>
      <span className="mt-1">© 2026 Sujal Kumar. All rights reserved.</span>
    </div>
  );
}