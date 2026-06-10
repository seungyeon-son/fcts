import styled, { css, createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-size: 16px; scroll-behavior: smooth; }
  body {
    font-family: ${theme.fonts.sans};
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
  }
  img { max-width: 100%; display: block; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; border: none; background: none; font-family: inherit; }
`

/* ── Layout ── */
export const Container = styled.div`
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding: ${theme.container.padding};
`

export const Section = styled.section<{ $bg?: string }>`
  padding: 96px 0;
  background: ${({ $bg }) => $bg ?? theme.colors.white};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 64px 0;
  }
`

/* ── Typography ── */
export const Heading1 = styled.h1`
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
`

export const Heading2 = styled.h2`
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
`

export const Heading3 = styled.h3`
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 600;
  line-height: 1.3;
`

export const BodyText = styled.p`
  font-size: 15px;
  line-height: 1.75;
  color: ${theme.colors.gray600};
`

export const Caption = styled.span`
  font-size: 13px;
  color: ${theme.colors.gray500};
`

/* ── Buttons ── */
export const ButtonPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  background: ${theme.colors.accent};
  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover { background: ${theme.colors.accentHover}; }
`

export const ButtonOutline = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 18px;
  border: 1.5px solid currentColor;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  transition: opacity 0.2s;

  &:hover { opacity: 0.7; }
`

/* ── Cards ── */
export const Card = styled.div`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray200};
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
`

/* ── Badge ── */
export const Badge = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  background: ${({ $color }) => $color ?? theme.colors.gray100};
  color: ${({ $color }) => ($color ? theme.colors.white : theme.colors.gray700)};
`

/* ── Divider ── */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.gray200};
`

/* ── Grid layouts ── */
export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const Grid3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const Grid4 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

/* ── ImagePlaceholder ── */
export const ImageBox = styled.div<{ $ratio?: string; $bg?: string }>`
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio ?? '16/9'};
  background: ${({ $bg }) => $bg ?? theme.colors.gray200};
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;

  img { width: 100%; height: 100%; object-fit: cover; }
`

/* ── Tag row ── */
export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Tag = styled.span`
  padding: 5px 12px;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 100px;
  font-size: 13px;
  color: ${theme.colors.gray600};
`

/* ── SectionLabel ── */
export const SectionLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${theme.colors.gray500};
  margin-bottom: 16px;
`

/* ── MetricBox ── */
export const MetricBox = styled.div`
  padding: 32px 24px;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 8px;
`

export const MetricValue = styled.div`
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${theme.colors.black};
`

export const MetricLabel = styled.div`
  font-size: 13px;
  color: ${theme.colors.gray500};
  margin-top: 4px;
`
