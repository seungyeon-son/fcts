// 도메인(배포)별 사이트 분기
// NEXT_PUBLIC_SITE_VARIANT=team  → Process 사이트 (팀 소개)
// 그 외(기본)                    → About 사이트 (개인 이력서)
export const SITE_VARIANT: "team" | "personal" = process.env.NEXT_PUBLIC_SITE_VARIANT === "team" ? "team" : "personal";

// 배포별 사이트 절대 URL (SEO canonical·OG·sitemap·robots 기준)
// 우선순위: NEXT_PUBLIC_SITE_URL(직접 지정) > 변형별 기본 vercel 주소
// ⚠️ 추후 커스텀 도메인(fcts.co.kr) 연결 시 Vercel 환경변수에
//    NEXT_PUBLIC_SITE_URL=https://fcts.co.kr 만 넣으면 전체가 따라 바뀜.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (SITE_VARIANT === "team" ? "https://studio-fcts.vercel.app" : "https://seungyeondesign.vercel.app")
).replace(/\/$/, "");

// 검색결과 사이트명 (og:site_name + WebSite 구조화 데이터에 사용)
export const SITE_NAME = SITE_VARIANT === "team" ? "Design Studio - FCTS" : "FCTS design studio";

// GNB 첫 번째 메뉴 분기
export const leadLink =
  SITE_VARIANT === "team" ? { href: "/process", label: "Process" } : { href: "/about", label: "About" };

// 변형별 로고 이미지 경로 (public/ 기준)
// ⚠️ 아래 파일은 추후 추가 예정 - 없으면 logo.svg로 폴백
export const LOGO_SRC = SITE_VARIANT === "team" ? "/img/logo-team.svg" : "/img/logo-personal.svg";
