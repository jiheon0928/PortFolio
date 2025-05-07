export interface Config {
  initialX: number;
  y: number;
  src: string;
}

export interface ProjectCardProps {
  image: string; // 카드 이미지 경로
  sitename: string; // 카드 제목
  explanation: string; // 카드 설명
  tags?: string[]; // (선택) 기술 태그 목록
  site: string; // 배포된 사이트 URL
  velog: string; // Velog 블로그 URL
  github: string; // GitHub 레포지토리 URL
}

export interface ProjectLinksProps {
  links: ProjectCardProps[];
}
