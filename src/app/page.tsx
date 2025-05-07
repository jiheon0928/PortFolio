// src/app/page.tsx
import ProjectCart from "./components/card/ProjectCard";
import Glitch from "./components/Glitch";
import TechStack from "./components/TexhStack";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1st section */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-black z-0">
        <Glitch />
      </section>

      {/* 2nd section */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-white z-10">
        <TechStack />
      </section>

      {/* 3rd section */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-gray-100 z-20">
        <ProjectCart />
      </section>
    </main>
  );
}
