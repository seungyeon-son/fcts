"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { LOGO_SRC } from "@/lib/site";

const FooterWrap = styled.footer`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  padding: 40px 0;
`;

const Inner = styled.div`
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

const LogoWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1;
  img {
    width: 76px;
    height: 42px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    align-items: center;
    height: 28px;
  }
`;
const Copy = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 11px;
  letter-spacing: 0.01em;
  line-height: 1.5;
`;

const Meta = styled.div`
  text-align: right;

  p {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.4);
    line-height: 1.9;
  }

  a {
    color: rgba(255, 255, 255, 0.4);
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Inner>
        <LogoWrap href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="FCTS design studio"
            width={76}
            height={42}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Copy>
            A design engineering group that transforms complexity into
            <br /> simplicity and establishes order in business.
          </Copy>
        </LogoWrap>
        <Meta>
          <p>© FCTS, operated by Design Inc. All rights reserved.</p>
          <p>
            <a href="mailto:au1gust8@gmail.com">E-mail: au1gust8@gmail.com</a>
          </p>
        </Meta>
      </Inner>
    </FooterWrap>
  );
}
