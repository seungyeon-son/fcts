import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "FCTS를 운영하는 디자이너 소개 - B2B·B2C 복잡한 서비스를 단순한 UX로 재설계해 온 이력과 디자인 철학.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About - FCTS 디자이너 소개",
    description: "B2B·B2C 복잡한 서비스를 단순한 UX로 재설계해 온 이력과 디자인 철학.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
