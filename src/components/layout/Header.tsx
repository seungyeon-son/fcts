"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { theme } from "@/styles/theme";

/* ── Top Announcement Banner ── */


const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray200};
`;

const Inner = styled.div`
  max-width: ${theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  line-height: 1;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  font-size: 15px;
  font-weight: ${({ $active }) => ($active ? "700" : "400")};
  color: ${({ $active }) => ($active ? theme.colors.black : theme.colors.gray600)};
  transition: color 0.15s;
  &:hover {
    color: ${theme.colors.black};
  }
`;

/* Contact = 텍스트 + 빨간 원형 버튼 */
const ContactWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #212529;
  text-align: center;
  font-family: "Pretendard Variable";
  letter-spacing: -0.4px;
  font-weight: 400;
  /* color: ${theme.colors.gray600}; */
  transition: color 0.15s;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 0 0 0 16px;
  height: 44px;
  &:hover {
    color: ${theme.colors.black};
  }
  &:hover .circle {
    background: ${theme.colors.accentHover};
  }
`;

const ContactCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${theme.colors.accent};
  color: white;
  font-size: 14px;
  transition: background 0.15s;
`;

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      <Nav>
        <Inner>
          <LogoWrap href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.svg" alt="FCTS design studio" width={76} height={42} />
          </LogoWrap>
          <NavLinks>
            <NavLink href="/about" $active={pathname === "/about"}>
              About
            </NavLink>
            <NavLink href="/works" $active={pathname.startsWith("/works")}>
              Works
            </NavLink>
            <NavLink href="/research" $active={pathname === "/research"}>
              Process
            </NavLink>
            <NavLink href="/post" $active={pathname.startsWith("/post")}>
              Note
            </NavLink>
            <ContactWrap href="mailto:au1gust8@gmail.com">
              Contact
              <ContactCircle className="circle">→</ContactCircle>
            </ContactWrap>
          </NavLinks>
        </Inner>
      </Nav>
    </>
  );
}
