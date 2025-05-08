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
    tags: ["JavaScript", "Next.js", "Nest.js", "Socket", "JWT", "mySQL"],
    site: "http://localhost:3000/login",
    velog: "https://velog.io/@yourname/maelan-project",
    github: "https://github.com/jiheon0928/openChat",
  },
  {
    image: "/textures/card/nanymousaa.png",
    sitename: "NONYMOUSAA",
    explanation:
      "Next.js 기반 모자 쇼핑몰 클론 프로젝트로, 카테고리별 페이지 이동 기능과 Firebase를 활용한 장바구니 시스템을 구현했습니다.",
    tags: ["JavaScript", "next.js", "firebase,"],
    site: "https://nonymousa-96tm.vercel.app/main",
    velog: "https://velog.io/@yourname/chatspace",
    github: "https://github.com/jiheon0928/NONYMOUSA",
  },
  {
    image: "/textures/card/hyendai.png",
    sitename: "현대자동차",
    explanation:
      "HTML, CSS, JavaScript로 현대자동차 공식 웹사이트를 모티브로 반응형 레이아웃과 동적 UI 요소를 구현하여 사용자 친화적인 경험을 제공했습니다.",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "http://127.0.0.1:5500/index.html",
    velog: "https://velog.io/@yourname/photogallery",
    github: "https://github.com/jiheon0928/HyundaiCarPage/tree/master",
  },
];
