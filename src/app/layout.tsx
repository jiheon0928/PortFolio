// src/app/layout.tsx
import { colors } from "./components/data/data";
import Marquee from "./components/Marquee";
import Particles from "./components/particles/Paticles";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="relative">
        <Particles count={40} colors={colors} />
        <Marquee />
        {children}
      </body>
    </html>
  );
}
