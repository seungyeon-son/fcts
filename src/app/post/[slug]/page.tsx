'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import styled from 'styled-components'
import { use } from 'react'
import { theme } from '@/styles/theme'
import { Container } from '@/styles/styled'
import { getPost, researchPosts, type PostBlock } from '@/data/posts'

/* ── Hero ── */
const Hero = styled.div`
  padding: 64px 0 36px;
  border-bottom: 1px solid ${theme.colors.gray200};
`
const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${theme.colors.gray500};
  margin-bottom: 24px;
  a:hover { color: ${theme.colors.black}; }
`
const PostTag = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.accent};
  background: rgba(255, 50, 41, 0.08);
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 18px;
`
const PostTitle = styled.h1`
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: ${theme.colors.black};
  max-width: 760px;
  margin-bottom: 18px;
`
const PostExcerpt = styled.p`
  font-size: 16px;
  color: ${theme.colors.gray600};
  line-height: 1.8;
  max-width: 720px;
  margin-bottom: 22px;
`
const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${theme.colors.gray500};
`
const MetaDot = styled.span`color: ${theme.colors.gray300};`

/* ── Article body ── */
const Article = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 0 24px;
`
const Lead = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.85;
  color: ${theme.colors.gray700};
  margin-bottom: 12px;
`
const H2 = styled.h2`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.black};
  margin: 44px 0 16px;
`
const P = styled.p`
  font-size: 16px;
  line-height: 1.9;
  color: ${theme.colors.gray700};
  margin-bottom: 18px;
`
const Quote = styled.blockquote`
  border-left: 3px solid ${theme.colors.accent};
  padding: 6px 0 6px 20px;
  margin: 28px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: -0.01em;
  color: ${theme.colors.black};
`
const Ul = styled.ul`
  margin: 8px 0 22px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Li = styled.li`
  position: relative;
  padding-left: 22px;
  font-size: 16px;
  line-height: 1.8;
  color: ${theme.colors.gray700};
  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 13px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${theme.colors.accent};
  }
`
const Callout = styled.div`
  background: ${theme.colors.gray100};
  border-radius: 10px;
  padding: 24px 26px;
  margin: 28px 0;
`
const CalloutLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.accent};
  margin-bottom: 14px;
`
const CalloutLine = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: ${theme.colors.gray700};
  padding-left: 16px;
  position: relative;
  & + & { margin-top: 8px; }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${theme.colors.gray500};
  }
`

/* ── Related work ── */
const RelatedWork = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 12px 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  transition: border-color 0.2s, color 0.2s;
  &:hover { border-color: ${theme.colors.accent}; color: ${theme.colors.accent}; }
`

/* ── Footer nav / more posts ── */
const FootNav = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 40px 0 80px;
  border-top: 1px solid ${theme.colors.gray200};
`
const MoreTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${theme.colors.gray500};
  margin: 8px 0 18px;
`
const MoreCard = styled(Link)`
  display: block;
  padding: 18px 0;
  border-top: 1px solid ${theme.colors.gray200};
  &:hover .t { color: ${theme.colors.accent}; }
  .tag { font-size: 12px; color: ${theme.colors.accent}; font-weight: 600; }
  .t { font-size: 17px; font-weight: 700; color: ${theme.colors.black}; margin: 6px 0 4px; transition: color 0.2s; }
  .d { font-size: 12px; color: ${theme.colors.gray500}; }
`
const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 24px;
  font-size: 14px;
  color: ${theme.colors.gray500};
  &:hover { color: ${theme.colors.black}; }
`

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'lead':
      return <Lead>{block.text}</Lead>
    case 'heading':
      return <H2>{block.text}</H2>
    case 'paragraph':
      return <P>{block.text}</P>
    case 'quote':
      return <Quote>{block.text}</Quote>
    case 'list':
      return (
        <Ul>
          {block.items.map((it, i) => <Li key={i}>{it}</Li>)}
        </Ul>
      )
    case 'callout':
      return (
        <Callout>
          {block.label && <CalloutLabel>{block.label}</CalloutLabel>}
          {block.lines.map((l, i) => <CalloutLine key={i}>{l}</CalloutLine>)}
        </Callout>
      )
    default:
      return null
  }
}

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = getPost(slug)
  if (!post) return notFound()

  const morePosts = researchPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <Hero>
        <Container>
          <Breadcrumb>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/post">Post</Link>
          </Breadcrumb>
          <PostTag>{post.tag}</PostTag>
          <PostTitle>{post.title}</PostTitle>
          <PostExcerpt>{post.excerpt}</PostExcerpt>
          <PostMeta>
            <time dateTime={post.dateISO}>{post.date}</time>
            <MetaDot>•</MetaDot>
            <span>약 {post.readingMin}분</span>
          </PostMeta>
        </Container>
      </Hero>

      <Container>
        <Article>
          {post.body.map((block, i) => <Block key={i} block={block} />)}

          {post.relatedWork && (
            <RelatedWork href={`/works/${post.relatedWork.slug}`}>
              {post.relatedWork.label} →
            </RelatedWork>
          )}
        </Article>

        <FootNav>
          {morePosts.length > 0 && (
            <>
              <MoreTitle>다른 글</MoreTitle>
              {morePosts.map((p) => (
                <MoreCard key={p.slug} href={`/post/${p.slug}`}>
                  <span className="tag">{p.tag}</span>
                  <div className="t">{p.title}</div>
                  <div className="d">{p.date}</div>
                </MoreCard>
              ))}
            </>
          )}
          <BackLink href="/post">← 모든 글 보기</BackLink>
        </FootNav>
      </Container>
    </>
  )
}
