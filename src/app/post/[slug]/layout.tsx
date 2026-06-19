import type { Metadata } from 'next'
import { getPost } from '@/data/posts'

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
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function PostDetailLayout({ children }: { children: React.ReactNode }) {
  return children
}
