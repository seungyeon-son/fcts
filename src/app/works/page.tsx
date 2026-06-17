'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { projects } from '@/data/projects'
import { Container, Section } from '@/styles/styled'

const PageHeading = styled.h1`
  text-align: center;
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 64px 0 56px;
  color: ${theme.colors.black};
`

/* 카테고리 블록: 좌 메타 + 우 이미지 2개 */
const CategoryBlock = styled.div`
  padding: 48px 0;
  border-top: 1px solid ${theme.colors.gray200};
  &:first-child { border-top: none; padding-top: 0; }
`

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  align-items: start;
  @media (max-width: ${theme.breakpoints.md}) { grid-template-columns: 1fr; }
`

const CategoryMeta = styled.div``

const CategoryTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: ${theme.colors.black};
  margin-bottom: 4px;
`

const CategorySub = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  color: ${theme.colors.black};
  margin-bottom: 16px;
`

const CategoryDesc = styled.div`
  font-size: 14px;
  color: ${theme.colors.gray500};
  line-height: 1.375;
  margin-bottom: 16px;
`

const CategoryTags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const CategoryTag = styled(Link)`
  font-size: 13px;
  color: ${theme.colors.gray500};
  text-decoration: underline;
  text-underline-offset: 2px;
  &:hover { color: ${theme.colors.black}; }
`

/* 이미지 그리드 */
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  @media (max-width: ${theme.breakpoints.sm}) { grid-template-columns: 1fr; }
`

const ProjectCard = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 4/3;
  &:hover .img { transform: scale(1.04); }
`

const CardImage = styled.div<{ $img?: string }>`
  width: 100%;
  height: 100%;
  background: ${theme.colors.gray200}
    ${({ $img }) => $img ? `url(${$img}) center/cover no-repeat` : ''};
  transition: transform 0.4s ease;
`

const CardLabel = styled.div`
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.black};
`

const CardArrow = styled.span`
  color: ${theme.colors.accent};
  font-size: 14px;
`

/* ── 데이터 ── */
const projectImages: Record<string, string> = {
  'global-credit-bank': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=75',
  'humanities-lecture': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=75',
  'b2b-design-system':  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=75',
  'mlops-b2b-dashboard':'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75',
}

const categoryMeta: Record<string, { sub: string; desc: string }> = {
  'B2B UX Service':       { sub: '복잡한 도메인을 단순하게', desc: '대시보드·디자인 시스템·서비스 설계까지, 복잡한 B2B 데이터를 명료한 구조로 푸는 프로젝트' },
  'B2C UX Service':       { sub: '끝까지 남는 경험', desc: '학습 지속성과 전환율을 끌어올리는, 사용자 동기 중심의 B2C 서비스 프로젝트' },
  'Web Service':          { sub: '브라우저에서 완결되는 흐름', desc: '랜딩부터 전환까지 한 페이지에서 끝나는 웹 서비스 프로젝트' },
  'UX Planning/Branding': { sub: '화면 이전의 설계', desc: '문제 정의와 브랜드 톤부터 잡는, 기획·브랜딩 중심 프로젝트' },
}

const categories = ['B2B UX Service', 'B2C UX Service', 'Web Service', 'UX Planning/Branding'] as const

export default function WorksPage() {
  return (
    <>
      <Section style={{ padding: 0 }}>
        <Container>
          <PageHeading>Works</PageHeading>

          {categories.map((cat) => {
            const catProjects = projects.filter((p) => p.category === cat)
            if (!catProjects.length) return null
            const meta = categoryMeta[cat]

            return (
              <CategoryBlock key={cat}>
                <CategoryRow>
                  <CategoryMeta>
                    <CategoryTitle>{cat}</CategoryTitle>
                    <CategorySub>{meta.sub}</CategorySub>
                    <CategoryDesc>{meta.desc}</CategoryDesc>
                    <CategoryTags>
                      {catProjects.map((p) => (
                        <CategoryTag key={p.slug} href={`/works/${p.slug}`}>
                          {p.subtitle}
                        </CategoryTag>
                      ))}
                    </CategoryTags>
                  </CategoryMeta>

                  <ImageGrid>
                    {catProjects.map((p) => (
                      <ProjectCard key={p.slug} href={`/works/${p.slug}`}>
                        <CardImage className="img" $img={projectImages[p.slug]} />
                        <CardLabel>
                          {p.subtitle}
                          <CardArrow>→</CardArrow>
                        </CardLabel>
                      </ProjectCard>
                    ))}
                  </ImageGrid>
                </CategoryRow>
              </CategoryBlock>
            )
          })}
        </Container>
      </Section>
    </>
  )
}
