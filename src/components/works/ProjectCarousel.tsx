"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import type { Project } from "@/data/projects";

const GAP = 20;
const VISIBLE = 2; // 데스크탑에서 한 번에 보이는 카드 수

const Carousel = styled.div`
  min-width: 0;
  width: 100%;
  position: relative;
`;

const Track = styled.div`
  display: flex;
  gap: ${GAP}px;
  min-width: 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 16px;
  }
`;

const ProjectCard = styled(Link)`
  /* 2개 노출: (100% - gap) / 2 · 카드 비율 510:560 */
  flex: 0 0 calc((100% - ${GAP}px) / 2);
  scroll-snap-align: start;
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 510 / 560;

  &:hover .proj-img {
    transform: scale(1.05);
  }
  &:hover .card-label {
    transform: translateY(0);
    box-shadow: 0 6px 24px rgba(23, 27, 32, 0.18);
  }
  &:hover .card-arrow {
    transform: translateX(3px);
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    /* 모바일: 1.5개 노출 (gap 16px 기준) */
    flex: 0 0 calc((100% - 16px) / 1.5);
  }
`;

const CardImage = styled.div<{ $img?: string }>`
  width: 100%;
  height: 100%;
  background: ${theme.colors.gray200} ${({ $img }) => ($img ? `url(${$img}) bottom center/cover no-repeat` : "")};
  overflow: hidden;
  border: 1px solid ${theme.colors.gray200};
  transition: transform 0.5s cubic-bezier(.23, 1, .32, 1);
`;

const CardLabel = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  color: #212529;
  letter-spacing: -0.4px;
  box-shadow: 0 0 3px 0 rgba(23, 27, 32, 0.15);
  transform: translateY(6px);
  transition:
    transform 0.4s cubic-bezier(.23, 1, .32, 1),
    box-shadow 0.4s cubic-bezier(.23, 1, .32, 1);
`;

const CardName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #212529;
  letter-spacing: -0.4px;
  line-height: 1.3;
`;

const CardDesc = styled.div`
  font-size: 14px;
  color: #868e96;
  letter-spacing: -0.3px;
  line-height: 1.45;
  margin-top: 4px;
`;

const CardArrow = styled.span`
  flex-shrink: 0;
  color: ${theme.colors.accent};
  font-size: 14px;
  transition: transform 0.3s cubic-bezier(.23, 1, .32, 1);
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  margin-top: 20px;
`;

const ArrowBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.gray300};
  background: white;
  color: ${theme.colors.black};
  font-size: 16px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    color 0.2s,
    opacity 0.2s;
  &:hover:not(:disabled) {
    border-color: ${theme.colors.accent};
    color: ${theme.colors.accent};
  }
  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 45%;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: -40px;
    }
  }
`;

const PageIndicator = styled.span`
  font-size: 14px;
  color: ${theme.colors.gray500};
  min-width: 46px;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;

export default function ProjectCarousel({ items }: { items: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(VISIBLE);

  // 모바일(sm 이하)에서는 1개씩 노출
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${theme.breakpoints.sm})`);
    const apply = () => setVisible(mq.matches ? 1 : VISIBLE);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const total = items.length;
  const maxIndex = Math.max(0, total - visible);
  const clamped = Math.min(index, maxIndex);

  // visible/총개수 변경 시 인덱스 보정
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, total - visible)));
  }, [visible, total]);

  const go = (next: number) => {
    const ni = Math.min(Math.max(0, next), maxIndex);
    setIndex(ni);
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    // 카드 1개 폭 + gap = 다음 카드의 offsetLeft 차이 (정확값)
    let step = track.clientWidth;
    if (cards.length >= 2) step = cards[1].offsetLeft - cards[0].offsetLeft;
    else if (cards[0]) step = cards[0].offsetWidth;
    track.scrollTo({ left: step * ni, behavior: "smooth" });
  };

  return (
    <Carousel>
      <Track ref={trackRef}>
        {items.map((p) => (
          <ProjectCard key={p.slug} href={`/works/${p.slug}`} data-card>
            <CardImage className="proj-img" $img={p.coverImage} />
            <CardLabel className="card-label">
              <div>
                <CardName>{p.subtitle}</CardName>
                {p.cardDesc && <CardDesc>{p.cardDesc}</CardDesc>}
              </div>
              <CardArrow className="card-arrow">→</CardArrow>
            </CardLabel>
          </ProjectCard>
        ))}
      </Track>

      {total > visible && (
        <Nav>
          <ArrowBtn type="button" aria-label="이전 프로젝트" onClick={() => go(clamped - 1)} disabled={clamped === 0}>
            ←
          </ArrowBtn>
          <PageIndicator>
            {clamped + 1} / {total}
          </PageIndicator>
          <ArrowBtn
            type="button"
            aria-label="다음 프로젝트"
            onClick={() => go(clamped + 1)}
            disabled={clamped === maxIndex}
          >
            →
          </ArrowBtn>
        </Nav>
      )}
    </Carousel>
  );
}
