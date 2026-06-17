"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Container } from "@/styles/styled";

/* ── Page Header ── */
const PageHead = styled.div`
  padding: 64px 0 40px;
  text-align: center;
`;
const PageTitle = styled.h1`
  font-size: 45px;
  font-weight: 700;
  letter-spacing: -0.8px;
  color: #343a40;
  margin-bottom: 16px;
`;
const PageSub = styled.p`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.7;
  margin-bottom: 24px;
`;
const ChipRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;
const Chip = styled.span`
  padding: 5px 14px;
  background: #fafaf9;
  border: 1px solid #f2f1ec;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #727272;
`;

/* ── Section headings ── */
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #0f0f0e;
  letter-spacing: -0.48px;
  margin-bottom: 8px;
`;
const SectionSub = styled.p`
  font-size: 14px;
  color: #5c5b56;
  margin-bottom: 32px;
`;

/* ── DIFF Cards (2×2) ── */
const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
const DiffCard = styled.div`
  background: white;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;
const DiffLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #ff5229;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;
const DiffTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #0f0f0e;
  line-height: 1.4;
  letter-spacing: -0.4px;
  margin-bottom: 10px;
`;
const DiffDesc = styled.div`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.6;
  margin-bottom: 16px;
`;
const DiffChipsRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;
const DiffChip = styled.span`
  background: #fafaf9;
  border: 1px solid #f2f1ec;
  border-radius: 99px;
  height: 26px;
  padding: 0 12px;
  font-size: 13px;
  color: #727272;
  display: inline-flex;
  align-items: center;
`;

/* ── 6 Steps ── */
const StepsWrap = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 40px;
  }
`;
const StepsLeft = styled.div`
  width: 480px;
  flex-shrink: 0;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;
const StepsLeftTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #0f0f0e;
  letter-spacing: -0.48px;
  margin-bottom: 12px;
`;
const StepsLeftDesc = styled.p`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.7;
  margin-bottom: 24px;
`;
const StepsVideo = styled.video`
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 4px;
  object-fit: cover;
  object-position: left;
  display: block;
`;
const StepsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const StepItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;
const StepNum = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #ff5229;
  width: 20px;
  flex-shrink: 0;
  padding-top: 2px;
`;
const StepContent = styled.div``;
const StepName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #0f0f0e;
  letter-spacing: -0.36px;
  margin-bottom: 4px;
`;
const StepDesc = styled.div`
  font-size: 14px;
  color: #5f5f5f;
  line-height: 1.6;
`;

/* ── Work Process Table ── */
const Table = styled.div`
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;
const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 172px 1fr 1.5fr;
  background: #f8f8f8;
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;
const TableHeaderCell = styled.div`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #9a9890;
`;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 172px 1fr 1.5fr;
  border-top: 1px solid #e8e6e0;
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
const TableCell = styled.div`
  padding: 18px 24px;
  font-size: 14px;
  color: #1a1a18;
  line-height: 1.6;
  align-items: center;
  display: flex;
`;
const StepBadge = styled.span`
  display: inline-block;
  background: rgba(255, 82, 41, 0.08);
  color: #ff5229;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 100px;
  margin-right: 4px;
`;
const StepCellName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a18;
`;
const GenericCell = styled(TableCell)`
  color: #726f6f;
`;
const PillLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 100px;
  padding: 4px 12px;
  font-size: 14px;
  color: #1a1a18;
  font-weight: 600;
  margin-left: 8px;
  border: 1px solid transparent;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border: 1px solid #efefef;
  }
`;

/* ── Project Cards ── */
const ProjectCards = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;
const ProjectCard = styled(Link)`
  flex: 1;
  min-width: 220px;
  background: white;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  transition: box-shadow 0.2s;
`;
const ProjCatLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #ff5229;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;
const ProjName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #0f0f0e;
  letter-spacing: -0.4px;
  line-height: 1.3;
  margin-bottom: 8px;
`;
const ProjDesc = styled.div`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.6;
  flex: 1;
`;
const ProjArrow = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ff5229;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  align-self: flex-end;
  margin-top: 16px;
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
  letter-spacing: -0.56px;
  margin-bottom: 16px;
  white-space: pre-line;
`;
const CtaDesc = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
`;

/* ── Data ── */
const diffCards = [
  {
    label: "DIFF 01 · KPI-FIRST",
    title: "목표 지표를\n먼저 정의합니다",
    desc: "기획서를 받으면 화면보다 KPI를 먼저 찾습니다. 어떤 숫자를 움직여야 하는지 정의된 후 설계를 시작합니다.",
    chips: ["UBION 3-Zone", "grecture 65%"],
  },
  {
    label: "DIFF 02 · RATIONALE",
    title: "모든 결정엔\n근거가 있습니다",
    desc: '직관이 아닌 사용자 데이터와 비즈니스 맥락으로 결정합니다. 리뷰에서 "왜"에 항상 답할 수 있습니다.',
    chips: ["디자인 근거 문서", "Figma 주석"],
  },
  {
    label: "DIFF 03 · SYSTEM BUILDER",
    title: "혼자서도\n시스템이 됩니다",
    desc: "컴포넌트, 토큰, 운영 원칙까지 포함한 디자인 시스템을 설계합니다. 화면이 아닌 구조를 납품합니다.",
    chips: ["SDT Design System", "Figma Variables"],
  },
  {
    label: "DIFF 04 · DEV-AWARE",
    title: "퍼블 단계까지\n책임집니다",
    desc: "HTML/CSS 구현 경험으로 개발 제약을 이해합니다. 핸드오프 후에도 QA와 피드백을 직접 처리합니다.",
    chips: ["핸드오프 스펙", "QA 체크리스트"],
  },
];

const processSteps = [
  { num: "01", name: "Overview", desc: "목표와 맥락을 정의하고 프로젝트 스코프를 확인합니다." },
  {
    num: "02",
    name: "Research & Strategy",
    desc: "사용자 인터뷰, 경쟁사 분석, 데이터 분석을 통해 전략 방향을 수립합니다.",
  },
  { num: "03", name: "Concept", desc: "정보 구조 설계와 와이어프레임으로 핵심 경험을 구체화합니다." },
  { num: "04", name: "Design System", desc: "컴포넌트와 토큰을 정의해 일관성 있는 시각 언어를 만듭니다." },
  { num: "05", name: "Deliverables", desc: "프로토타입, 스펙 문서, 핸드오프 가이드를 완성합니다." },
  { num: "06", name: "Guide & QA", desc: "개발팀과 협력해 구현 품질을 검증하고 최종 QA를 진행합니다." },
];

const tableRows = [
  {
    badge: "STEP 01",
    name: "기획서 분석",
    generic: "요청서를 그대로 시작합니다",
    fcts: "KPI와 비즈니스 목표를 먼저 정의합니다",
    href: "/works/global-credit-bank",
    linkText: "→ UBION 사례",
  },
  {
    badge: "STEP 02",
    name: "디자인 기획",
    generic: "레퍼런스를 먼저 찾습니다",
    fcts: "문제 정의와 사용자 목표를 먼저 구조화합니다",
    href: "/works/humanities-lecture",
    linkText: "→ grecture 사례",
  },
  {
    badge: "STEP 03",
    name: "디자인 근거",
    generic: "직관으로 결정합니다",
    fcts: "모든 결정에 이유를 문서화합니다",
    href: "/research",
    linkText: "→ 근거 문서 예시",
  },
  {
    badge: "STEP 04",
    name: "컨셉 도출",
    generic: "트렌드 기반으로 제안합니다",
    fcts: "비즈니스 맥락과 사용자 목표 기반으로 제안합니다",
    href: "/works/mlops-b2b-dashboard",
    linkText: "→ MLOps 사례",
  },
  {
    badge: "STEP 05",
    name: "메인 + DS",
    generic: "화면만 납품합니다",
    fcts: "컴포넌트와 토큰까지 포함해 납품합니다",
    href: "/works/b2b-design-system",
    linkText: "→ DS 사례",
  },
  {
    badge: "STEP 06",
    name: "서브 · QA",
    generic: "QA는 개발팀이 합니다",
    fcts: "구현 결과물을 직접 검수합니다",
    href: "/works/b2b-design-system",
    linkText: "→ QA 가이드",
  },
];

const projectCards = [
  {
    href: "/works/global-credit-bank",
    cat: "B2C UX SERVICE",
    name: "UBION 글로벌 학점은행제",
    desc: "복잡한 학점 취득 플로우를 3-Zone 구조로 재설계해 전환율을 높인 프로젝트",
  },
  {
    href: "/works/mlops-b2b-dashboard",
    cat: "B2B UX SERVICE",
    name: "SDT MLOps 통합 플랫폼",
    desc: "4단계 MLOps 파이프라인을 단일 노드 그래프로 시각화한 B2B 대시보드",
  },
  {
    href: "/works/humanities-lecture",
    cat: "B2C UX SERVICE",
    name: "grecture 강의 상세 페이지",
    desc: "완강률 65% 달성을 목표로 학습 지속성을 높이는 UX를 설계한 프로젝트",
  },
  {
    href: "/works/b2b-design-system",
    cat: "DESIGN SYSTEM",
    name: "SDT 공통 디자인 시스템",
    desc: "두 B2B 제품의 일관성을 위한 운영 원칙 중심의 디자인 시스템 구축",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHead>
        <Container>
          <PageTitle>Design Process</PageTitle>
          <PageSub>
            매 프로젝트에서 동일한 기준으로 일합니다.
            <br />
            과정이 결과의 품질을 만듭니다.
          </PageSub>
          <ChipRow>
            {["KPI-First Design", "Design Rationale", "System Builder", "Dev-Aware", "B2B·SaaS·Landing·Brand"].map(
              (c) => (
                <Chip key={c}>{c}</Chip>
              ),
            )}
          </ChipRow>
        </Container>
      </PageHead>

      {/* FCTS는 뭐가 다른가요 */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle>FCTS는 뭐가 다른가요</SectionTitle>
          <SectionSub>같은 과제도 다른 방식으로 접근합니다</SectionSub>
          <DiffGrid>
            {diffCards.map((c, i) => (
              <DiffCard key={i}>
                <DiffLabel>{c.label}</DiffLabel>
                <DiffTitle style={{ whiteSpace: "pre-line" }}>{c.title}</DiffTitle>
                <DiffDesc>{c.desc}</DiffDesc>
                <DiffChipsRow>
                  {c.chips.map((chip) => (
                    <DiffChip key={chip}>{chip}</DiffChip>
                  ))}
                </DiffChipsRow>
              </DiffCard>
            ))}
          </DiffGrid>
        </Container>
      </section>

      {/* 6 Steps */}
      <section style={{ background: theme.colors.gray100, padding: "80px 0" }}>
        <Container>
          <StepsWrap>
            <StepsLeft>
              <StepsLeftTitle>모든 프로젝트는 6단계로.</StepsLeftTitle>
              <StepsLeftDesc>
                단계마다 기준이 있고, 산출물이 있습니다.
                <br />
                즉흥이 아닌 구조로 움직입니다.
              </StepsLeftDesc>
              <StepsVideo autoPlay muted loop playsInline>
                <source src="/img/video_process.mp4" type="video/mp4" />
              </StepsVideo>
            </StepsLeft>
            <StepsList>
              {processSteps.map((s) => (
                <StepItem key={s.num}>
                  <StepNum>{s.num}</StepNum>
                  <StepContent>
                    <StepName>{s.name}</StepName>
                    <StepDesc>{s.desc}</StepDesc>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </StepsWrap>
        </Container>
      </section>

      {/* Work Process Table */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <SectionTitle>제가 일하는 방식</SectionTitle>
          <SectionSub>일반적인 접근과 무엇이 다른지 단계별로 비교합니다</SectionSub>
          <Table>
            <TableHeader>
              <TableHeaderCell>단계</TableHeaderCell>
              <TableHeaderCell>일반적 접근</TableHeaderCell>
              <TableHeaderCell>저는 이렇게 합니다</TableHeaderCell>
            </TableHeader>
            {tableRows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  <StepBadge>{row.badge}</StepBadge>
                  <StepCellName>{row.name}</StepCellName>
                </TableCell>
                <GenericCell>{row.generic}</GenericCell>
                <TableCell>
                  {row.fcts}

                  <PillLink href={row.href}>→ {row.linkText.replace("→ ", "")}</PillLink>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Container>
      </section>

      {/* Projects */}
      <section style={{ background: theme.colors.gray100, padding: "80px 0" }}>
        <Container>
          <SectionTitle style={{ marginBottom: "8px" }}>프로젝트로 증명합니다</SectionTitle>
          <SectionSub>각 프로젝트에서 이 프로세스가 어떻게 적용됐는지 확인하세요</SectionSub>
          <ProjectCards>
            {projectCards.map((p, i) => (
              <ProjectCard key={i} href={p.href}>
                <ProjCatLabel>{p.cat}</ProjCatLabel>
                <ProjName>{p.name}</ProjName>
                <ProjDesc>{p.desc}</ProjDesc>
                <ProjArrow>→</ProjArrow>
              </ProjectCard>
            ))}
          </ProjectCards>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <Container>
          <CtaBlock>
            <CtaLabel>💬 한마디로 말하면</CtaLabel>
            <CtaTitle>{"완성된 화면이 아니라\n작동하는 시스템을 납품합니다."}</CtaTitle>
            <CtaDesc>
              FCTS의 디자인은 단순한 시각적 결과물이 아닙니다. 설계 이유가 있고, 근거가 있으며, 팀이 이어받아 운영할 수
              있는 시스템입니다.
            </CtaDesc>
          </CtaBlock>
        </Container>
      </section>
    </>
  );
}
