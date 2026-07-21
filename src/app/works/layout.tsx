import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works - UX 디자인 프로젝트",
  description:
    "FCTS의 UX 디자인 프로젝트 케이스 - B2B MLOps 대시보드, 디자인 시스템, 글로벌 학점은행제 등 복잡한 서비스를 단순하게 재설계한 작업들.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "Works - FCTS UX 디자인 프로젝트",
    description: "B2B 대시보드·디자인 시스템·글로벌 서비스 등 복잡함을 단순하게 재설계한 프로젝트 케이스.",
    url: "/works",
  },
};

export default function WorksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
