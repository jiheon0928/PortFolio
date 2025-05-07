// src/app/hooks/useGlitch.ts
import { useEffect, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)];
}

/**
 * 글리치 텍스트 훅
 * @param targetText 최종 텍스트
 * @param maxIterations 글리치 반복 횟수
 * @param intervalMs 이터레이션 간격(ms)
 */
export function useGlitch(
  targetText: string,
  maxIterations = 25,
  intervalMs = 15
) {
  const [displayedText, setDisplayedText] = useState<string[]>(
    Array.from(targetText)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= targetText.length) return;

    let iterations = 0;
    const timer = setInterval(() => {
      setDisplayedText(
        Array.from(targetText).map((char, idx) => {
          if (idx < currentIndex) return char;
          if (idx === currentIndex)
            return Math.random() < 0.5 ? randomChar() : char;
          return "";
        })
      );

      iterations++;
      if (iterations > maxIterations) {
        clearInterval(timer);
        if (currentIndex < targetText.length - 1) {
          setCurrentIndex((i) => i + 1);
        }
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [currentIndex, targetText, maxIterations, intervalMs]);

  return { displayedText, finished: currentIndex >= targetText.length };
}
