import type { Metadata } from "next";
import { notFound } from "next/navigation";

// PDF 포트폴리오(1920×1080) 제작용 내부 페이지.
// 개발 서버와 Vercel 프리뷰 배포에서만 열리고, 실제 사이트(production)에서는 404로 막는다.
export const metadata: Metadata = {
  title: "Portfolio Deck",
  robots: { index: false, follow: false },
};

export default function PortfolioDeckLayout({ children }: { children: React.ReactNode }) {
  if (process.env.VERCEL_ENV === "production") notFound();
  return children;
}
