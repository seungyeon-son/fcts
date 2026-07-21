"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Container } from "@/styles/styled";
import { projects } from "@/data/projects";
import { useInView } from "@/hooks/useInView";

/* ── Page Header ── */
const PageHead = styled.div`
  padding: 64px 0 56px;
  text-align: center;
`;
const PageTitle = styled.h1`
  font-size: clamp(36px, 4vw, 45px);
  font-weight: 700;
  letter-spacing: -0.8px;
  color: #343a40;
`;

/* ── Banner ── */
const Banner = styled.div`
  height: 180px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 28px;
`;
const BannerVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BannerText = styled.p`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  text-align: right;
  text-transform: capitalize;
  line-height: 1.4;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: clamp(15px, 3vw, 24px);
  }
`;

/* ── FCTS Value Cards ── */
const ValueCards = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 48px;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;
const ValueCard = styled.div`
  flex: 1;
  min-width: 220px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(223, 223, 223, 0.8);
  padding: 20px 24px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const VCardLetter = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.colors.black};
  text-align: center;
  width: 100%;
`;
const VCardName = styled.div`
  font-size: 15px;
  font-style: italic;
  color: ${theme.colors.black};
  text-align: center;
`;
const VCardDesc = styled.div`
  font-size: 14px;
  color: #4c4c4c;
  line-height: 1.44;
  text-align: center;
  letter-spacing: -0.28px;
  white-space: pre-line;
`;

/* ── Profile ── */
const NameRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;
const NameText = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #32322e;
  letter-spacing: -0.76px;
  line-height: 1;
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: clamp(20px, 3vw, 28px);
  }
`;
const RoleText = styled.span`
  font-size: 18px;
  color: #ff5229;
  font-weight: 400;
`;
const ProfileHeadline = styled.h2`
  font-size: clamp(22px, 3.2vw, 28px);
  font-weight: 800;
  line-height: 1.32;
  letter-spacing: -0.6px;
  color: #0f0f0e;
  margin-bottom: 48px;
`;
const ProfileMeta = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #5c5b56;
  letter-spacing: -0.2px;
  margin-bottom: 24px;
  b {
    color: #0f0f0e;
    font-weight: 700;
  }
`;
const ProfileDesc = styled.p`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.8;
  max-width: 648px;
  margin-bottom: 24px;
`;
const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Skill = styled.span`
  padding: 6px 14px;
  border: 1px solid #666;
  border-radius: 20px;
  font-size: 13px;
  color: #333;
  background: white;
`;

/* ── Value Cards (2×2) ── */
const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #0f0f0e;
  letter-spacing: -0.48px;
  margin-bottom: 8px;
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: clamp(20px, 3vw, 28px);
  }
`;
const SectionSub = styled.p`
  font-size: 14px;
  color: #5c5b56;
  margin-bottom: 32px;
`;
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
const ValCard = styled.div`
  background: white;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;
const ValIcon = styled.div<{ $bg: string; $light?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ $bg }) => $bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 12px;
`;
const ValTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #0f0f0e;
  margin-bottom: 8px;
  letter-spacing: -0.32px;
`;
const ValDesc = styled.div`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.6;
  margin-bottom: 12px;
`;
const ValPill = styled(Link)`
  display: inline-block;
  font-size: 14px;
  color: ${theme.colors.black};
  font-weight: 600;
  transition: opacity 0.15s;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
    opacity: 0.55;
  }
`;

/* ── Projects ── */
const ProjectRow = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 192px;
  gap: 24px;
  align-items: start;
  padding: 24px 0;
  border-top: 1px solid #e8e6e0;
  &:last-child {
    border-bottom: 1px solid #e8e6e0;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
const ProjName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #0f0f0e;
  margin-bottom: 4px;
  letter-spacing: -0.3px;
  &:hover {
    color: #ff5229;
  }
  transition: color 0.15s;
`;
const ProjCat = styled.div`
  font-size: 14px;
  color: #9a9890;
  margin-bottom: 8px;
`;
const ProjChipsRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
const ProjChip = styled.span`
  font-size: 13px;
  color: #5c5b56;
  background: #fafaf9;
  border: 1px solid #e8e6e0;
  border-radius: 100px;
  padding: 2px 10px;
  display: inline-block;
`;
const ProjDesc = styled.div`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.7;
`;
const ProjKPI = styled.div`
  min-width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border-radius: 4px;
  padding: 0 16px;
  text-align: center;
  flex-shrink: 0;
`;
const KPIValue = styled.div`
  font-size: clamp(26px, 2.2vw, 34px);
  font-weight: 800;
  color: ${theme.colors.black};
  letter-spacing: -0.04em;
  line-height: 1;
`;
const KPILabel = styled.div`
  font-size: 12px;
  color: ${theme.colors.gray500};
  margin-top: 5px;
  line-height: 1.4;
`;
const KPIGoalBadge = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: ${theme.colors.gray500};
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: 4px;
`;

/* ── Team Cards ── */
const TeamCards = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;
const TeamCard = styled.div`
  flex: 1;
  min-width: 220px;
  height: 213px;
  background: white;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;
const TeamEmoji = styled.div`
  font-size: 22px;
  margin-bottom: 12px;
`;
const TeamTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #0f0f0e;
  letter-spacing: -0.32px;
  margin-bottom: 8px;
`;
const TeamDesc = styled.div`
  font-size: 14px;
  color: #5c5b56;
  line-height: 20px;
`;

/* ── Closing ── */
const Closing = styled.section`
  padding: 96px 0;
  text-align: center;
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 64px 0;
  }
`;
const ClosingText = styled.p`
  font-size: clamp(22px, 2.8vw, 28px);
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: #0f0f0e;
  max-width: 720px;
  margin: 0 auto;
  b {
    color: #ff5229;
  }
`;

/* ── CTA ── */
const CtaBlock = styled.div`
  background: #0f0f0e;
  border-radius: 20px;
  padding: 48px;
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 36px 24px;
  }
`;
const CtaLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #ff5229;
  margin-bottom: 16px;
`;
const CtaTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  line-height: 1.4;
  letter-spacing: -0.52px;
  margin-bottom: 20px;
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: clamp(20px, 3vw, 28px);
  }
`;
const CtaBullets = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`;
const CtaBullet = styled.li`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  &::before {
    content: "· ";
  }
`;
const CtaContact = styled.a`
  font-size: 14px;
  font-weight: 700;
  color: white;
  text-decoration: underline;
  text-underline-position: under;
  display: inline-block;
  margin-right: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

/* ── Data ── */
const fctsValues = [
  { letter: "F", name: "(Function)", desc: "사용자의 문제를 해결하는\n실질적인 기능 정의" },
  { letter: "C", name: "(Concept)", desc: "논리적 근거를 바탕으로 세워진\n디자인 전략" },
  { letter: "T", name: "(Token)", desc: "디자인과 개발을 잇는 최소 단위의 약속 (Design Tokens)" },
  { letter: "S", name: "(System)", desc: "지속 가능하고 확장 가능한\n프로덕트의 질서" },
];

const skills = [
  "Figma",
  "Adobe Illustrator",
  "Framer",
  "HTML/CSS",
  "Git",
  "UX Research",
  "Design System",
  "Prototyping",
  "AutoCAD",
];

const values = [
  {
    icon: "🎯",
    bg: "#faece7",
    title: "비즈니스 맥락을 이해합니다",
    desc: "기능 명세서를 넘어 왜 이 기능이 필요한지, 어떤 지표를 움직여야 하는지 먼저 파악합니다.",
    pill: "→ UBION 사례 보기",
    href: "/works/global-credit-bank",
  },
  {
    icon: "📋",
    bg: "#ff5229",
    title: "리뷰에서 방어 가능한 디자인",
    desc: '모든 결정에는 근거가 있습니다. 리뷰에서 "왜 이렇게 했나요?"에 항상 답할 수 있습니다.',
    pill: "→ 프로세스 페이지 보기",
    href: "/design-process",
  },
  {
    icon: "🧩",
    bg: "#e1f5ee",
    title: "팀 생산성에 직접 기여합니다",
    desc: "디자인 시스템과 컴포넌트 정비로 팀 전체의 작업 속도를 높이는 방식으로 일합니다.",
    pill: "→ SDT DS 사례 보기",
    href: "/works/b2b-design-system",
  },
  {
    icon: "🔗",
    bg: "#faeeda",
    title: "핸드오프 손실을 0으로 만듭니다",
    desc: "구현까지 직접 다뤄본 감각으로, 디자인 의도가 개발 단계에서 손상되지 않게 제어합니다. 토큰·스펙으로 개발팀이 의도 그대로 구현하도록 간극을 메웁니다.",
    pill: "→ 핸드오프 가이드 보기",
    href: "/post/design-process-os",
  },
];

// About 대표 프로젝트 - projects.ts 단일 소스에서 파생 (카피 불일치 방지)
const FEATURED_SLUGS = ["b2b-design-system", "global-credit-bank", "mlops-b2b-dashboard", "humanities-lecture"];

const mainProjects = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p))
  .map((p) => {
    const resultMetric = p.metrics.find((m) => m.kind === "result") ?? p.metrics[0];
    return {
      name: p.subtitle,
      category: p.category,
      tags: p.tags.slice(0, 2),
      href: `/works/${p.slug}`,
      desc: p.cardDesc ?? "",
      kpiValue: resultMetric?.value ?? "",
      kpiLabel: resultMetric?.label ?? "",
      kpiKind: resultMetric?.kind ?? "result",
    };
  });

const teamCards = [
  {
    emoji: "🗣",
    title: "논리로 소통합니다",
    desc: '감각이 아닌 데이터와 구조로 설명합니다. 모든 결정에는 "왜"가 있습니다.',
  },
  {
    emoji: "📝",
    title: "문서를 남깁니다",
    desc: "결정 이유와 맥락을 기록해 팀원이 언제든 이어받을 수 있는 환경을 만듭니다.",
  },
  {
    emoji: "🔄",
    title: "불확실성에서 움직입니다",
    desc: "요구사항이 불명확해도 가설을 세우고 빠르게 검증하며 앞으로 나아갑니다.",
  },
  {
    emoji: "👩‍💻",
    title: "구현까지 고려합니다",
    desc: "HTML/CSS 퍼블리싱 경험으로 개발 제약을 이해하고 현실적인 설계를 합니다.",
  },
];

function AnimatedValCard({ v, index }: { v: (typeof values)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <ValCard
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s cubic-bezier(.23,1,.32,1) ${index * 70}ms, transform 0.55s cubic-bezier(.23,1,.32,1) ${index * 70}ms`,
      }}
    >
      <ValIcon $bg={v.bg}>{v.icon}</ValIcon>
      <ValTitle>{v.title}</ValTitle>
      <ValDesc>{v.desc}</ValDesc>
      <ValPill href={v.href}>{v.pill}</ValPill>
    </ValCard>
  );
}

function AnimatedTeamCard({ c, index }: { c: (typeof teamCards)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <TeamCard
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s cubic-bezier(.23,1,.32,1) ${index * 70}ms, transform 0.55s cubic-bezier(.23,1,.32,1) ${index * 70}ms`,
      }}
    >
      <TeamEmoji>{c.emoji}</TeamEmoji>
      <TeamTitle>{c.title}</TeamTitle>
      <TeamDesc>{c.desc}</TeamDesc>
    </TeamCard>
  );
}

function AnimatedProjectRow({ p, index }: { p: (typeof mainProjects)[number]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <ProjectRow
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s cubic-bezier(.23,1,.32,1) ${index * 80}ms, transform 0.55s cubic-bezier(.23,1,.32,1) ${index * 80}ms`,
      }}
    >
      <div>
        <Link href={p.href}>
          <ProjName>{p.name}</ProjName>
        </Link>
        <ProjCat>{p.category}</ProjCat>
        <ProjChipsRow>
          {p.tags.map((t) => (
            <ProjChip key={t}>{t}</ProjChip>
          ))}
        </ProjChipsRow>
      </div>
      <ProjDesc>{p.desc}</ProjDesc>
      <ProjKPI>
        <KPIValue>{p.kpiValue}</KPIValue>
        <KPILabel>{p.kpiLabel}</KPILabel>
        {p.kpiKind === "goal" && <KPIGoalBadge>목표치</KPIGoalBadge>}
      </ProjKPI>
    </ProjectRow>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHead>
        <Container>
          <PageTitle>About</PageTitle>
        </Container>
      </PageHead>

      {/* Banner + FCTS Value Cards */}
      <section style={{ paddingBottom: "80px" }}>
        <Container>
          <Banner>
            <BannerVideo autoPlay muted loop playsInline>
              <source src="/img/video_about.mp4" type="video/mp4" />
            </BannerVideo>
            <BannerText>
              Transforms Complexity Into Simplicity
              <br />
              And Establishes Order In Business.
            </BannerText>
          </Banner>
          <ValueCards>
            {fctsValues.map((v) => (
              <ValueCard key={v.letter}>
                <VCardLetter>{v.letter}</VCardLetter>
                <VCardName>{v.name}</VCardName>
                <VCardDesc>{v.desc}</VCardDesc>
              </ValueCard>
            ))}
          </ValueCards>
        </Container>
      </section>

      {/* Profile */}
      <section style={{ paddingBottom: "80px" }}>
        <Container>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: theme.colors.gray500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            B2B · Data Product Designer
          </div>
          <ProfileHeadline>
            화면을 만들기 전에,
            <br />
            구조를 먼저 설계합니다.
          </ProfileHeadline>
          <NameRow>
            <NameText>손승연</NameText>
            <RoleText>Product Designer</RoleText>
          </NameRow>
          <ProfileMeta>
            <b>5.5년</b> · B2B SaaS / 복잡한 데이터 시스템 / 글로벌 서비스
          </ProfileMeta>
          <ProfileDesc>
            산업용 IoT 대시보드부터 글로벌 에듀테크 서비스까지, 저는 늘 한 가지를 먼저 묻습니다. <br /> “이 사용자는
            지금 무엇을 판단해야 하는가.” 복잡한 정보를 사용자의 멘탈모델로 번역하고, 디자인 시스템과 운영 원칙으로 팀
            전체의 설계 효율을 높입니다. 화면을 완성하는 것만이 아니라 작동하는 시스템을 구축하는 것을 목표로 합니다.
          </ProfileDesc>
          <SkillsRow>
            {skills.map((s) => (
              <Skill key={s}>{s}</Skill>
            ))}
          </SkillsRow>
        </Container>
      </section>

      {/* Values 2×2 */}
      <section style={{ background: theme.colors.gray100, padding: "80px 0" }}>
        <Container>
          <SectionTitle>팀에 합류하면 이런 가치를 드립니다</SectionTitle>
          <SectionSub>매 프로젝트에서 비즈니스 목표와 사용자 경험을 함께 고민합니다</SectionSub>
          <ValuesGrid>
            {values.map((v, i) => (
              <AnimatedValCard key={i} v={v} index={i} />
            ))}
          </ValuesGrid>
        </Container>
      </section>

      {/* Projects */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle style={{ marginBottom: "32px" }}>주요 프로젝트</SectionTitle>
          {mainProjects.map((p, i) => (
            <AnimatedProjectRow key={i} p={p} index={i} />
          ))}
        </Container>
      </section>

      {/* Team */}
      <section style={{ background: theme.colors.gray100, padding: "80px 0" }}>
        <Container>
          <SectionTitle style={{ marginBottom: "32px" }}>저는 이런 팀원입니다</SectionTitle>
          <TeamCards>
            {teamCards.map((c, i) => (
              <AnimatedTeamCard key={i} c={c} index={i} />
            ))}
          </TeamCards>
        </Container>
      </section>

      {/* Closing */}
      <Closing>
        <Container>
          <ClosingText>
            좋은 UX는 사용자가 길을 잃지 않게 합니다.
            <br />
            저는 그 <b>길</b>을 설계합니다.
          </ClosingText>
        </Container>
      </Closing>

      {/* CTA */}
      <section style={{ padding: "0 0 80px" }}>
        <Container>
          <CtaBlock>
            <CtaLabel>💬 함께하고 싶은 팀을 찾고 있습니다</CtaLabel>
            <CtaTitle>
              디자인이 결정의 근거가 되고
              <br />
              지표로 검증되는 팀을 찾고 있습니다.
            </CtaTitle>
            <CtaBullets>
              {[
                '디자인 결정에 "왜"를 함께 고민하는 PM, 개발팀이 있는 환경',
                "B2B SaaS, 에듀테크, 복잡한 도메인을 다루는 프로젝트",
                "디자인 시스템을 함께 만들고 운영하여 성장할 수 있는 곳",
                "데이터와 지표를 기반으로 디자인을 개선하는 문화",
              ].map((item, i) => (
                <CtaBullet key={i}>{item}</CtaBullet>
              ))}
            </CtaBullets>
            <CtaContact href="mailto:au1gust8@gmail.com">au1gust8@gmail.com</CtaContact>
            <CtaContact href="tel:010-4523-0029">010-4523-0029</CtaContact>
          </CtaBlock>
        </Container>
      </section>
    </>
  );
}
