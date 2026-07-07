import type { Metadata } from 'next'
import { getPost, posts } from '@/data/posts'
import { SITE_URL } from '@/lib/site'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return {
      title: 'Insight',
      alternates: { canonical: `/post/${slug}` },
    }
  }

  const ogImage = post.thumbnail ? `${SITE_URL}${post.thumbnail}` : undefined

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.tag, 'FCTS', 'UX 디자인', '디자인 인사이트'],
    alternates: { canonical: `/post/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/post/${post.slug}`,
      publishedTime: post.dateISO,
      ...(ogImage ? { images: [{ url: ogImage, alt: post.thumbnailAlt ?? post.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}

export default function PostDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
