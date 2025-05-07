// src/app/components/Glitch.tsx
"use client";
import { motion } from "framer-motion";
import { useGlitch } from "@/app/hooks/useGlitch";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin-ext"], // ← latin‑ext 로 변경
  display: "swap",
});

export default function Glitch() {
  const target = "HELLO\nMY NAME IS\nLEE JI HEON.";
  const { displayedText } = useGlitch(target, 20, 15);

  return (
    <div
      className={`w-screen h-screen bg-[#21201C] text-white flex items-center justify-center text-center whitespace-pre-line ${noto.className}`}>
      <motion.h1 className="text-[5rem] font-normal">
        {displayedText.join("")}
      </motion.h1>
    </div>
  );
}
