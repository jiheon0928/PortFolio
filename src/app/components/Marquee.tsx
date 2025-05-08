"use client";

export default function Marquee() {
  const text = "🌟Lee Ji Heon Portfolio 🌟 010-3015-0928 🌟 wwlgjs77@gmail.com";

  return (
    <div className="marquee-container bg-transparent text-white w-screen fixed top-0 z-9999">
      <div className="marquee-content text-2xl font-bold">
        <span>{text.repeat(15)}</span>
        <span>{text.repeat(15)}</span>
      </div>
    </div>
  );
}
