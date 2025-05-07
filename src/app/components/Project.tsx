"use client";

import React from "react";
import Particles from "./particles/Paticles";
import Lines from "./line/Line";
import Boxes from "./box/Boxes";
import {
  appearTime,
  colors,
  curveFactor,
  lineCount,
  off,
} from "./line/LineData";

export default function Project() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <Lines
          lineCount={lineCount}
          colors={colors}
          curveFactor={curveFactor}
          off={off}
        />
        <Boxes
          count={5}
          appearTime={appearTime}
          texts={["실시간채팅", "오셸로", "나니머스AA", "현대", "5"]}
        />
      </svg>
    </div>
  );
}
