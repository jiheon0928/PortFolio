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
    tags: ["JavaScript", "Next.js", "Nest.js", "AWS", "mySQL"],
    site: "https://open-chat-sandy.vercel.app/login",
    velog: "https://velog.io/@wwlgjs77/open-chat",
    github: "https://github.com/jiheon0928/openChat",
  },
  {
    image: "/textures/card/whiteclinic.png",
    sitename: "WhiteClinic",
    explanation:
      "웹사이트 클론 프로젝트로, 화이트클리닉 공식 웹사이트를 모티브로 반응형 레이아웃과 동적 UI 요소를 구현하여 사용자 친화적인 경험을 제공했습니다.",
    tags: ["Next.Js", "Nest.Js", "mySQL", "AWS"],
    site: "https://final-white-clinic.vercel.app/",
    velog:
      "https://velog.io/@wwlgjs77/%EC%BC%80%EC%96%B4-%ED%94%BD%EC%97%85-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98",
    github: "https://github.com/jiheon0928/final_white_clinic",
  },
  {
    image: "/textures/card/hyendai.png",
    sitename: "현대자동차",
    explanation:
      "HTML, CSS, JavaScript로 현대자동차 공식 웹사이트를 모티브로 반응형 레이아웃과 동적 UI 요소를 구현하여 사용자 친화적인 경험을 제공했습니다.",
    tags: ["HTML", "CSS", "JavaScript"],
    site: "https://hyundai-car-page.vercel.app/",
    velog: "https://velog.io/@yourname/photogallery",
    github: "https://github.com/jiheon0928/HyundaiCarPage/tree/master",
  },
];
