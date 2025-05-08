import { ProjectCardProps } from "@/app/type/type";

export const colors: string[] = [
  "#ff6b6b",
  "#feca57",
  "#48dbfb",
  "#5f27cd",
  "#1dd1a1",
  "#ff9ff3",
];

export const projectLinks: ProjectCardProps[] = [
  {
    image: "/textures/card/chat.png",
    sitename: "RealTime-chat-site",
    explanation:
      "WebSocket 기반 실시간 메시징과 JWT 인증을 통해 사용자 간 즉시 소통이 가능한 채팅 애플리케이션을 구현했습니다.",
    tags: ["JavaScript", "Next.js", "Nest.js", "Socket", "JWT"],
    site: "http://localhost:3000/login",
    velog: "https://velog.io/@yourname/maelan-project",
    github: "https://github.com/jiheon0928/openChat",
  },
  {
    image: "/textures/project2.png",
    sitename: "PhotoGallery",
    explanation:
      "React + TypeScript + Tailwind CSS로 만든 사진 갤러리 앱. Masonry 레이아웃과 모달 뷰 기능 포함.",
    tags: ["DataSet", "SCSS", "GSAP", "JavaScript"],
    site: "https://photogallery.example.com",
    velog: "https://velog.io/@yourname/photogallery",
    github: "https://github.com/yourname/photogallery",
  },
  {
    image: "/textures/project3.png",
    sitename: "ChatSpace",
    explanation:
      "NestJS 소켓 기반 실시간 채팅 앱. JWT 인증, 채팅방 기능, 메시지 영속화 구현.",
    tags: ["DataSet", "SCSS", "GSAP", "JavaScript"],
    site: "https://chatspace.example.com",
    velog: "https://velog.io/@yourname/chatspace",
    github: "https://github.com/yourname/chatspace",
  },
];
