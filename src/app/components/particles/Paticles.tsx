// src/app/components/particles/Particles.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface Particle {
  x: number;
  y: number;
  color: string;
}

/**
 * 각 circle 에 랜덤한 속도·딜레이로 opacity 애니메이션을 줘서 반짝이게 만듦
 */
export default function Particles({
  count,
  colors,
}: {
  count: number;
  colors: string[];
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const arr: Particle[] = Array.from({ length: count }).map((_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      color: colors[i % colors.length],
    }));
    setParticles(arr);
  }, [count, colors]);

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-9999 fixed">
      {particles.map((p, i) => {
        // 각 파티클마다 랜덤 duration, delay 설정
        const duration = Math.random() * 2 + 1; // 1~3초
        const delay = Math.random() * 2; // 0~2초
        return (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={2}
            fill={p.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        );
      })}
    </svg>
  );
}
