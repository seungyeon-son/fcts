"use client";

import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Container, Section } from "@/styles/styled";
import WorksCategories from "@/components/works/WorksCategories";

const PageHeading = styled.h1`
  text-align: center;
  font-size: clamp(36px, 4vw, 45px);
  font-weight: 800;
  letter-spacing: -0.02em;
  padding: 64px 0 104px;
  color: ${theme.colors.black};
`;

export default function WorksPage() {
  return (
    <>
      <Section style={{ padding: 0 }}>
        <Container style={{ paddingBottom: 100 }}>
          <PageHeading>Works</PageHeading>
          <WorksCategories />
        </Container>
      </Section>
    </>
  );
}
