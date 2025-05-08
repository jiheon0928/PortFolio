// src/app/components/ProjectList.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/app/type/type";
import { projectLinks } from "@/app/components/data/data";

export default function ProjectList() {
  return (
    <section className="min-h-screen bg-[#21201C] p-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        {projectLinks.map((card: ProjectCardProps, idx: number) => (
          <div
            key={idx}
            className="bg-transparent rounded-lg overflow-hidden shadow-md flex flex-col"
          >
            {/* 카드 이미지 */}
            <div className="relative w-full h-48">
              <Image
                src={card.image}
                alt={card.sitename}
                fill
                className="object-cover"
              />
            </div>

            {/* 카드 본문 */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {card.sitename}
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">
                {card.explanation}
              </p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {card.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-600 text-white rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 버튼 그룹 */}
              <div className="flex space-x-2">
                <Link
                  href={card.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-gray-400"
                >
                  GO SITE
                </Link>
                <Link
                  href={card.velog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-100"
                >
                  velog
                </Link>
                <Link
                  href={card.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-100"
                >
                  github
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
