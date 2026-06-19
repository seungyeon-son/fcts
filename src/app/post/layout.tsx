import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights — 디자인 리서치 & 인사이트',
  description:
    'FCTS의 디자인 프로세스·의사결정 과정을 공개하는 리서치/인사이트 글 모음. AI UX, 정보 구조 설계, 디자인 프로세스 OS 등.',
  alternates: { canonical: '/post' },
  openGraph: {
    title: 'Insights — FCTS 디자인 리서치 & 인사이트',
    description:
      'AI UX, 정보 구조 설계, 디자인 프로세스 등 실제 작업의 의사결정 과정을 공개합니다.',
    url: '/post',
  },
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return children
}
