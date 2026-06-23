"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
import { use } from "react";
import { theme } from "@/styles/theme";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { Container, Section } from "@/styles/styled";

/* ════════════════════════════════
   HERO
════════════════════════════════ */
const Hero = styled.div`
  padding: 64px 0 56px;
  border-bottom: 1px solid ${theme.colors.gray200};
`;

const HeroBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${theme.colors.gray500};
  margin-bottom: 28px;
  a:hover {
    color: ${theme.colors.black};
  }
`;

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 56px;
  align-items: start;
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const HeroLeft = styled.div``;

const HeroTitle = styled.h1`
  font-size: clamp(24px, 3.2vw, 40px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.025em;
  white-space: pre-line;
  color: ${theme.colors.black};
  margin-bottom: 16px;
`;

const HeroSubtitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.black};
  margin-bottom: 14px;
`;

const HeroContext = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  line-height: 1.7;
  margin-bottom: 10px;
  max-width: 520px;
`;

const HeroDesc = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray600};
  line-height: 1.85;
  margin-bottom: 20px;
  max-width: 520px;
`;

const HeroTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 28px;
`;

const HeroTag = styled.span`
  font-size: 13px;
  padding: 4px 12px;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 100px;
  color: ${theme.colors.gray600};
`;

/* InfoGrid: 3열 × 2행, 테두리 없이 구분선만 */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${theme.colors.gray200};
`;

const InfoItem = styled.div`
  padding: 14px 0 14px;
  border-bottom: 1px solid ${theme.colors.gray200};
  padding-right: 16px;

  .label {
    font-size: 13px;
    color: ${theme.colors.gray500};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .value {
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.black};
  }
  .link {
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.accent};
    &:hover {
      text-decoration: underline;
      text-underline-position: under;
    }
  }
`;

/* 우측 이미지: 체커보드 */
const HeroImage = styled.div<{ $img?: string }>`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 6px;
  overflow: hidden;
  background: ${({ $img }) =>
    $img
      ? `url(${$img}) center/cover no-repeat`
      : `
        linear-gradient(45deg, #e4e4e4 25%, transparent 25%),
        linear-gradient(-45deg, #e4e4e4 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #e4e4e4 75%),
        linear-gradient(-45deg, transparent 75%, #e4e4e4 75%)
      `};
  background-size: ${({ $img }) => ($img ? "cover" : "20px 20px")};
  background-position: ${({ $img }) => ($img ? "center" : "0 0, 0 10px, 10px -10px, -10px 0")};
  background-color: #f0f0f0;
`;

/* ════════════════════════════════
   IMPACT
════════════════════════════════ */
const SectionLabel = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.black};
  padding-bottom: 14px;
  border-bottom: 1px solid ${theme.colors.black};
  margin-bottom: 28px;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${theme.colors.gray200};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ImpactCard = styled.div`
  padding: 32px 28px;
  background: white;
`;

const ImpactValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${theme.colors.black};
  margin-bottom: 8px;
`;

const ImpactLabel = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${theme.colors.black};
  margin-bottom: 4px;
`;

const ImpactSub = styled.div`
  font-size: 13px;
  color: ${theme.colors.gray500};
  line-height: 1.5;
`;

/* ════════════════════════════════
   PROBLEM CONTEXT
════════════════════════════════ */
const ContextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContextBox = styled.div`
  padding: 28px 32px;
  border-right: 1px solid ${theme.colors.gray200};
  &:last-child {
    border-right: none;
  }

  .label {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 14px;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.gray600};
    line-height: 1.85;
  }
`;

/* ════════════════════════════════
   APPROACH
════════════════════════════════ */
const ApproachRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1px;
  background: ${theme.colors.gray200};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 8px;
  overflow: hidden;
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ApproachStep = styled.div`
  padding: 24px 20px;
  background: white;
  text-align: center;

  .num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${theme.colors.black};
    color: white;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
  }
  .title {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .desc {
    font-size: 14px;
    color: ${theme.colors.gray500};
    line-height: 1.5;
  }
`;

/* ════════════════════════════════
   KEY DECISIONS
════════════════════════════════ */
const DecisionArea = styled.div`
  margin-bottom: 40px;
`;

const DecisionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  .area {
    font-size: 13px;
    font-weight: 700;
    color: ${theme.colors.accent};
    background: rgba(255, 50, 41, 0.08);
    padding: 3px 10px;
    border-radius: 100px;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
  }
`;

const DecisionItems = styled.div`
  border-top: 1px solid ${theme.colors.gray200};
`;

const DecisionItem = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.colors.gray200};

  .badge {
    font-size: 13px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 100px;
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray600};
    display: inline-block;
    width: fit-content;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.gray600};
    line-height: 1.8;
  }
`;

/* ════════════════════════════════
   DESIGN HIGHLIGHTS
════════════════════════════════ */
const ZoneSection = styled.div`
  margin-bottom: 48px;
`;

const ZoneHeader = styled.div`
  margin-bottom: 16px;
  .zone {
    font-size: 13px;
    font-weight: 700;
    color: ${theme.colors.accent};
    margin-bottom: 6px;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .desc {
    font-size: 14px;
    color: ${theme.colors.gray600};
    line-height: 1.7;
  }
`;

const CheckerImage = styled.div<{ $img?: string }>`
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 6px;
  overflow: hidden;
  ${({ $img }) =>
    $img
      ? `
        background: url(${$img}) center/cover no-repeat;
        background-color: #f5f5f5;
      `
      : `
        background-image:
          linear-gradient(45deg, #e4e4e4 25%, transparent 25%), linear-gradient(-45deg, #e4e4e4 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #e4e4e4 75%), linear-gradient(-45deg, transparent 75%, #e4e4e4 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0;
        background-color: #f5f5f5;
      `};
`;

/* 이미지 캡션 + "여기 무슨 이미지" 디렉션 */
const FigureCaption = styled.div`
  font-size: 13px;
  color: ${theme.colors.gray500};
  margin-top: 10px;
  line-height: 1.6;
`;

const ImageDirection = styled.div`
  margin-top: 10px;
  padding: 12px 14px;
  border: 1px dashed ${theme.colors.gray300};
  border-radius: 8px;
  background: ${theme.colors.gray100};
  font-size: 13px;
  color: ${theme.colors.gray600};
  line-height: 1.7;
  .tag {
    font-weight: 700;
    color: ${theme.colors.accent};
    margin-right: 8px;
  }
`;

/* 선택하지 않은 대안(트레이드오프) 콜아웃 */
const Tradeoff = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  padding: 14px 16px;
  border-left: 3px solid ${theme.colors.accent};
  background: rgba(255, 50, 41, 0.04);
  border-radius: 0 8px 8px 0;
  .k {
    font-size: 12px;
    font-weight: 700;
    color: ${theme.colors.accent};
    white-space: nowrap;
    padding-top: 2px;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.gray600};
    line-height: 1.75;
  }
`;

/* Impact 카드: 목표 / 설계 산출물 구분 배지 */
const MetricKind = styled.span<{ $goal?: boolean }>`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: 100px;
  margin-bottom: 12px;
  background: ${({ $goal }) => ($goal ? "rgba(255, 50, 41, 0.08)" : theme.colors.gray100)};
  color: ${({ $goal }) => ($goal ? theme.colors.accent : theme.colors.gray500)};
`;

function DirectedFigure({ img, caption, direction }: { img?: string; caption?: string; direction?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <CheckerImage $img={img} />
      {caption && <FigureCaption>{img ? caption : `▢ ${caption}`}</FigureCaption>}
      {!img && direction && (
        <ImageDirection>
          <span className="tag">📌 들어갈 이미지</span>
          {direction.replace(/^들어갈 이미지:\s*/, "")}
        </ImageDirection>
      )}
    </figure>
  );
}

/* ════════════════════════════════
   REFLECTION
════════════════════════════════ */
const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;
const NoteCard = styled(Link)`
  display: block;
  padding: 24px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 12px;
  transition: border-color 0.2s, transform 0.2s;
  &:hover {
    border-color: ${theme.colors.black};
    transform: translateY(-2px);
  }
  &:hover .note-title {
    color: ${theme.colors.accent};
  }
  .note-tag {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    color: ${theme.colors.accent};
    background: rgba(255, 50, 41, 0.08);
    padding: 3px 11px;
    border-radius: 100px;
    margin-bottom: 12px;
  }
  .note-title {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: ${theme.colors.black};
    line-height: 1.4;
    margin-bottom: 8px;
    transition: color 0.2s;
  }
  .note-excerpt {
    font-size: 13px;
    color: ${theme.colors.gray600};
    line-height: 1.7;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .note-meta {
    font-size: 12px;
    color: ${theme.colors.gray500};
  }
`;
const NotesIntro = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray600};
  line-height: 1.7;
  margin: -8px 0 24px;
`;

const ReflectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ReflectionItem = styled.div`
  .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: ${theme.colors.gray600};
    line-height: 1.8;
  }
`;

/* ════════════════════════════════
   PROJECT NAV (prev / all / next)
════════════════════════════════ */
const ProjectNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  border-top: 1px solid ${theme.colors.gray200};
  padding-top: 28px;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 16px;
  }
`;

const NavItem = styled(Link)<{ $align?: "left" | "right" }>`
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-self: ${({ $align }) => ($align === "right" ? "end" : "start")};
  text-align: ${({ $align }) => ($align === "right" ? "right" : "left")};

  .dir {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${theme.colors.gray500};
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    color: ${theme.colors.black};
    transition: color 0.2s;
  }
  &:hover .name {
    color: ${theme.colors.accent};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    justify-self: center;
    text-align: center;
  }
`;

const NavAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.black};
  white-space: nowrap;
  transition:
    border-color 0.2s,
    color 0.2s;
  &:hover {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`;

/* ════════════════════════════════
   PAGE
════════════════════════════════ */
export default function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const relatedNotes = posts.filter((p) => p.relatedWork?.slug === slug);

  return (
    <>
      {/* Hero */}
      <Hero>
        <Container>
          <HeroBreadcrumb>
            <Link href="/works">Works</Link>
            <span>›</span>
            <span>{project.category}</span>
          </HeroBreadcrumb>

          <HeroLayout>
            <HeroLeft>
              <HeroTitle>{project.title}</HeroTitle>
              <HeroSubtitle>{project.subtitle}</HeroSubtitle>
              {project.heroContext && <HeroContext>{project.heroContext}</HeroContext>}
              <HeroDesc>{project.problemContext.domainDetail}</HeroDesc>

              <HeroTags>
                {project.tags.map((t) => (
                  <HeroTag key={t}>{t}</HeroTag>
                ))}
              </HeroTags>

              {/* InfoGrid: 3열 × 2행 */}
              <InfoGrid>
                <InfoItem>
                  <div className="label">역할</div>
                  <div className="value">{project.role}</div>
                </InfoItem>
                <InfoItem>
                  <div className="label">기간</div>
                  <div className="value">{project.year} ~</div>
                </InfoItem>
                <InfoItem>
                  <div className="label">유형</div>
                  <div className="value">{project.category.replace(" Service", "")}</div>
                </InfoItem>
                <InfoItem>
                  <div className="label">툴</div>
                  <div className="value">Figma</div>
                </InfoItem>
                <InfoItem>
                  <div className="label">클라이언트</div>
                  <div className="value">{project.client}</div>
                </InfoItem>
                <InfoItem>
                  <div className="label">Website</div>
                  {project.website ? (
                    <a className="link" href={project.website} target="_blank" rel="noopener noreferrer">
                      🔗 Link
                    </a>
                  ) : relatedNotes.length > 0 ? (
                    <a className="link" href="#related-notes">
                      비공개 · 관련 노트 {relatedNotes.length}
                    </a>
                  ) : (
                    <div className="value">비공개</div>
                  )}
                </InfoItem>
              </InfoGrid>
            </HeroLeft>

            <HeroImage $img={project.coverImage} />
          </HeroLayout>
        </Container>
      </Hero>

      {/* Impact */}
      <Section>
        <Container>
          <SectionLabel>Impact</SectionLabel>
          <ImpactGrid>
            {project.metrics.map((m, i) => (
              <ImpactCard key={i}>
                {m.kind && <MetricKind $goal={m.kind === "goal"}>{m.kind === "goal" ? "목표" : "설계 산출물"}</MetricKind>}
                <ImpactValue>{m.value}</ImpactValue>
                <ImpactLabel>{m.label}</ImpactLabel>
                {m.sub && <ImpactSub>{m.sub}</ImpactSub>}
              </ImpactCard>
            ))}
          </ImpactGrid>
        </Container>
      </Section>

      {/* Problem Context */}
      <Section $bg={theme.colors.gray100}>
        <Container>
          <SectionLabel>Problem Context</SectionLabel>
          <ContextGrid>
            <ContextBox>
              <div className="label">{project.problemContext.domain}</div>
              <p>{project.problemContext.domainDetail}</p>
              {project.problemContext.domainContextExtra && (
                <p style={{ marginTop: "12px", fontStyle: "italic" }}>{project.problemContext.domainContextExtra}</p>
              )}
            </ContextBox>
            <ContextBox>
              <div className="label">{project.problemContext.coreChallenge}</div>
              <p>{project.problemContext.coreChallengeDetail}</p>
            </ContextBox>
          </ContextGrid>
        </Container>
      </Section>

      {/* My Approach */}
      <Section>
        <Container>
          <SectionLabel>My Approach</SectionLabel>
          <ApproachRow>
            {project.approach.map((a) => (
              <ApproachStep key={a.step}>
                <div className="num">{a.step}</div>
                <div className="title">{a.title}</div>
                <div className="desc">{a.desc}</div>
              </ApproachStep>
            ))}
          </ApproachRow>
          {project.journeyImage && (
            <div style={{ marginTop: 28 }}>
              <DirectedFigure
                img={project.journeyImage.image}
                caption={project.journeyImage.caption}
                direction={project.journeyImage.direction}
              />
            </div>
          )}
        </Container>
      </Section>

      {/* Key Decisions */}
      <Section $bg={theme.colors.gray100}>
        <Container>
          <SectionLabel>Key Decisions</SectionLabel>
          {project.keyDecisions.map((area, i) => (
            <DecisionArea key={i}>
              <DecisionHeader>
                <span className="area">{area.area}</span>
                <span className="title">{area.areaTitle}</span>
              </DecisionHeader>
              <DecisionItems>
                {area.items.map((item, j) => (
                  <DecisionItem key={j}>
                    <div>
                      <span className="badge">{item.icon}</span>
                    </div>
                    <p>{item.body}</p>
                  </DecisionItem>
                ))}
              </DecisionItems>
              {(area.image || area.imageDirection) && (
                <div style={{ marginTop: 20 }}>
                  <DirectedFigure img={area.image} caption={area.imageCaption} direction={area.imageDirection} />
                </div>
              )}
              {area.tradeoff && (
                <Tradeoff>
                  <span className="k">선택하지 않은 길</span>
                  <p>{area.tradeoff}</p>
                </Tradeoff>
              )}
            </DecisionArea>
          ))}
        </Container>
      </Section>

      {/* Design Highlights */}
      <Section>
        <Container>
          <SectionLabel>Design Highlights</SectionLabel>
          {project.designHighlights.map((zone, i) => (
            <ZoneSection key={i}>
              <ZoneHeader>
                <div className="zone">{zone.zone}</div>
                <div className="title">{zone.title}</div>
                <div className="desc">{zone.desc}</div>
              </ZoneHeader>
              <CheckerImage $img={zone.image} />
            </ZoneSection>
          ))}
        </Container>
      </Section>

      {/* Reflection */}
      <Section $bg={theme.colors.gray100}>
        <Container>
          <SectionLabel>Reflection</SectionLabel>
          <ReflectionGrid>
            {project.reflection.map((r, i) => (
              <ReflectionItem key={i}>
                <div className="title">{r.title}</div>
                <p>{r.body}</p>
              </ReflectionItem>
            ))}
          </ReflectionGrid>
        </Container>
      </Section>

      {/* Related Notes */}
      {relatedNotes.length > 0 && (
        <Section id="related-notes">
          <Container>
            <SectionLabel>관련 노트</SectionLabel>
            <NotesIntro>
              이 프로젝트의 설계 판단과 배경을 더 깊이 정리한 글입니다.
            </NotesIntro>
            <NotesGrid>
              {relatedNotes.map((note) => (
                <NoteCard key={note.slug} href={`/post/${note.slug}`}>
                  <span className="note-tag">{note.tag}</span>
                  <div className="note-title">{note.title}</div>
                  <p className="note-excerpt">{note.excerpt}</p>
                  <div className="note-meta">{note.date}</div>
                </NoteCard>
              ))}
            </NotesGrid>
          </Container>
        </Section>
      )}

      {/* Project Nav: prev / all / next */}
      <Section>
        <Container>
          {(() => {
            const idx = projects.findIndex((p) => p.slug === slug);
            const prev = projects[(idx - 1 + projects.length) % projects.length];
            const next = projects[(idx + 1) % projects.length];
            return (
              <ProjectNav>
                <NavItem href={`/works/${prev.slug}`} $align="left">
                  <span className="dir">← 이전 프로젝트</span>
                  <span className="name">{prev.subtitle}</span>
                </NavItem>
                <NavAll href="/works">전체 프로젝트 보기</NavAll>
                <NavItem href={`/works/${next.slug}`} $align="right">
                  <span className="dir">다음 프로젝트 →</span>
                  <span className="name">{next.subtitle}</span>
                </NavItem>
              </ProjectNav>
            );
          })()}
        </Container>
      </Section>
    </>
  );
}
