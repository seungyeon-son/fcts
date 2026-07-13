"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { projects } from "@/data/projects";
import { Container, Section } from "@/styles/styled";
import ProjectCarousel from "@/components/works/ProjectCarousel";
import { useInView } from "@/hooks/useInView";

const PageHeading = styled.h1`
  text-align: center;
  font-size: clamp(36px, 4vw, 45px);
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 64px 0 104px;
  color: ${theme.colors.black};
`;

/* 카테고리 블록: 좌 메타 + 우 캐러셀 */
const CategoryBlock = styled.div`
  padding: 0 0 200px;
  &:first-child {
    border-top: none;
    padding-top: 0;
  }
`;

const CategoryRow = styled.div`
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

const CategoryMeta = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #343a40;
  letter-spacing: -0.4px;
  line-height: 1.4;
`;

const CategorySub = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #aaa;
  letter-spacing: -0.4px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CategoryDesc = styled.div`
  font-size: 15px;
  color: #495057;
  line-height: 1.6;
  letter-spacing: -0.4px;
  white-space: pre-line;
`;

const CategoryTags = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 68px;
  gap: 4px;
  justify-content: flex-end;
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const CategoryTag = styled(Link)`
  font-size: 15px;
  color: #6c6e70;
  text-decoration: underline;
  text-underline-position: under;
  &:hover {
    color: ${theme.colors.black};
  }
`;

/* ── 데이터 ── */
const categoryMeta: Record<string, { sub: string; desc: string }> = {
  "B2B UX Service": {
    sub: "복잡한 도메인을 단순하게",
    desc: "대시보드·디자인 시스템·서비스 설계까지,\n복잡한 B2B 데이터를 명료한 구조로 푸는 프로젝트",
  },
  "B2C UX Service": {
    sub: "끝까지 남는 경험",
    desc: "학습 지속성과 전환율을 끌어올리는,\n사용자 동기 중심의 B2C 서비스 프로젝트",
  },
  "Web Service": {
    sub: "브라우저에서 완결되는 흐름",
    desc: "랜딩부터 전환까지.\n웹 서비스 프로젝트",
  },
  "UX Planning/Branding": {
    sub: "화면 이전의 설계",
    desc: "문제 정의와 브랜드 톤부터 잡는,\n기획·브랜딩 중심 프로젝트",
  },
};

const categories = ["B2B UX Service", "B2C UX Service", "Web Service", "UX Planning/Branding"] as const;

function AnimatedCategoryBlock({
  cat,
  catProjects,
  meta,
  index,
}: {
  cat: string;
  catProjects: typeof projects;
  meta: { sub: string; desc: string };
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.05 });
  return (
    <CategoryBlock
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(.23,1,.32,1) ${index * 80}ms, transform 0.65s cubic-bezier(.23,1,.32,1) ${index * 80}ms`,
      }}
    >
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
        <ProjectCarousel items={catProjects} />
      </CategoryRow>
    </CategoryBlock>
  );
}

export default function WorksPage() {
  return (
    <>
      <Section style={{ padding: 0 }}>
        <Container style={{ paddingBottom: 100 }}>
          <PageHeading>Works</PageHeading>

          {categories.map((cat, catIndex) => {
            const catProjects = projects.filter((p) => p.category === cat);
            if (!catProjects.length) return null;
            const meta = categoryMeta[cat];
            return (
              <AnimatedCategoryBlock key={cat} cat={cat} catProjects={catProjects} meta={meta} index={catIndex} />
            );
          })}
        </Container>
      </Section>
    </>
  );
}
