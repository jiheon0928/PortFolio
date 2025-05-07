"use client";

import React from "react";
import Image from "next/image";

const techImages = [
  "/textures/skilles/java.png",
  "/textures/skilles/javascript.png",
  "/textures/skilles/nest.png",
  "/textures/skilles/node.png",
  "/textures/skilles/springboot.png",
  "/textures/skilles/typescript.png",
];

export default function TechStack() {
  return (
    <section className="w-screen h-screen p-15 bg-[#21201C] flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        My TechStack
      </h2>
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-6 p-8 place-items-center">
        {techImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="tech logo"
            width={250}
            height={90}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
