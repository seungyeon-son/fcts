import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'FCTS — From Complex To Simple',
  description: 'Transforms Complexity Into Simplicity And Establishes Order In Business.',
  openGraph: {
    title: 'FCTS — From Complex To Simple',
    description: 'Transforms Complexity Into Simplicity And Establishes Order In Business.',
    url: 'https://fcts.co.kr',
    siteName: 'FCTS design studio',
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
    description: 'Transforms Complexity Into Simplicity And Establishes Order In Business.',
    images: ['/img/SEO_img.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
