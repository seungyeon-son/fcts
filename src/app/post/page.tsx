"use client";

import Link from "next/link";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Container } from "@/styles/styled";
import { researchPosts } from "@/data/posts";
import { projects } from "@/data/projects";

const PageHead = styled.div`
  padding: 64px 0 40px;
  text-align: center;
`;
const PageTitle = styled.h1`
  font-size: clamp(36px, 4vw, 45px);
  font-weight: 700;
  letter-spacing: -0.8px;
  color: #343a40;
  margin-bottom: 16px;
`;
const PageSub = styled.p`
  font-size: 14px;
  color: #5c5b56;
  line-height: 1.7;
`;

const List = styled.div`
  padding: 8px 0 96px;
`;
const PostRow = styled(Link)`
  display: block;
  padding: 28px 0;
  border-top: 1px solid ${theme.colors.gray200};
  &:last-child {
    border-bottom: 1px solid ${theme.colors.gray200};
  }
  &:hover .title {
    color: ${theme.colors.accent};
  }
`;
const Tag = styled.span`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  color: ${theme.colors.accent};
  background: rgba(255, 50, 41, 0.08);
  padding: 3px 11px;
  border-radius: 100px;
  margin-bottom: 12px;
`;
const Title = styled.div`
  font-size: clamp(18px, 3vw, 22px);
  font-weight: 700;
  letter-spacing: -0.3px;
  color: ${theme.colors.black};
  line-height: 1.35;
  margin-bottom: 10px;
  transition: color 0.2s;
`;
const Excerpt = styled.p`
  font-size: 14px;
  color: ${theme.colors.gray600};
  line-height: 1.75;
  margin-bottom: 12px;
  max-width: 680px;
`;
const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${theme.colors.gray500};
`;
const Dot = styled.span`
  color: ${theme.colors.gray300};
`;

const Empty = styled.div`
  text-align: center;
  color: ${theme.colors.gray500};
  font-size: 14px;
  padding: 48px 0;
`;

export default function PostListPage() {
  return (
    <>
      <PageHead>
        <Container>
          <PageTitle>Note</PageTitle>
          <PageSub>
            Research and Insight - 작업하며 남긴 생각과 기록.
            <br />
            결과물이 아니라 결정의 과정을 담았습니다.
          </PageSub>
        </Container>
      </PageHead>

      <Container>
        <List>
          {researchPosts.length === 0 && <Empty>아직 발행된 글이 없습니다.</Empty>}
          {researchPosts.map((post) => {
            const rel = post.relatedWork;
            const relatedName = rel ? (projects.find((p) => p.slug === rel.slug)?.subtitle ?? rel.label) : null;
            return (
              <PostRow key={post.slug} href={`/post/${post.slug}`}>
                <Tag>{post.tag}</Tag>
                <Title className="title">{post.title}</Title>
                <Excerpt>{post.excerpt}</Excerpt>
                <Meta>
                  <time dateTime={post.dateISO}>{post.date}</time>
                  {rel && (
                    <>
                      <Dot>•</Dot>
                      <span>{relatedName}</span>
                    </>
                  )}
                </Meta>
              </PostRow>
            );
          })}
        </List>
      </Container>
    </>
  );
}
