// 도메인(배포)별 사이트 분기
// NEXT_PUBLIC_SITE_VARIANT=team  → Process 사이트 (팀 소개)
// 그 외(기본)                    → About 사이트 (개인 이력서)
export const SITE_VARIANT: "team" | "personal" =
  process.env.NEXT_PUBLIC_SITE_VARIANT === "team" ? "team" : "personal";

// GNB 첫 번째 메뉴 분기
export const leadLink =
  SITE_VARIANT === "team" ? { href: "/process", label: "Process" } : { href: "/about", label: "About" };

// 변형별 로고 이미지 경로 (public/ 기준)
// ⚠️ 아래 파일은 추후 추가 예정 — 없으면 logo.svg로 폴백
export const LOGO_SRC =
  SITE_VARIANT === "team" ? "/img/logo-team.svg" : "/img/logo-personal.svg";
