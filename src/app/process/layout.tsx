import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process — 디자인 작업 방식',
  description:
    'FCTS의 디자인 프로세스 — 복잡한 비즈니스 문제를 단순하고 명료한 UX로 바꾸는 단계별 작업 방식.',
  alternates: { canonical: '/process' },
  openGraph: {
    title: 'Process — FCTS 디자인 작업 방식',
    description: '복잡함을 단순함으로 바꾸는 FCTS의 단계별 디자인 프로세스.',
    url: '/process',
  },
}

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children
}
