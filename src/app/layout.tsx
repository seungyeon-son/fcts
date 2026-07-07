import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_URL, SITE_NAME } from '@/lib/site'

const SITE_DESC =
  'B2B·B2C 복잡한 서비스를 단순하고 명료한 UX로 재설계하는 디자인 스튜디오 FCTS. 디자인 프로세스와 의사결정 과정을 공개합니다.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FCTS — From Complex To Simple | UX 디자인 스튜디오',
    template: '%s | FCTS 디자인 스튜디오',
  },
  description: SITE_DESC,
  keywords: [
    'FCTS',
    'UX 디자인',
    'UX 디자인 스튜디오',
    'B2B UX',
    'SaaS UX',
    '서비스 디자인',
    '디자인 프로세스',
    '디자인 시스템',
    'AI UX',
    '제품 기획',
    'UX 포트폴리오',
  ],
  authors: [{ name: 'FCTS design studio' }],
  creator: 'FCTS design studio',
  publisher: 'FCTS design studio',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  applicationName: SITE_NAME,
  openGraph: {
    title: 'FCTS — From Complex To Simple',
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    images: [
      {
        url: '/img/SEO_img.png',
        width: 1200,
        height: 630,
        alt: 'FCTS design studio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCTS — From Complex To Simple',
    description: SITE_DESC,
    images: ['/img/SEO_img.png'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: ['FCTS', 'FCTS design studio', 'From Complex To Simple'],
  url: SITE_URL,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
