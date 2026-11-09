# FCTS 웹 - 사이트 개요

_최종 업데이트: 2026-10-28_

FCTS(From Complex To Simple)는 복잡한 B2B·B2C 서비스를 단순하고 명료한 UX로 재설계하는 작업을 모아 둔 **작업물 아카이브**다.
하나의 소스로 **용도가 다른 두 사이트**를 배포한다.

---

## 1. 제작 의도 — 두 개의 배포

| 구분 | personal (기본값) | team |
|---|---|---|
| 용도 | **개인 포트폴리오** (이력서·브랜딩) | **외주 영업용** — 크몽에 등록한 사이트 |
| 주소 | https://seungyeondesign.vercel.app | https://studio-fcts.vercel.app |
| `NEXT_PUBLIC_SITE_VARIANT` | 미설정 또는 `personal` | `team` |
| GNB | About / Works / Note / Contact | Process / Works / Note / Contact |
| 사이트명 (`SITE_NAME`) | FCTS design studio | Design Studio - FCTS |
| 로고 | `public/img/logo-personal.svg` | `public/img/logo-team.svg` |

- 같은 작업물(Works)과 글(Note)을 개인 브랜딩과 외주 영업 **두 용도로 함께 쓰려는 구조**다.
- 그래서 **두 배포에 같은 콘텐츠가 나오는 것은 의도한 것**이다. 버그가 아니다.
- Vercel 프로젝트도 두 개이며, 환경변수만 다르게 둔다.

## 2. 분기 방식

모든 분기는 [`src/lib/site.ts`](../src/lib/site.ts) 한 파일에 모여 있다.

| 상수 | 역할 | 사용처 |
|---|---|---|
| `SITE_VARIANT` | `"team"` \| `"personal"` | 아래 상수 계산 |
| `SITE_URL` | canonical·OG·sitemap·robots 기준 절대 URL. `NEXT_PUBLIC_SITE_URL`이 있으면 우선 | `app/layout.tsx`, `sitemap.ts`, `robots.ts` |
| `SITE_NAME` | og:site_name, 구조화 데이터 | `app/layout.tsx` |
| `leadLink` | GNB 첫 메뉴 (About ↔ Process) | `components/layout/Header.tsx` |
| `LOGO_SRC` | 헤더·푸터 로고 | `Header.tsx`, `Footer.tsx` |
| `SHOW_HOME_INTRO` | 홈 F·C·T·S 섹션의 자기소개 + About CTA (personal 전용) | `app/page.tsx` |

> 분기는 **GNB 첫 메뉴, 로고, 사이트명, URL, 홈 자기소개 블록**만 바꾼다. 라우트 자체는 두 배포 모두에 존재한다.
> (예: team 배포에서도 `/about`을 직접 입력하면 열린다.)
> 배포별로 다르게 보여야 하는 것이 생기면 `site.ts`에 상수를 추가하는 방식을 따른다.

## 3. 페이지 구성

| 경로 | 내용 | 노출 |
|---|---|---|
| `/` | 홈 — 히어로 영상, 프로젝트 캐러셀, 최근 Note | 공통 |
| `/about` | 개인 소개·이력 | personal GNB |
| `/process` | 스튜디오(외주) 소개·작업 프로세스, 크몽·인스타그램 바로가기 | team GNB |
| `/design-process` | 디자인 프로세스 상세 | `/about`에서 링크 |
| `/works` | 프로젝트 목록 | 공통 |
| `/works/[slug]` | 프로젝트 케이스 스터디 | 공통 |
| `/post` | Note(글) 목록 — GNB 라벨은 "Note" | 공통 |
| `/post/[slug]` | Note 상세 | 공통 |
| `/robots.txt`, `/sitemap.xml` | `robots.ts`, `sitemap.ts`가 생성 | 공통 |

Contact는 페이지가 아니라 `mailto:` 링크다.

## 4. 콘텐츠 관리

CMS 없이 **TypeScript 데이터 파일**로 관리한다. 항목을 추가하면 목록·상세·sitemap에 자동으로 반영된다.

### Works — [`src/data/projects.ts`](../src/data/projects.ts)
- `Project` 타입: 문제 맥락 → 접근(approach) → 핵심 결정(keyDecisions) → 디자인 하이라이트 → 회고 순서의 **케이스 스터디 구조**.
- `metrics[].kind`: `"result"`(실제 결과) / `"goal"`(아직 측정 전 목표치). 측정하지 않은 수치를 결과처럼 쓰지 않으려는 구분이다.
- `keyDecisions[].relatedNoteSlugs`: 해당 결정을 고민한 Note 글로 연결.
- 이미지가 없으면 `imageDirection` 등의 문구로 placeholder를 보여 준다.
- 현재 프로젝트: LXP 모바일 앱 로그인 개선, CX AI 도움말 챗봇, UBION 글로벌 학점은행제, grecture(AI고전), SDT Design System, SDT CLOUD(MLOps), SunNano, 파티마의 성모 프란치스코 수녀회, Dear Klairs, DTS Dashboard.
- 이미지: `public/img/works/`

### Note — [`src/data/posts.ts`](../src/data/posts.ts)
- `Post.body`는 블록 배열(`lead`, `heading`, `paragraph`, `quote`, `list`, `callout`, `image`, `table`).
- `category`: `"Research and Insight"` | `"News"`.
- `relatedWork`: 관련 Works 케이스로 연결. **Works ↔ Note가 서로 링크되는 구조**.
- 이미지: `public/img/posts/`

## 5. 기술 스택

- Next.js 16 (App Router) · React 19 · TypeScript
- 스타일: **styled-components** (`src/lib/registry.tsx`로 SSR 등록, `src/styles/theme.ts` 토큰). Tailwind 4도 설치돼 있다.
- 개발 서버: `npm run dev` (webpack 모드). turbopack은 `npm run dev:turbo`.
- ⚠️ 이 Next.js는 버전 차이가 커서 작업 전 `node_modules/next/dist/docs/`를 확인한다 ([AGENTS.md](../AGENTS.md)).

## 6. 디렉터리

```
src/
  app/          라우트 (페이지별 layout.tsx에 메타데이터)
  components/   layout/(Header, Footer), works/(ProjectCarousel)
  data/         projects.ts, posts.ts — 콘텐츠 원본
  hooks/        useInView (스크롤 모션)
  lib/          site.ts (배포 분기), registry.tsx (styled-components)
  styles/       theme.ts, styled.ts
  img/          로고·히어로 영상
public/img/     works/, posts/, 로고, OG 이미지
docs/           SITE_OVERVIEW.md (이 문서), SEO_PROGRESS.md
```

## 7. 현재 상태와 보류 사항

- **도메인**: 정식 도메인을 아직 사지 않았다. vercel.app 주소로 운영 중.
- **서치콘솔·네이버 서치어드바이저 등록은 보류** — 도메인 구매 뒤 진행한다. 자세한 내용은 [SEO_PROGRESS.md](SEO_PROGRESS.md).
- 도메인을 연결하면 각 Vercel 프로젝트의 `NEXT_PUBLIC_SITE_URL`만 바꾸면 canonical·OG·sitemap이 함께 바뀐다.
- `caseStudies`(`projects.ts` 하단)는 더미 데이터("Title Title…")만 들어 있는데, 홈(`app/page.tsx`)의 News 영역이 이 값을 그대로 보여 준다.
