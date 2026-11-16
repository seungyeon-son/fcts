"use client";

/**
 * PDF 포트폴리오 덱 (1920×1080 슬라이드)
 * - 콘텐츠는 projects.ts 단일 소스에서 가져온다 (사이트와 문구 불일치 방지)
 * - 대표작 6개는 케이스 스터디(표지·문제·접근·핵심 결정·하이라이트·회고), 나머지 4개는 1장 요약
 * - 개발 서버 전용 (layout.tsx에서 production 404)
 */

import React from "react";
import { useSearchParams } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";
import { projects, type Project } from "@/data/projects";

/* ════════════════ tokens ════════════════ */
const C = {
  ink: "#222222",
  body: "#4A4A47",
  muted: "#8A8A86",
  line: "#DEDEDA",
  paper: "#FFFFFF",
  gray: "#F3F3F1",
  gray2: "#E9E9E6",
  dark: "#3E3E3E",
  accent: "#E8381E",
};
const W = 1920;
const H = 1080;
const PX = 120; // 좌우 여백

// 대표작 4개는 케이스 스터디, 나머지는 1장 요약
const DEEP = ["lxp-mobile-login", "global-credit-bank", "dts-temperature-monitoring", "b2b-design-system"];
const OTHER = [
  "cx-ai-chatbot",
  "mlops-b2b-dashboard",
  "humanities-lecture",
  "sunnano-website-renewal",
  "fatima-franciscan-renewal",
  "klairs-cosmetics-renewal",
];

const bySlug = (s: string) => projects.find((p) => p.slug === s) as Project;
const deep = DEEP.map(bySlug);
const other = OTHER.map(bySlug);
const num = (n: number) => String(n).padStart(2, "0");
const clean = (s: string) => s.replace(/\s+/g, "");
// ?guide=1 - 아직 안 채운 기여·근거·결과 칸을 점선 자리표시로 보여준다 (기본은 숨김)
const GuideCtx = React.createContext(false);

/* ════════════════ frame ════════════════ */
// 사이트 GNB·푸터·Next 개발 배지는 덱에서 숨긴다
const HideSiteChrome = createGlobalStyle`
  body > * > header, header:not(#deck header), footer, nextjs-portal { display: none !important; }
  main { padding: 0 !important; margin: 0 !important; }
  body { background: #cfcfcb !important; }
`;
const Card = styled.div`
  background: ${C.gray};
  border-radius: 8px;
  padding: 40px 40px 36px;
  display: flex;
  flex-direction: column;
`;
const Deck = styled.div`
  width: ${W}px;
  margin: 0 auto;
  background: #cfcfcb;
  font-family: "Pretendard Variable", Pretendard, -apple-system, sans-serif;
  color: ${C.ink};
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
`;
const SlideBox = styled.section<{ $bg: string; $dark?: boolean }>`
  position: relative;
  width: ${W}px;
  height: ${H}px;
  overflow: hidden;
  background: ${({ $bg }) => $bg};
  color: ${({ $dark }) => ($dark ? "#F3F3F1" : C.ink)};
  & + & {
    margin-top: 0;
  }
`;
const Chrome = styled.div<{ $dark?: boolean }>`
  position: absolute;
  left: ${PX}px;
  right: ${PX}px;
  top: 44px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: ${({ $dark }) => ($dark ? "rgba(255,255,255,0.55)" : C.muted)};
  b {
    font-weight: 600;
    color: ${({ $dark }) => ($dark ? "#fff" : C.ink)};
  }
`;
const PageNo = styled.div<{ $dark?: boolean }>`
  position: absolute;
  right: ${PX}px;
  bottom: 40px;
  font-size: 15px;
  letter-spacing: 0.06em;
  color: ${({ $dark }) => ($dark ? "rgba(255,255,255,0.55)" : C.muted)};
  font-variant-numeric: tabular-nums;
`;
const Body = styled.div`
  position: absolute;
  left: ${PX}px;
  right: ${PX}px;
  top: 120px;
  bottom: 96px;
  display: flex;
  flex-direction: column;
`;

/* ════════════════ type ════════════════ */
const Eyebrow = styled.div<{ $c?: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $c }) => $c ?? C.accent};
  margin-bottom: 20px;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
  }
`;
const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.03em;
  white-space: pre-line;
`;
const H2 = styled.h2`
  font-size: 44px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.025em;
  white-space: pre-line;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.02em;
`;
const P = styled.p<{ $size?: number }>`
  font-size: ${({ $size }) => $size ?? 19}px;
  line-height: 1.72;
  color: ${C.body};
  letter-spacing: -0.01em;
  white-space: pre-line;
`;
const Label = styled.div`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${C.muted};
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const Rule = styled.div`
  height: 1px;
  background: ${C.line};
`;
const Chip = styled.span`
  display: inline-block;
  font-size: 15px;
  padding: 7px 14px;
  border: 1px solid ${C.line};
  border-radius: 999px;
  color: ${C.body};
  background: #fff;
`;
const Img = styled.div<{ $bg?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  background: ${({ $bg }) => $bg ?? C.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &.cover img {
    object-fit: cover;
  }
`;
const Caption = styled.div`
  margin-top: 14px;
  font-size: 15px;
  color: ${C.muted};
  line-height: 1.5;
`;

/* ════════════════ slide shell ════════════════ */
type SlideDef = { key: string; section: string; bg?: string; dark?: boolean; bare?: boolean; node: React.ReactNode };

function Slide({ s, i, total }: { s: SlideDef; i: number; total: number }) {
  return (
    <SlideBox $bg={s.bg ?? C.paper} $dark={s.dark} data-slide={i + 1}>
      {!s.bare && (
        <Chrome $dark={s.dark}>
          <span>
            <b>SEUNGYEON SON</b>&nbsp;&nbsp;Product Designer Portfolio
          </span>
          <span>{s.section}</span>
        </Chrome>
      )}
      {s.node}
      {!s.bare && (
        <PageNo $dark={s.dark}>
          {num(i + 1)} / {num(total)}
        </PageNo>
      )}
    </SlideBox>
  );
}

/* ════════════════ 1. cover ════════════════ */
const CoverWrap = styled.div`
  position: absolute;
  inset: 0;
  padding: 110px ${PX}px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CoverTitle = styled.div`
  font-size: 150px;
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.045em;
  color: ${C.dark};
  em {
    font-style: normal;
    color: ${C.accent};
  }
`;
const FctsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${C.line};
  padding-top: 28px;
  gap: 32px;
  div b {
    display: block;
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 6px;
    color: ${C.ink};
  }
  div span {
    font-size: 16px;
    color: ${C.muted};
    line-height: 1.5;
  }
`;
const fcts = [
  ["F", "Function", "사용자의 문제를 해결하는 실질적인 기능 정의"],
  ["C", "Concept", "논리적 근거를 바탕으로 세워진 디자인 전략"],
  ["T", "Token", "디자인과 개발을 잇는 최소 단위의 약속"],
  ["S", "System", "지속 가능하고 확장 가능한 프로덕트의 질서"],
];
function Cover() {
  return (
    <CoverWrap>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, color: C.muted, letterSpacing: "0.08em" }}>
        <span>
          <b style={{ color: C.ink }}>PRODUCT DESIGNER PORTFOLIO</b>&nbsp;&nbsp;2026
        </span>
        <span>B2B SaaS · B2C Service · Web Service</span>
      </div>
      <div>
        <CoverTitle>
          From Complex
          <br />
          to Simple<em>.</em>
        </CoverTitle>
        <div style={{ marginTop: 44, display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.45, color: C.ink }}>
            화면을 만들기 전에,
            <br />
            구조를 먼저 설계합니다.
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em" }}>손승연</div>
            <div style={{ fontSize: 20, color: C.muted, marginTop: 4 }}>Product Designer · 6년차</div>
          </div>
        </div>
      </div>
      <FctsRow>
        {fcts.map(([l, n, d]) => (
          <div key={l}>
            <b>
              {l}
              <span style={{ fontSize: 16, fontWeight: 500, color: C.muted, marginLeft: 10 }}>{n}</span>
            </b>
            <span>{d}</span>
          </div>
        ))}
      </FctsRow>
    </CoverWrap>
  );
}

/* ════════════════ 2. profile ════════════════ */
const skills = ["Figma", "Adobe Illustrator", "Framer", "HTML/CSS", "Git", "UX Research", "Design System", "Prototyping", "AutoCAD"];
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  padding: 26px 0;
  border-top: 1px solid ${C.line};
  font-size: 20px;
  line-height: 1.6;
  color: ${C.ink};
  & > span:first-child {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${C.muted};
    padding-top: 3px;
  }
`;
function Profile() {
  return (
    <Body style={{ flexDirection: "row", gap: 120, alignItems: "center" }}>
      <div style={{ flex: "0 0 860px" }}>
        <Eyebrow>About</Eyebrow>
        <H1>
          화면을 만들기 전에,
          <br />
          구조를 먼저 설계합니다.
        </H1>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, margin: "40px 0 28px" }}>
          <span style={{ fontSize: 34, fontWeight: 700 }}>손승연</span>
          <span style={{ fontSize: 20, color: C.accent, fontWeight: 600 }}>Product Designer</span>
        </div>
        <P $size={21}>
          산업용 IoT 대시보드부터 글로벌 에듀테크 서비스까지, 저는 늘 한 가지를 먼저 묻습니다.
          {"\n"}“이 사용자는 지금 무엇을 판단해야 하는가.”
          {"\n\n"}복잡한 정보를 사용자의 멘탈모델로 번역하고, 디자인 시스템과 운영 원칙으로 팀 전체의 설계 효율을 높입니다.
          화면을 완성하는 것만이 아니라 작동하는 시스템을 구축하는 것을 목표로 합니다.
        </P>
      </div>
      <div style={{ flex: 1 }}>
        <InfoRow>
          <span>CAREER</span>
          <span>6년차 Product Designer</span>
        </InfoRow>
        <InfoRow>
          <span>DOMAIN</span>
          <span>B2B SaaS · B2C Service · Web Service</span>
        </InfoRow>
        <InfoRow>
          <span>SKILLS</span>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </span>
        </InfoRow>
        <InfoRow style={{ borderBottom: `1px solid ${C.line}` }}>
          <span>CONTACT</span>
          <span>
            au1gust8@gmail.com
            <br />
            010-4523-0029
          </span>
        </InfoRow>
      </div>
    </Body>
  );
}

/* ════════════════ 3. values ════════════════ */
const values = [
  ["비즈니스 맥락을 이해합니다", "기능 명세서를 넘어 왜 이 기능이 필요한지, 어떤 지표를 움직여야 하는지 먼저 파악합니다. 요구사항이 불명확해도 가설을 세우고 빠르게 검증하며 앞으로 나아갑니다.", "UBION 글로벌 학점은행제"],
  ["핸드오프 손실을 0으로 만듭니다", "HTML/CSS 퍼블리싱 경험으로 개발 제약을 이해하고 현실적인 설계를 합니다. 토큰·스펙으로 개발팀이 의도 그대로 구현하도록 간극을 메웁니다.", "Dear Klairs · SunNano"],
  ["팀 생산성에 직접 기여합니다", "디자인 시스템과 컴포넌트 정비로 팀 전체의 작업 속도를 높입니다. 결정 이유와 맥락을 기록해 팀원이 언제든 이어받을 수 있는 환경을 만듭니다.", "SDT Design System"],
  ["근거 있는 디자인을 합니다", "감각이 아닌 데이터와 구조로 설명합니다. 모든 결정에는 “왜”가 있습니다.", "코스모스 LXP 모바일 앱"],
  ["문제를 재정의합니다", "기능의 목적과 성공 기준이 불명확해 의사결정이 반복적으로 바뀌는 문제를 겪은 뒤로, 디자인에 들어가기 전에 문제 정의·사용자·성공 지표를 먼저 확인하고 기획의 빈틈을 조기에 질문합니다.", "코스모스 LXP 스마트 가이드"],
];
function Values() {
  return (
    <Body>
      <Eyebrow>How I Work</Eyebrow>
      <H2>저는 이런 팀원입니다</H2>
      <P $size={20} style={{ marginTop: 12 }}>
        매 프로젝트에서 비즈니스 목표와 사용자 경험을 함께 고민합니다.
      </P>
      <div style={{ flex: 1, minHeight: 0, marginTop: 56, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }}>
        {values.map(([t, d, ref], i) => (
          <div key={t} style={{ background: C.gray, borderRadius: 8, padding: "40px 32px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: i === 3 ? C.accent : C.muted, letterSpacing: "0.1em" }}>{num(i + 1)}</div>
            <H3 style={{ margin: "28px 0 18px", fontSize: 25 }}>{t}</H3>
            <P $size={17.5}>{d}</P>
            <div style={{ marginTop: "auto", paddingTop: 24, fontSize: 15, color: C.muted, borderTop: `1px solid ${C.line}` }}>관련 사례 · {ref}</div>
          </div>
        ))}
      </div>
    </Body>
  );
}

/* ════════════════ 4. process ════════════════ */
const principles = [
  ["목표 지표를 먼저 정의합니다", "기획서를 받으면 KPI를 먼저 찾습니다. 어떤 숫자를 움직여야 하는지 정의된 후 설계를 시작합니다."],
  ["모든 결정엔 근거가 있습니다", "직관이 아닌 사용자 데이터와 비즈니스 맥락으로 결정합니다. 리뷰에서 “왜”에 항상 답할 수 있습니다."],
  ["디자인 언어를 시스템화합니다", "컴포넌트, 토큰, 운영 원칙까지 포함한 디자인 시스템을 설계합니다. 구조를 먼저 생각합니다."],
  ["퍼블 단계까지 책임집니다", "HTML/CSS 구현 경험으로 개발 제약을 이해합니다. 핸드오프 후에도 QA와 피드백을 직접 처리합니다."],
];
const steps = [
  ["Overview", "목표와 맥락을 정의하고 프로젝트 스코프를 확인합니다."],
  ["Research & Strategy", "사용자 인터뷰, 경쟁사 분석, 데이터 분석을 통해 전략 방향을 수립합니다."],
  ["Concept", "정보 구조 설계와 와이어프레임으로 핵심 경험을 구체화합니다."],
  ["Design System", "컴포넌트와 토큰을 정의해 일관성 있는 시각 언어를 만듭니다."],
  ["Deliverables", "프로토타입, 스펙 문서, 핸드오프 가이드를 완성합니다."],
  ["Guide & QA", "개발팀과 협력해 구현 품질을 검증하고 최종 QA를 진행합니다."],
];
function Process() {
  return (
    <Body>
      <Eyebrow>Design Process</Eyebrow>
      <H2>모든 프로젝트는 6단계로.</H2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginTop: 56 }}>
        {principles.map(([t, d]) => (
          <div key={t}>
            <H3 style={{ fontSize: 22, marginBottom: 12 }}>{t}</H3>
            <P $size={17.5}>{d}</P>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        {steps.map(([n, d], i) => (
          <div key={n} style={{ paddingRight: 28 }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
              <span style={{ width: 14, height: 14, borderRadius: "50%", background: i === 0 ? C.accent : C.dark, flex: "0 0 14px" }} />
              <span style={{ flex: 1, height: 1, background: C.line, marginLeft: 12 }} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.accent, letterSpacing: "0.08em" }}>{num(i + 1)}</div>
            <H3 style={{ fontSize: 22, margin: "8px 0 10px" }}>{n}</H3>
            <P $size={16.5}>{d}</P>
          </div>
        ))}
      </div>
    </Body>
  );
}

/* ════════════════ 5. contents ════════════════ */
const ListRow = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 260px 90px;
  align-items: baseline;
  padding: 20px 0;
  border-top: 1px solid ${C.line};
  font-size: 22px;
  & > span:first-child {
    font-size: 16px;
    font-weight: 700;
    color: ${C.accent};
  }
  & > span:nth-child(3),
  & > span:nth-child(4) {
    font-size: 16px;
    color: ${C.muted};
  }
  & > span:nth-child(4) {
    text-align: right;
  }
`;
function Contents({ pages }: { pages: Record<string, number> }) {
  return (
    <Body style={{ flexDirection: "row", gap: 120 }}>
      <div style={{ flex: "0 0 520px" }}>
        <Eyebrow>Contents</Eyebrow>
        <H2>
          복잡함을 단순하게 푼
          <br />
          10개의 작업
        </H2>
        <P $size={19} style={{ marginTop: 24 }}>
          대표작 {deep.length}개는 문제 정의부터 핵심 결정, 최종 화면, 회고까지 케이스 스터디로 정리했고, 나머지 {other.length}개는 한 장으로
          요약했습니다.
        </P>
      </div>
      <div style={{ flex: 1 }}>
        <Label>Selected Works · Case Study</Label>
        {deep.map((p, i) => (
          <ListRow key={p.slug}>
            <span>{num(i + 1)}</span>
            <span style={{ fontWeight: 600 }}>{p.subtitle}</span>
            <span>{p.category}</span>
            <span>p.{num(pages[p.slug])}</span>
          </ListRow>
        ))}
        <div style={{ height: 40 }} />
        <Label>Other Works · Summary</Label>
        {other.map((p, i) => (
          <ListRow key={p.slug}>
            <span>{num(deep.length + i + 1)}</span>
            <span style={{ fontWeight: 600 }}>{p.subtitle}</span>
            <span>{p.category}</span>
            <span>p.{num(pages[p.slug])}</span>
          </ListRow>
        ))}
      </div>
    </Body>
  );
}

/* ════════════════ project: title ════════════════ */
/* ════════════════ evidence blocks: 기여 · 근거 · 결과 ════════════════ */
const Slot = styled.div`
  border: 1.5px dashed ${C.line};
  border-radius: 8px;
  padding: 22px 26px;
  font-size: 16px;
  line-height: 1.6;
  color: ${C.muted};
  & b {
    display: block;
    font-size: 13px;
    letter-spacing: 0.08em;
    color: ${C.body};
    margin-bottom: 6px;
  }
`;
const LEVEL_COLOR = { 주도: C.accent, 공동: C.dark, 참여: C.muted } as const;
function Contribution({ p }: { p: Project }) {
  const guide = React.useContext(GuideCtx);
  const c = p.contribution;
  if (!c?.stages.length)
    return guide ? (
      <Slot style={{ marginTop: 22 }}>
        <b>CONTRIBUTION</b>단계별 내 몫(주도 · 공동 · 참여)과 함께한 사람 구성
      </Slot>
    ) : null;
  return (
    <div style={{ marginTop: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${c.stages.length}, 1fr)`, gap: 8 }}>
        {c.stages.map((st) => (
          <div key={st.stage} style={{ background: C.paper, borderRadius: 6, padding: "14px 16px", borderTop: `3px solid ${LEVEL_COLOR[st.level]}` }}>
            <div style={{ fontSize: 14, color: C.muted, fontWeight: 600 }}>{st.stage}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: C.ink, marginTop: 4 }}>{st.level}</div>
            {st.note && <div style={{ fontSize: 13, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>{st.note}</div>}
          </div>
        ))}
      </div>
      {c.team && <div style={{ fontSize: 15, color: C.muted, marginTop: 12 }}>함께한 사람 · {c.team}</div>}
    </div>
  );
}
function Evidence({ p }: { p: Project }) {
  const guide = React.useContext(GuideCtx);
  const ev = p.evidence ?? [];
  if (!ev.length)
    return guide ? (
      <Slot style={{ marginTop: 36 }}>
        <b>EVIDENCE</b>출처 · 규모 · 알게 된 것 · 이어진 결정 - 예) VOC 분석 · 3개월 문의 N건 · 로그인 문의 1위 → 간편 로그인을 첫 화면으로
      </Slot>
    ) : null;
  return (
    <div style={{ marginTop: 36 }}>
      <Label>근거</Label>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${ev.length}, 1fr)`, gap: 20 }}>
        {ev.map((e) => (
          <div key={e.source + e.finding} style={{ background: C.gray, borderRadius: 6, padding: "20px 24px" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.ink }}>
              {e.source}
              {e.scale && <span style={{ fontWeight: 500, color: C.muted }}>{`  ·  ${e.scale}`}</span>}
            </div>
            <div style={{ fontSize: 16, color: C.body, lineHeight: 1.55, marginTop: 8 }}>{e.finding}</div>
            <div style={{ fontSize: 16, color: C.ink, fontWeight: 600, lineHeight: 1.55, marginTop: 8 }}>→ {e.decision}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
const OUTCOME_LABEL = { measured: "측정값", qualitative: "정성 결과", plan: "측정 계획" } as const;
function Outcome({ p }: { p: Project }) {
  const guide = React.useContext(GuideCtx);
  const oc = p.outcome ?? [];
  if (!oc.length)
    return guide ? (
      <Slot style={{ marginBottom: 28 }}>
        <b>OUTCOME</b>측정값 / 정성 결과(도입 범위·현업 반응) / 측정 계획(지표·목표·방법) 중 해당하는 것
      </Slot>
    ) : null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${oc.length}, 1fr)`, gap: 16, marginBottom: 28 }}>
      {oc.map((o) => (
        <div key={o.title} style={{ background: C.gray, borderRadius: 6, padding: "22px 26px" }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", color: o.kind === "plan" ? C.accent : C.muted }}>{OUTCOME_LABEL[o.kind]}</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.ink, marginTop: 8, letterSpacing: "-0.02em" }}>{o.title}</div>
          <div style={{ fontSize: 16, color: C.body, lineHeight: 1.6, marginTop: 8 }}>{o.body}</div>
        </div>
      ))}
    </div>
  );
}

const Meta = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  row-gap: 14px;
  font-size: 18px;
  line-height: 1.5;
  color: ${C.ink};
  & > span:nth-child(odd) {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: ${C.muted};
    padding-top: 3px;
  }
`;
function ProjectTitle({ p, no }: { p: Project; no: number }) {
  return (
    <Body style={{ flexDirection: "row", gap: 100, top: 110 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 120, fontWeight: 800, lineHeight: 1, color: C.gray2, letterSpacing: "-0.04em" }}>{num(no)}</div>
        <Eyebrow style={{ marginTop: 36 }}>
          {p.category} · {p.year}
        </Eyebrow>
        <div style={{ fontSize: 24, fontWeight: 600, color: C.muted, marginBottom: 14 }}>{p.subtitle}</div>
        <H1>{p.title}</H1>
        {p.heroContext && (
          <P $size={19} style={{ marginTop: 28 }}>
            {p.heroContext}
          </P>
        )}
        <div style={{ marginTop: "auto" }}>
          <Rule style={{ marginBottom: 24 }} />
          <Meta>
            <span>CLIENT</span>
            <span>{p.client}</span>
            <span>ROLE</span>
            <span>{p.role}</span>
            <span>KEYWORDS</span>
            <span>{p.tags.join(" · ")}</span>
          </Meta>
          <Contribution p={p} />
        </div>
      </div>
      <div style={{ flex: "0 0 700px", height: "100%" }}>
        <Img className="cover" $bg={C.gray2}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.coverImage} alt="" />
        </Img>
      </div>
    </Body>
  );
}

/* ════════════════ project: problem ════════════════ */
// 숫자가 없는 항목(예: "노드 그래프", "모듈형")은 지표가 아니라 산출물이라 카드에서 빼고 한 줄로 보여준다
function Metrics({ p, compact }: { p: Project; compact?: boolean }) {
  const measured = p.metrics.filter((m) => /\d/.test(m.value));
  const outputs = p.metrics.filter((m) => !/\d/.test(m.value));
  return (
    <div>
    {measured.length > 0 && (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${measured.length}, 1fr)`, gap: 20 }}>
      {measured.map((m) => (
        <div key={m.label} style={{ background: compact ? C.paper : C.gray, borderRadius: 6, padding: compact ? "22px 24px" : "30px 32px" }}>
          {m.kind && (
            <div style={{ fontSize: 13, fontWeight: 700, color: m.kind === "goal" ? C.accent : C.muted, letterSpacing: "0.06em", marginBottom: 10 }}>
              {m.kind === "goal" ? "목표" : "설계 산출물"}
            </div>
          )}
          <div style={{ fontSize: compact ? 34 : 46, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>{m.value}</div>
          <div style={{ fontSize: compact ? 16 : 18, fontWeight: 600, marginTop: 10 }}>{m.label}</div>
          {m.sub && !compact && <div style={{ fontSize: 15, color: C.muted, marginTop: 6, lineHeight: 1.5 }}>{m.sub}</div>}
        </div>
      ))}
    </div>
    )}
    {outputs.length > 0 && (
      <div style={{ display: "flex", gap: 24, alignItems: "baseline", marginTop: measured.length ? 18 : 0, fontSize: compact ? 15 : 16, color: C.body }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", color: C.muted, flex: "0 0 auto" }}>주요 산출물</span>
        <span>
          {outputs.map((m) => `${m.value} - ${m.label}`).join("   ·   ")}
        </span>
      </div>
    )}
    </div>
  );
}
function ProjectProblem({ p }: { p: Project }) {
  const pc = p.problemContext;
  return (
    <Body>
      <Eyebrow>Problem</Eyebrow>
      <H2 style={{ marginBottom: 40 }}>무엇이 문제였나</H2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div>
          <Label>{pc.domain}</Label>
          <P $size={20}>{pc.domainDetail}</P>
          {pc.domainContextExtra && (
            <P $size={20} style={{ marginTop: 14 }}>
              {pc.domainContextExtra}
            </P>
          )}
        </div>
        <div>
          <Label style={{ color: C.accent }}>{pc.coreChallenge}</Label>
          <P $size={20} style={{ color: C.ink }}>
            {pc.coreChallengeDetail}
          </P>
        </div>
      </div>
      <Evidence p={p} />
      <div style={{ marginTop: "auto" }}>
        <Metrics p={p} />
      </div>
    </Body>
  );
}

/* ════════════════ project: approach ════════════════ */
function ProjectApproach({ p }: { p: Project }) {
  const img = p.journeyImage?.image;
  if (!img) {
    return (
      <Body>
        <Eyebrow>My Approach</Eyebrow>
        <H2>어떻게 풀었나</H2>
        <div style={{ margin: "auto 0", display: "grid", gridTemplateColumns: `repeat(${p.approach.length}, 1fr)`, gap: 20 }}>
          {p.approach.map((a) => (
            <Card key={a.step} style={{ height: 460 }}>
              <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", color: a.step === 1 ? C.accent : C.gray2 }}>{num(a.step)}</div>
              <div style={{ marginTop: "auto", height: 190 }}>
                <H3 style={{ fontSize: 26, marginBottom: 14 }}>{a.title}</H3>
                <P $size={18.5}>{a.desc}</P>
              </div>
            </Card>
          ))}
        </div>
        {p.keyDecisionsIntro && (
          <P $size={18} style={{ marginTop: 28, color: C.muted }}>
            {p.keyDecisionsIntro}
          </P>
        )}
      </Body>
    );
  }
  return (
    <Body>
      <Eyebrow>My Approach</Eyebrow>
      <H2 style={{ marginBottom: 36 }}>어떻게 풀었나</H2>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${p.approach.length}, 1fr)`, gap: 16 }}>
        {p.approach.map((a) => (
          <div key={a.step} style={{ borderTop: `2px solid ${a.step === 1 ? C.accent : C.dark}`, paddingTop: 18, paddingRight: 12 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.muted, letterSpacing: "0.08em" }}>STEP {num(a.step)}</div>
            <H3 style={{ fontSize: 22, margin: "8px 0 8px" }}>{a.title}</H3>
            <P $size={img ? 16 : 18}>{a.desc}</P>
          </div>
        ))}
      </div>
      {img ? (
        <div style={{ flex: 1, minHeight: 0, marginTop: 36, display: "flex", flexDirection: "column" }}>
          <div style={{ flex: 1, minHeight: 0 }}>
            <Img>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" />
            </Img>
          </div>
          <Caption>{p.journeyImage?.caption}</Caption>
        </div>
      ) : (
        p.keyDecisionsIntro && (
          <div style={{ marginTop: "auto", background: C.gray, borderRadius: 6, padding: "32px 36px" }}>
            <P $size={19}>{p.keyDecisionsIntro}</P>
          </div>
        )
      )}
    </Body>
  );
}

/* ════════════════ project: key decision ════════════════ */
const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid ${C.line};
  & > span:first-child {
    font-size: 14px;
    font-weight: 700;
    color: ${C.muted};
    letter-spacing: 0.04em;
    padding-top: 4px;
  }
`;
const Tradeoff = styled.div`
  background: ${C.gray};
  border-left: 3px solid ${C.accent};
  border-radius: 0 6px 6px 0;
  padding: 22px 26px;
`;
function KeyDecision({ p, k, idx, intro }: { p: Project; k: Project["keyDecisions"][number]; idx: number; intro?: string }) {
  const total = p.keyDecisions.length;
  const items = k.items.map((it) => (
    <ItemRow key={it.icon}>
      <span>{clean(it.icon)}</span>
      <P $size={k.image ? 16.5 : 18}>
        {it.title && <b style={{ color: C.ink }}>{it.title} </b>}
        {it.body}
      </P>
    </ItemRow>
  ));
  const tradeoff = k.tradeoff && (
    <Tradeoff>
      <Label style={{ marginBottom: 6 }}>고려한 대안과 판단</Label>
      <P $size={k.image ? 15.5 : 17}>{k.tradeoff}</P>
    </Tradeoff>
  );
  const head = (
    <>
      <Eyebrow>
        Key Decision {num(idx + 1)} / {num(total)}
      </Eyebrow>
      <H2 style={{ fontSize: k.image ? 36 : 40, marginBottom: intro ? 12 : 28 }}>{k.areaTitle}</H2>
      {intro && (
        <P $size={16} style={{ color: C.muted, marginBottom: 20 }}>
          {intro}
        </P>
      )}
    </>
  );
  if (!k.image) {
    return (
      <Body>
        <Eyebrow>
          Key Decision {num(idx + 1)} / {num(total)}
        </Eyebrow>
        <H2>{k.areaTitle}</H2>
        <div style={{ margin: "auto 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {k.items.map((it, j) => (
            <Card key={it.icon} style={{ minHeight: 340 }}>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.08em", color: j === 2 ? C.accent : C.muted }}>
                {num(j + 1)}&nbsp;&nbsp;{clean(it.icon)}
              </div>
              <Rule style={{ margin: "18px 0 22px" }} />
              <P $size={20.5} style={{ color: C.ink }}>
                {it.title && <b>{it.title} </b>}
                {it.body}
              </P>
            </Card>
          ))}
        </div>
        {k.tradeoff && (
          <div style={{ marginTop: 24 }}>
            <Tradeoff style={{ padding: "28px 34px" }}>
              <Label style={{ marginBottom: 8 }}>고려한 대안과 판단</Label>
              <P $size={18.5}>{k.tradeoff}</P>
            </Tradeoff>
          </div>
        )}
        </div>
      </Body>
    );
  }
  return (
    <Body style={{ flexDirection: "row", gap: 72 }}>
      <div style={{ flex: "0 0 760px", display: "flex", flexDirection: "column" }}>
        {head}
        <div>{items}</div>
        <div style={{ marginTop: "auto", paddingTop: 20 }}>{tradeoff}</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Img>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={k.image} alt="" />
          </Img>
        </div>
        {k.imageCaption && <Caption>{k.imageCaption}</Caption>}
      </div>
    </Body>
  );
}

/* ════════════════ project: highlight ════════════════ */
type HL = Project["designHighlights"][number];
// 최종 화면을 크게 - 이미지가 슬라이드의 주인공, 설명은 위 한 줄
function Highlight({ h, idx, total }: { h: HL; idx: number; total: number }) {
  return (
    <Body style={{ top: 104, bottom: 84 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 28 }}>
        <div>
          <Eyebrow>
            Final UI {num(idx + 1)} / {num(total)} · {h.zone}
          </Eyebrow>
          <H2 style={{ fontSize: 38 }}>{h.title}</H2>
        </div>
        <P $size={18}>{h.desc}</P>
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>
        <Img $bg={C.gray2}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={h.image} alt="" />
        </Img>
      </div>
    </Body>
  );
}
function HighlightsText({ list }: { list: HL[] }) {
  return (
    <Body>
      <Eyebrow>Design Highlights</Eyebrow>
      <H2 style={{ marginBottom: 48 }}>화면에서 이렇게 풀었습니다</H2>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${list.length}, 1fr)`, gap: 32 }}>
        {list.map((h) => (
          <div key={h.title} style={{ background: C.gray, borderRadius: 6, padding: "32px 30px" }}>
            <Label>{h.zone}</Label>
            <H3 style={{ marginBottom: 14 }}>{h.title}</H3>
            <P $size={17.5}>{h.desc}</P>
          </div>
        ))}
      </div>
    </Body>
  );
}

/* ════════════════ project: reflection ════════════════ */
function Reflection({ p }: { p: Project }) {
  const guide = React.useContext(GuideCtx);
  const hasOutcome = !!p.outcome?.length || guide;
  // 결과 칸이 채워지면 "다음 ITERATION"은 측정 계획과 겹치므로 덱에서는 뺀다 (사이트에는 유지)
  const refl = p.outcome?.length ? p.reflection.filter((r) => !/iteration/i.test(r.title)) : p.reflection;
  return (
    <Body>
      <Eyebrow>{hasOutcome ? "Outcome & Reflection" : "Reflection"}</Eyebrow>
      <H2 style={{ marginBottom: 20 }}>{hasOutcome ? "결과와 회고" : "돌아보며"}</H2>
      {p.cardDesc && (
        <P $size={21} style={{ color: C.ink, maxWidth: 1300, marginBottom: 40 }}>
          {p.cardDesc}
        </P>
      )}
      <Outcome p={p} />
      <div style={{ margin: hasOutcome ? "0" : "auto 0", display: "grid", gridTemplateColumns: `repeat(${refl.length}, 1fr)`, gap: 20 }}>
        {refl.map((r, i) => (
          <Card key={r.title} style={{ minHeight: hasOutcome ? 0 : 380, borderTop: `3px solid ${i === 0 ? C.accent : C.dark}`, borderRadius: "0 0 8px 8px" }}>
            <H3 style={{ fontSize: 26, marginBottom: 20 }}>{r.title}</H3>
            <P $size={20}>{r.body}</P>
          </Card>
        ))}
      </div>
    </Body>
  );
}

/* ════════════════ other works: summary ════════════════ */
function Summary({ p, no }: { p: Project; no: number }) {
  const shots = p.designHighlights.filter((h) => h.image).slice(0, 1);
  return (
    <Body style={{ flexDirection: "row", gap: 80 }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 20 }}>
          <span style={{ fontSize: 56, fontWeight: 800, color: C.gray2, letterSpacing: "-0.04em" }}>{num(no)}</span>
          <Eyebrow style={{ marginBottom: 0 }}>
            {p.category} · {p.year}
          </Eyebrow>
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, color: C.muted, margin: "18px 0 10px" }}>{p.subtitle}</div>
        <H2 style={{ fontSize: 40 }}>{p.title}</H2>
        <P $size={17.5} style={{ marginTop: 20 }}>
          {p.problemContext.coreChallengeDetail}
        </P>
        <div style={{ marginTop: 28 }}>
          <Label>핵심 결정</Label>
          {p.keyDecisions.map((k, i) => (
            <div key={k.areaTitle} style={{ display: "flex", gap: 14, padding: "10px 0", borderTop: `1px solid ${C.line}`, fontSize: 18, fontWeight: 600 }}>
              <span style={{ color: C.accent, fontSize: 15, paddingTop: 2 }}>{num(i + 1)}</span>
              {k.areaTitle}
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto" }}>
          <Meta style={{ fontSize: 16, rowGap: 8 }}>
            <span>CLIENT</span>
            <span>{p.client}</span>
            <span>ROLE</span>
            <span>{p.role}</span>
          </Meta>
        </div>
      </div>
      <div style={{ flex: "0 0 820px", display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <Img className={shots.length ? "" : "cover"} $bg={C.gray2}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shots[0]?.image ?? p.coverImage} alt="" />
          </Img>
        </div>
        <Metrics p={p} compact />
      </div>
    </Body>
  );
}

/* ════════════════ closing ════════════════ */
function Closing() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: `0 ${PX}px`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Eyebrow $c={C.accent}>Thank you</Eyebrow>
      <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.35, letterSpacing: "-0.03em", color: "#fff" }}>
        좋은 UX는 사용자가 길을 잃지 않게 합니다.
        <br />
        저는 그 <span style={{ color: C.accent }}>길</span>을 설계합니다.
      </div>
      <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(3, auto)", justifyContent: "start", columnGap: 96, fontSize: 22, color: "#fff" }}>
        <div>
          <Label style={{ color: "rgba(255,255,255,0.5)" }}>Name</Label>손승연 · Product Designer
        </div>
        <div>
          <Label style={{ color: "rgba(255,255,255,0.5)" }}>E-mail</Label>au1gust8@gmail.com
        </div>
        <div>
          <Label style={{ color: "rgba(255,255,255,0.5)" }}>Phone</Label>010-4523-0029
        </div>
      </div>
    </div>
  );
}

/* ════════════════ assemble ════════════════ */
function buildSlides(): SlideDef[] {
  const pages: Record<string, number> = {};
  const list: SlideDef[] = [];
  list.push({ key: "cover", section: "", bg: C.gray, bare: true, node: <Cover /> });
  list.push({ key: "profile", section: "About", node: <Profile /> });
  list.push({ key: "values", section: "About", node: <Values /> });
  list.push({ key: "process", section: "Design Process", node: <Process /> });
  const contentsIdx = list.length;
  list.push({ key: "contents", section: "Contents", node: null });

  deep.forEach((p, i) => {
    const sec = `${num(i + 1)}  ${p.subtitle}`;
    pages[p.slug] = list.length + 1;
    list.push({ key: `${p.slug}-t`, section: sec, bg: C.gray, node: <ProjectTitle p={p} no={i + 1} /> });
    list.push({ key: `${p.slug}-p`, section: sec, node: <ProjectProblem p={p} /> });
    list.push({ key: `${p.slug}-a`, section: sec, node: <ProjectApproach p={p} /> });
    p.keyDecisions.forEach((k, j) =>
      list.push({
        key: `${p.slug}-k${j}`,
        section: sec,
        node: <KeyDecision p={p} k={k} idx={j} intro={j === 0 && p.journeyImage?.image ? p.keyDecisionsIntro : undefined} />,
      })
    );
    const withImg = p.designHighlights.filter((h) => h.image);
    const noImg = p.designHighlights.filter((h) => !h.image);
    withImg.forEach((h, j) =>
      list.push({ key: `${p.slug}-h${j}`, section: sec, bg: C.gray, node: <Highlight h={h} idx={j} total={withImg.length} /> })
    );
    if (noImg.length) list.push({ key: `${p.slug}-ht`, section: sec, node: <HighlightsText list={noImg} /> });
    list.push({ key: `${p.slug}-r`, section: sec, node: <Reflection p={p} /> });
  });

  other.forEach((p, i) => {
    pages[p.slug] = list.length + 1;
    const no = deep.length + i + 1;
    list.push({ key: `${p.slug}-s`, section: `Other Works  ${num(no)}  ${p.subtitle}`, node: <Summary p={p} no={no} /> });
  });

  list.push({ key: "closing", section: "", bg: C.dark, dark: true, bare: true, node: <Closing /> });
  list[contentsIdx].node = <Contents pages={pages} />;
  return list;
}

export default function PortfolioDeckPage() {
  return (
    <React.Suspense>
      <DeckSlides />
    </React.Suspense>
  );
}

function DeckSlides() {
  const slides = buildSlides();
  // ?from=1&to=20 - 캡처 용량을 나누기 위해 일부 슬라이드만 렌더 (번호는 전체 기준 유지)
  const q = useSearchParams();
  const range = [Number(q.get("from") ?? 1), Number(q.get("to") ?? 999)];
  // ?only=7,23 - 특정 슬라이드만 다시 캡처할 때
  const only = q.get("only")?.split(",").map(Number);
  const guide = q.get("guide") === "1";
  return (
    <GuideCtx.Provider value={guide}>
    <Deck id="deck">
      <HideSiteChrome />
      {slides.map((s, i) =>
        (only ? only.includes(i + 1) : i + 1 >= range[0] && i + 1 <= range[1]) ? <Slide key={s.key} s={s} i={i} total={slides.length} /> : null
      )}
    </Deck>
    </GuideCtx.Provider>
  );
}
