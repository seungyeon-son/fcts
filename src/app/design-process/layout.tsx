import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Process",
  description:
    "FCTS의 디자인 프로세스를 단계별로 소개합니다 - 문제 정의부터 의사결정, 검증까지 복잡함을 단순함으로 바꾸는 방법.",
  alternates: { canonical: "/design-process" },
  openGraph: {
    title: "Design Process - FCTS",
    description: "문제 정의부터 검증까지, 복잡함을 단순함으로 바꾸는 FCTS의 디자인 프로세스.",
    url: "/design-process",
  },
};

export default function DesignProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
