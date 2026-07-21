# FCTS 웹 - SEO 진행현황

_최종 업데이트: 2026-06-19_

## 배포 현황

- **personal 배포**: https://seungyeondesign.vercel.app (`NEXT_PUBLIC_SITE_VARIANT` 미설정/기본 → About 사이트)
- **team 배포**: https://studio-fcts.vercel.app (`NEXT_PUBLIC_SITE_VARIANT=team` → Process 사이트)
- 커스텀 도메인(fcts.co.kr 등): **미구매 / 미연결** - 사이트 디벨롭 후 추후 진행 예정

## 현재 결정

- 지금은 vercel.app 도메인으로 사이트 개발에 집중.
- 도메인은 **나중에 구매 후 연결**, 그 시점에 검색엔진 등록·소유권 인증 진행.
- vercel.app도 색인/SEO 가능(production 배포는 noindex 아님)하지만, 본격 검색 노출 작업은 커스텀 도메인 연결 이후로 보류.

---

## ✅ 완료 (코드 반영됨)

- 루트 `src/app/layout.tsx` 메타데이터 보강: `metadataBase`, 한국어 description, `keywords`, title 템플릿(`%s | FCTS 디자인 스튜디오`), `alternates.canonical`, `robots`(index/follow), OG `locale: ko_KR`.
- `src/app/robots.ts` 신규 - sitemap 링크 포함.
- `src/app/sitemap.ts` 신규 - 정적 페이지 + 글(posts) + 프로젝트(works) 자동 포함.
- 페이지별 메타데이터 layout 추가: `/about`, `/works`, `/post`, `/process`, `/design-process`.
- 동적 상세 메타데이터: `/post/[slug]`, `/works/[slug]` (`generateMetadata`).
- `src/lib/site.ts`에 `SITE_URL` 추가 - 변형별 자동 분기 + `NEXT_PUBLIC_SITE_URL` 오버라이드 지원.
  - 도메인 연결 시 Vercel 환경변수에 `NEXT_PUBLIC_SITE_URL=https://<도메인>` 한 줄만 넣으면 canonical·OG·sitemap·robots 전부 따라 바뀜.
- `.env.example`에 `NEXT_PUBLIC_SITE_URL` 문서화.
- 검증: 스코프 `tsc --noEmit` 통과. (전체 빌드는 맥에서 확인 필요 - 리눅스 샌드박스는 네이티브 모듈 불일치로 빌드 불가)

---

## ⏳ 보류 / 추후 (도메인 구매 후)

1. **커스텀 도메인 구매 → Vercel 두 프로젝트에 각각 연결.**
2. Vercel 환경변수 `NEXT_PUBLIC_SITE_URL`을 새 도메인으로 설정 후 재배포.
3. **소유권 인증** - vercel.app/커스텀 도메인 공통:
   - DNS TXT(도메인 속성) 방식은 vercel.app에선 불가(존 미소유). 커스텀 도메인 연결하면 DNS 방식 가능.
   - 그 전/대안: **URL 접두어 속성 + HTML 메타태그**(`metadata.verification`) 또는 HTML 파일 업로드.
4. **구글 서치콘솔 + 네이버 서치어드바이저 등록 → `sitemap.xml` 제출.** (메타태그만으론 색인 시작 안 됨)
5. **중복 콘텐츠 정리** - personal/team 두 배포가 Works·Note를 거의 동일하게 노출. 하나를 메인으로 두고 cross-domain canonical 지정하거나 한쪽 noindex 결정 필요.
6. (선택) 메타태그 인증 스캐폴드: `metadata.verification`에 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` 연결 - 코드 받으면 env에 붙여넣기만 하도록.

---

## 🔧 정리 필요 (즉시)

- **`tmp/` 폴더 삭제**: 빌드 시도가 프로젝트에 남긴 잔재. 맥에서 `rm -rf tmp` 실행. 안 지우면 로컬 `tsc`/`build`에서 타입 에러 발생.
- ⚠️ **GitHub 토큰 폐기**: `git remote`의 `fcts` 리모트 URL에 개인 액세스 토큰이 평문 노출됨. revoke 후 재발급, 리모트 URL은 토큰 없는 형태로 교체 권장.

---

## 📦 외부 채널 콘텐츠 (작성 완료, 별도 보관)

- 'AI UX 인지마찰 5원칙' → 네이버 블로그 글 + 인스타 9장 카드뉴스로 재가공 완료(유입 CTA 포함).
- 게시 채널·일정은 미정. 도메인 연결 후 링크를 새 도메인으로 교체할 것.
