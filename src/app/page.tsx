"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { caseStudies, projects } from "@/data/projects";
import { researchPosts } from "@/data/posts";
import { Container } from "@/styles/styled";
import ProjectCarousel from "@/components/works/ProjectCarousel";
import { useInView } from "@/hooks/useInView";

/* ════════════════════════════════
   HERO
════════════════════════════════ */
const HeroSection = styled.section`
  position: relative;
  height: 720px;
  overflow: hidden;
  background: #aaaaaa;
  @media (max-width: ${theme.breakpoints.md}) {
    height: 520px;
  }
`;

const HeroBg = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(40%);
  opacity: 0.85;
`;

const HeroInner = styled.div`
  position: relative;
  height: 100%;
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding: 220px 24px 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 120px 24px 60px;
  }
`;

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 45px;
  font-weight: 700;
  line-height: 1.24;
  letter-spacing: -0.5px;
  color: ${theme.colors.white};
  max-width: 560px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(32px, 5vw, 45px);
  }
`;

const HeroSub = styled.p`
  font-size: 18px;
  color: rgba(206, 206, 206, 0.8);
  line-height: 1.4;
  font-weight: 400;
  max-width: 480px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 15px;
  }
`;

const HeroFCTS = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const HeroFCTSItem = styled.div<{
  $pt?: number;
  $pb?: number;
  $end?: boolean;
  $lit?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-top: ${({ $pt }) => $pt ?? 0}px;
  padding-bottom: ${({ $pb }) => $pb ?? 0}px;
  justify-content: ${({ $end }) => ($end ? "flex-end" : "flex-start")};

  ${({ $lit }) =>
    $lit &&
    css`
      .lj-letter {
        color: #ffffff;
        text-shadow:
          0 0 6px rgba(150, 210, 255, 0.95),
          0 0 16px rgba(90, 170, 255, 0.85),
          0 0 34px rgba(60, 150, 255, 0.6);
      }
      .lj-name {
        color: #ffffff;
        text-shadow: 0 0 10px rgba(120, 190, 255, 0.7);
      }
    `}
`;

const HeroFCTSLetter = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.55);
  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
`;

const HeroFCTSName = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition:
    color 0.25s ease,
    text-shadow 0.25s ease;
`;

/* ════════════════════════════════
   VALUE CARDS  (F · C · T · S)
════════════════════════════════ */
const ValueSection = styled.section`
  padding: 160px 0;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 80px 0;
  }
`;

const ValueHeading = styled.h2`
  text-align: center;
  font-size: clamp(24px, 3.5vw, 45px);
  font-weight: 800;
  letter-spacing: -0.5px;
  line-height: 1.18;
  margin-bottom: 56px;
  color: ${theme.colors.black};
  text-transform: capitalize;
`;

const ValueCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-wrap: wrap;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
    gap: 16px;
  }
`;

const ValueCard = styled.div`
  flex: 1;
  min-width: 240px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(223, 223, 223, 0.8);
  padding: 20px 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ValueCardLetter = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.black};
  text-align: left;
  width: 100%;
`;

const ValueCardName = styled.div`
  font-size: 15px;
  font-style: italic;
  color: ${theme.colors.black};
  text-align: center;
  white-space: nowrap;
`;

const ValueCardDesc = styled.div`
  font-size: 14px;
  color: #4c4c4c;
  line-height: 1.44;
  text-align: center;
  letter-spacing: -0.28px;
`;

/* ════════════════════════════════
   WORKS
════════════════════════════════ */
const WorksSection = styled.section`
  padding: 0 0 160px;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 0 120px;
  }
`;

const SectionHeading = styled.h2`
  text-align: center;
  font-size: clamp(28px, 3.5vw, 45px);
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #343a40;
  margin-bottom: 80px;
  text-transform: capitalize;
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 40px;
  }
`;

const WorksInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WorksRow = styled.div`
  display: grid;
  grid-template-columns: 364px 1fr;
  gap: 36px;
  align-items: start;
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 180px 1fr;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 16px;
  }
`;

const WorksMeta = styled.div`
  position: relative;
  flex-shrink: 0;
  align-self: stretch;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const WorksMetaTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #343a40;
  letter-spacing: -0.4px;
  line-height: 1.4;
`;

const WorksMetaSub = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #aaa;
  letter-spacing: -0.4px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const WorksMetaDesc = styled.div`
  font-size: 15px;
  color: #495057;
  line-height: 1.6;
  letter-spacing: -0.4px;
`;

const WorksMetaTags = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e1dac0;
  padding-top: 12px;
  margin-top: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: ${theme.breakpoints.md}) {
    position: static;
  }
`;

const WorksTag = styled(Link)`
  font-size: 15px;
  color: #6c6e70;
  letter-spacing: -0.4px;
  line-height: 2;
  text-decoration: underline;
  text-underline-position: under;
  &:hover {
    color: ${theme.colors.black};
  }
`;

const WorksBottom = styled.div`
  width: 100%;
  display: none;
  @media (max-width: ${theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
    .mo {
      display: block;
      margin-top: 0 !important;
    }
  }
`;

const ViewMoreBtn = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  background: rgba(211, 211, 211, 0.2);
  border-radius: 100px;
  padding: 7px 60px 8px 16px;
  font-size: 16px;
  color: #212529;
  letter-spacing: -0.4px;
  transition: background 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  white-space: nowrap;
  width: fit-content;
  height: 44px;
  &:hover {
    background: rgba(211, 211, 211, 0.4);
  }
  &:hover span {
    color: ${theme.colors.accent};
    transform: translateX(3px);
  }
`;

const ViewMoreCircle = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 44px;
  height: 44px;
  border: 1px solid ${theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdfdfd;
  border-radius: 100px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.08);
  font-size: 14px;
  color: #212529;
  transition:
    transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    color 0.15s,
    background 0.15s;
`;

/* ════════════════════════════════
   CASE STUDY
════════════════════════════════ */
const CaseStudySection = styled.section`
  padding: 0 0 160px;
  background: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 0 80px;
  }
`;

const CaseInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 80px;
`;

const CaseSeparator = styled.div`
  height: 1px;
  background: #e1dac0;
  width: 100%;
`;

const CaseRow = styled.div`
  display: grid;
  grid-template-columns: 364px 1fr;
  gap: 36px;
  align-items: start;
  .mo {
    display: none;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 180px 1fr;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 16px;
    .mo {
      display: block;
    }
  }
`;

const CaseMeta = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const CaseMetaKo = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #343a40;
  letter-spacing: -0.4px;
  line-height: 1.4;
  margin-bottom: 12px;
`;

const CaseMetaEn = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #495057;
  letter-spacing: -0.4px;
  line-height: 1.7;
  margin-top: -12px;
`;

const ArticleList = styled.div`
  display: flex;
  gap: 36px;
  flex: 1;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 4px;
  padding: 30px 24px 24px;
  min-height: 240px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 2px 15px -2px rgba(0, 0, 0, 0.1);
`;

const ArticleTag = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #343a40;
  background: #f6f6ee;
  padding: 8px 14px;
  border-radius: 100px;
  letter-spacing: -0.4px;
  width: fit-content;
`;

const ArticleTitle = styled.div`
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 600;
  color: #212529;
  line-height: 1.45;
  letter-spacing: -0.4px;
`;

const ArticleDivider = styled.div`
  position: relative;
  height: 1px;
  background: #e1dac0;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${theme.colors.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  ${ArticleCard}:hover &::after {
    transform: scaleX(1);
  }
`;

const ArticleDate = styled.div`
  font-size: 14px;
  color: #505357;
  letter-spacing: -0.4px;
`;

/* ════════════════════════════════
   STATIC DATA
════════════════════════════════ */
const fctsValues = [
  { letter: "F", name: "(Function)", desc: "사용자의 문제를 해결하는\n실질적인 기능 정의" },
  { letter: "C", name: "(Concept)", desc: "논리적 근거를 바탕으로 세워진\n디자인 전략" },
  { letter: "T", name: "(Token)", desc: "디자인과 개발을 잇는 최소 단위의 약속 (Design Tokens)" },
  { letter: "S", name: "(System)", desc: "지속 가능하고 확장 가능한\n프로덕트의 질서" },
];

// 데이터 배열 순서 = 최신순 (최신 프로젝트가 앞)
const worksProjects = projects.map((p) => ({
  slug: p.slug,
  name: p.subtitle,
  desc: p.cardDesc ?? "",
  img: p.coverImage ?? "",
}));

// Hero 영상에서 스위치가 켜지는 구간(초) - 영상 보며 미세조정
const LIGHT_WINDOWS = [{ start: 1.8, end: 4.2 }];

/* ════════════════════════════════
   PAGE
════════════════════════════════ */
function AnimatedValueCard({ v, index }: { v: (typeof fctsValues)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <ValueCard
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(.23,1,.32,1) ${index * 80}ms, transform 0.6s cubic-bezier(.23,1,.32,1) ${index * 80}ms`,
      }}
    >
      <ValueCardLetter>{v.letter}</ValueCardLetter>
      <ValueCardName>{v.name}</ValueCardName>
      <ValueCardDesc>{v.desc}</ValueCardDesc>
    </ValueCard>
  );
}

function AnimatedArticleCard({ post, index }: { post: (typeof researchPosts)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      style={{
        flex: 1,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(.23,1,.32,1) ${index * 80}ms, transform 0.6s cubic-bezier(.23,1,.32,1) ${index * 80}ms`,
      }}
    >
      <ArticleCard as={Link} href={`/post/${post.slug}`}>
        <ArticleTag>{post.tag}</ArticleTag>
        <ArticleTitle>{post.title}</ArticleTitle>
        <ArticleDivider />
        <ArticleDate>{post.date}</ArticleDate>
      </ArticleCard>
    </div>
  );
}

export default function Home() {
  // Hero 영상 스위치 ON 구간에 맞춰 Concept 글로우
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [conceptLit, setConceptLit] = useState(false);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    let raf = 0;
    let last = false;
    const loop = () => {
      const t = v.currentTime;
      const lit = LIGHT_WINDOWS.some((w) => t >= w.start && t <= w.end);
      if (lit !== last) {
        last = lit;
        setConceptLit(lit);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Hero */}
      <HeroSection>
        <HeroBg ref={heroVideoRef} autoPlay muted loop playsInline>
          <source src="/img/video_main.mp4" type="video/mp4" />
        </HeroBg>
        <HeroInner>
          <HeroTextBlock>
            <HeroTitle>
              From Complex to Simple,
              <br />
              Building Visual Order.
            </HeroTitle>
            <HeroSub>
              Turning tangled problems into clear decisions
              <br />
              for users and business alike.
            </HeroSub>
          </HeroTextBlock>

          <HeroFCTS>
            <HeroFCTSItem>
              <HeroFCTSLetter>F</HeroFCTSLetter>
              <HeroFCTSName>Function</HeroFCTSName>
            </HeroFCTSItem>
            <HeroFCTSItem $pt={54} $lit={conceptLit}>
              <HeroFCTSLetter className="lj-letter">C</HeroFCTSLetter>
              <HeroFCTSName className="lj-name">Concept</HeroFCTSName>
            </HeroFCTSItem>
            <HeroFCTSItem $pt={27}>
              <HeroFCTSLetter>T</HeroFCTSLetter>
              <HeroFCTSName>Token</HeroFCTSName>
            </HeroFCTSItem>
            <HeroFCTSItem $end>
              <HeroFCTSLetter>S</HeroFCTSLetter>
              <HeroFCTSName>System</HeroFCTSName>
            </HeroFCTSItem>
          </HeroFCTS>
        </HeroInner>
      </HeroSection>

      {/* F C T S Value Cards */}
      <ValueSection>
        <Container>
          <ValueHeading>
            Transforms Complexity Into Simplicity
            <br />
            And Establishes Order In Business.
          </ValueHeading>
          <ValueCards>
            {fctsValues.map((v, i) => (
              <AnimatedValueCard key={v.letter} v={v} index={i} />
            ))}
          </ValueCards>
        </Container>
      </ValueSection>

      {/* Works */}
      <WorksSection>
        <Container>
          <SectionHeading>Works</SectionHeading>
          <WorksInner>
            <WorksRow>
              <WorksMeta>
                <WorksMetaTitle>복잡함을 구조로</WorksMetaTitle>
                <WorksMetaSub>From Complex To Simple</WorksMetaSub>
                <WorksMetaDesc>
                  B2B·B2C 서비스부터 디자인 시스템까지,
                  <br /> 문제를 구조로 푼 프로젝트
                </WorksMetaDesc>
                {/* <WorksMetaTags>
                  {worksProjects.map((p) => (
                    <WorksTag key={p.slug} href={`/works/${p.slug}`}>
                      {p.name}
                    </WorksTag>
                  ))}
                </WorksMetaTags> */}
                <ViewMoreBtn href="/works" style={{ marginTop: 24 }}>
                  View More
                  <ViewMoreCircle>→</ViewMoreCircle>
                </ViewMoreBtn>
              </WorksMeta>

              <ProjectCarousel items={projects} />
            </WorksRow>

            <WorksBottom>
              <ViewMoreBtn href="/works" className="mo" style={{ marginTop: 24 }}>
                View More
                <ViewMoreCircle>→</ViewMoreCircle>
              </ViewMoreBtn>
            </WorksBottom>
          </WorksInner>
        </Container>
      </WorksSection>

      {/* Case Study */}
      <CaseStudySection>
        <Container>
          <SectionHeading>Case Study</SectionHeading>
          <CaseInner>
            <CaseRow>
              <CaseMeta>
                <div>
                  <CaseMetaKo>노트</CaseMetaKo>
                  <CaseMetaEn>Research and Insight</CaseMetaEn>
                </div>
                <ViewMoreBtn href="/post">
                  View More
                  <ViewMoreCircle>→</ViewMoreCircle>
                </ViewMoreBtn>
              </CaseMeta>
              <ArticleList>
                {researchPosts.slice(0, 2).map((post, i) => (
                  <AnimatedArticleCard key={post.slug} post={post} index={i} />
                ))}
              </ArticleList>
              <ViewMoreBtn href="/post" className="mo">
                View More
                <ViewMoreCircle>→</ViewMoreCircle>
              </ViewMoreBtn>
            </CaseRow>

            {/* <CaseSeparator /> */}

            {/* <CaseRow>
              <CaseMeta>
                <div>
                  <CaseMetaKo>소식</CaseMetaKo>
                  <CaseMetaEn>Activity</CaseMetaEn>
                </div>
                <ViewMoreBtn href="/process">
                  View More
                  <ViewMoreCircle>→</ViewMoreCircle>
                </ViewMoreBtn>
              </CaseMeta>
              <ArticleList>
                {caseStudies.news[0].items.slice(0, 2).map((item, i) => (
                  <ArticleCard key={i}>
                    <ArticleTag>tag</ArticleTag>
                    <ArticleTitle>{item.title}</ArticleTitle>
                    <ArticleDivider />
                    <ArticleDate>{item.date}</ArticleDate>
                  </ArticleCard>
                ))}
              </ArticleList>
            </CaseRow> */}
          </CaseInner>
        </Container>
      </CaseStudySection>
    </>
  );
}
