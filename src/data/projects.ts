export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  cardDesc?: string;
  category: "B2B UX Service" | "B2C UX Service" | "Web Service" | "UX Planning/Branding";
  client: string;
  tags: string[];
  year: string;
  role: string;
  metrics: { value: string; label: string; sub?: string }[];
  coverImage?: string;
  images?: string[];
  heroContext?: string;
  problemContext: {
    domain: string;
    domainDetail: string;
    domainContextExtra?: string;
    coreChallenge: string;
    coreChallengeDetail: string;
  };
  approach: { step: number; title: string; desc: string }[];
  keyDecisions: {
    area: string;
    areaTitle: string;
    items: { icon: string; title: string; body: string }[];
  }[];
  designHighlights: { zone: string; title: string; desc: string; image?: string }[];
  reflection: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "global-credit-bank",
    title: "글로벌 장벽을 허문\n학위 취득 플랫폼 서비스 디자인",
    subtitle: "글로벌 학점은행제",
    cardDesc: "복잡한 학점 취득 플로우를 3-Zone 구조로 재설계한 프로젝트",
    coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=75",
    category: "B2C UX Service",
    client: "글로벌 학점은행제",
    tags: ["UX", "B2C", "Web"],
    year: "2024",
    role: "UX Designer",
    metrics: [
      { value: "3가지", label: "핵심 사용자 여정 단순화", sub: "가입 → 수강신청 → 학점 취득" },
      { value: "3-Zone", label: "정보 구조 재설계", sub: "discover · 1·1·1 학습 · 결제" },
      { value: "65%+", label: "목표 완강률 달성", sub: "기존 대비 → 1·1·1 달성" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "글로벌 학점은행제는 국내외 인정 학점을 통합해 학위를 취득할 수 있는 서비스입니다. 하지만 복잡한 제도 안내와 분산된 정보 구조로 인해 사용자가 첫 접점에서 이탈하는 비율이 높았습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        '사용자는 "내가 어떤 과목을 들어야 졸업할 수 있는지"를 파악하는 데 평균 3회 이상 문의가 필요했고, 수강 계획 수립부터 결제까지 이어지는 플로우가 단절되어 있었습니다.',
    },
    approach: [
      { step: 1, title: "리서치", desc: "사용자 인터뷰 및 경쟁사 분석" },
      { step: 2, title: "Zone 탐색", desc: "3-Zone 정보구조 설계" },
      { step: 3, title: "Zone 분석", desc: "각 존 별 사용자 흐름 정의" },
      { step: 4, title: "프로토타입", desc: "와이어프레임 → 프로토타입" },
      { step: 5, title: "UI 디자인", desc: "최종 UI 및 디자인 시스템 완성" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "IA 탐색 경로 — Zone 구조로 정리 하기",
        items: [
          {
            icon: "현황",
            title: "",
            body: '기존 메뉴는 제도 중심으로 구성되어 있어, 처음 방문한 사용자가 "나에게 맞는 과목"을 찾기까지 평균 7번 이상 클릭이 발생했습니다.',
          },
          {
            icon: "목표",
            title: "",
            body: "3-Zone 구조(Discover → 학습 → 결제)로 사용자 여정을 선형화하여 전환율을 높이는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Zone 기반 네비게이션을 설계해 사용자가 현재 위치와 다음 단계를 직관적으로 파악할 수 있도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "각 Zone의 진입·이탈 포인트를 명확히 정의하고, 전환 퍼널 내 이탈 가능 지점을 최소화했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "학점 인정 플로우를 3단계로 압축하기",
        items: [
          {
            icon: "현황",
            title: "",
            body: "학점 인정 신청 과정이 8단계로 구성되어 있었고, 각 단계 사이에 외부 시스템으로 이동해야 하는 구조였습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "학점 인정 신청을 3단계 이내로 압축하고, 전 과정을 플랫폼 내부에서 완결할 수 있도록 설계했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "스텝 인디케이터와 실시간 자격 확인 모듈을 도입해 사용자가 신청 가능 여부를 즉시 확인할 수 있게 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "문서 업로드, 검토, 승인 알림을 하나의 대시보드에서 관리하는 통합 뷰를 설계했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Zone 1",
        title: "Discover — 나에게 맞는 과목 찾기",
        desc: "사용자 목표(취득 학위)를 입력하면 필요 과목을 자동 추천하는 퍼스널라이즈드 플로우를 설계했습니다.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=75",
      },
      {
        zone: "Zone 2",
        title: "학습 — 완강률을 높이는 학습 경험",
        desc: "강의 페이지 내 진도 시각화와 학점 누적 현황 위젯을 배치해 동기 부여를 강화했습니다.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=75",
      },
      {
        zone: "Zone 3",
        title: "결제 — 신뢰 기반 전환 설계",
        desc: "가격 투명성과 환불 정책을 결제 화면에 선명하게 노출해 이탈률을 낮췄습니다.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "제도의 복잡성을 UI로 단순화하는 것의 한계와, 사용자 교육과 UI 설계가 함께 가야 한다는 것을 배웠습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "모바일 환경에서의 문서 업로드 UX는 기술 제약으로 인해 완전히 해결하지 못한 과제로 남았습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "학점 계획 시뮬레이터를 도입해 사용자가 졸업까지의 로드맵을 직접 시각화할 수 있는 기능을 고도화할 예정입니다.",
      },
    ],
  },
  {
    slug: "humanities-lecture",
    title: "완강을 65%를 목표로 설계한\n고등학생용 인문학 강의 페이지",
    subtitle: "Gracture",
    cardDesc: "완강률 65%를 목표로 학습 지속성을 높인 UX 프로젝트",
    coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=75",
    category: "B2C UX Service",
    client: "Gracture",
    tags: ["UX", "B2C", "Mobile", "Web"],
    year: "2024",
    role: "UX Designer",
    metrics: [
      { value: "+65%", label: "완강률 목표 달성", sub: "설계 기반 UX 구조 적용" },
      { value: "+60%", label: "수강생 재등록률", sub: "코호트 1기 기준" },
      { value: "+4회", label: "평균 강의 접속 빈도", sub: "주간 기준 목표치" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "gracture는 고등학생 대상 인문학 온라인 강의 플랫폼입니다. 기존 플랫폼들은 수강 중단율이 높았으며, 특히 청소년 사용자의 경우 학습 지속성이 낮은 문제가 있었습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        '"수강 중 흥미를 잃는 지점이 어디인가"를 데이터로 추적한 결과, 3강 이후 이탈률이 급격히 상승했습니다. 강의 자체가 아닌 "지속하는 이유"의 부재가 핵심 원인이었습니다.',
    },
    approach: [
      { step: 1, title: "데이터 분석", desc: "기존 수강 데이터 및 이탈 패턴 분석" },
      { step: 2, title: "동기 인터뷰", desc: "사용자 학습 동기 인터뷰" },
      { step: 3, title: "KPI 정의", desc: "완강률 목표 지표 설정" },
      { step: 4, title: "경쟁 분석", desc: "경쟁 플랫폼 UX 벤치마킹" },
      { step: 5, title: "전략 수립", desc: "학습 지속성 설계 전략 수립" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "흩어진 학습 정보를 대시보드 하나로 통합",
        items: [
          {
            icon: "현황",
            title: "",
            body: "수강생은 강의 목록, 진도 현황, 과제 제출 페이지가 각각 분리되어 있어 학습 상태를 파악하기 위해 3개 이상의 페이지를 오가야 했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "대시보드 1개에서 진도, 과제, 다음 강의를 모두 확인할 수 있는 통합 학습 홈을 설계했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "학습 스트릭(연속 수강일) 시각화와 뱃지 시스템을 도입해 게이미피케이션 효과를 더했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: '"오늘 들어야 할 강의" 카드를 홈 최상단에 배치해 재방문 시 즉시 학습으로 연결되는 경험을 설계했습니다.',
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "강의 플레이어 안에서 학습이 끊기지 않도록",
        items: [
          {
            icon: "현황",
            title: "",
            body: "강의 플레이어가 단순 영상 재생 기능만 제공해 학습 맥락이 단절되는 문제가 있었습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "강의 플레이어 내에 핵심 개념 요약, 노트 작성, 질문 기능을 통합한 올인원 학습 화면을 설계했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "강의 시청 중 주요 개념에서 자동으로 퀴즈가 팝업되는 인터랙션을 기획해 능동적 학습을 유도했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: '강의 완료 후 "다음 강의 예고" 화면을 5초 카운트다운과 함께 제공해 연속 시청률을 높였습니다.',
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "강의 목록 (강의 목록)",
        title: "코스 구조 시각화",
        desc: "전체 커리큘럼을 타임라인 형태로 표현해 학습 여정 전체를 한눈에 파악할 수 있도록 했습니다.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&q=75",
      },
      {
        zone: "강의 1강",
        title: "완강 의식 설계",
        desc: "각 강의 완료 시 성취 애니메이션과 다음 강의 예고로 이어지는 서사적 경험을 만들었습니다.",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&q=75",
      },
      {
        zone: "수강 신청",
        title: "수강 전환 설계",
        desc: "체험 강의 → 수강 신청 → 결제의 3단계 퍼널을 최소화하고 각 단계의 가치를 명확히 전달했습니다.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "청소년 사용자는 성취감에 강하게 반응한다는 것을 확인했고, 학습 맥락을 유지하는 UI 설계가 완강률에 직접적인 영향을 준다는 것을 배웠습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "부모와 자녀가 함께 사용하는 패밀리 계정 UX는 범위 초과로 다음 버전으로 미뤄졌습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "학습 스트릭 기능과 소셜 학습(같은 강의 수강생 간 소통) 기능을 고도화해 커뮤니티 기반 완강률 향상을 실험할 계획입니다.",
      },
    ],
  },
  {
    slug: "b2b-design-system",
    title: "두 B2B 제품의 일관성을 구축한\n디자인 시스템 — UI Kit이 아닌 운영 원칙",
    subtitle: "B2B Design System",
    cardDesc: "두 B2B 제품의 일관성을 만든 운영 원칙 중심 디자인 시스템",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=75",
    category: "B2B UX Service",
    client: "SDT Design System",
    tags: ["Design System", "Publishing", "Figma"],
    year: "2024",
    role: "Design System Lead / Sole",
    metrics: [
      { value: "2개", label: "제품 통합", sub: "공통 DS 적용" },
      { value: "48+", label: "공통 컴포넌트", sub: "원자 30 + 분자 18개" },
      { value: "3 레이어", label: "계층 구조", sub: "Foundation → Pattern → Figma/Components" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "두 B2B SaaS 제품이 각자의 디자인 언어로 개발되어 있어, 동일 기업 내 제품임에도 불구하고 UX가 전혀 다른 문제가 있었습니다. 개발팀은 동일한 컴포넌트를 제품별로 두 번씩 구현하는 비효율이 발생했습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        '"디자이너는 UI Kit을 만들었지만, 개발자는 쓰지 않는다"는 피드백이 반복됐습니다. 운영 원칙 없이 컴포넌트만 존재하는 디자인 시스템은 실질적인 일관성을 만들지 못했습니다.',
    },
    approach: [
      { step: 1, title: "두 제품 감사", desc: "기존 두 제품의 UI 컴포넌트 전수 감사" },
      { step: 2, title: "Foundation", desc: "색상·타이포·스페이싱 토큰 정의" },
      { step: 3, title: "Atomic 구성", desc: "원자 단위 컴포넌트 설계" },
      { step: 4, title: "운영 체계", desc: "컴포넌트 기여 및 업데이트 프로세스 정의" },
      { step: 5, title: "가이드 & 핸드오프", desc: "문서화 및 핸드오프" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "Foundation → Pattern → Component 3계층 구조",
        items: [
          {
            icon: "현황",
            title: "",
            body: "두 제품은 컬러, 간격, 타이포그래피가 각각 다르게 정의되어 있었으며, 공통 기준이 없었습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "Foundation 레이어(토큰) → Pattern 레이어(공통 패턴) → Component 레이어 순으로 3단계 계층 구조를 정의했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Foundation의 변경이 Product-specific 컴포넌트까지 자동으로 반영되는 토큰 연동 구조를 Figma Variables로 구현했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: '각 컴포넌트에 "이 컴포넌트를 쓸 때 / 쓰지 말 때" 사용 가이드를 필수로 포함시켰습니다.',
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "디자이너와 개발자가 같은 언어로 핸드오프하도록",
        items: [
          {
            icon: "현황",
            title: "",
            body: "디자이너와 개발자 간 컴포넌트 명칭이 달라 핸드오프 과정에서 혼선이 빈번하게 발생했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "Figma 컴포넌트 명칭을 개발 코드베이스의 네이밍 컨벤션과 1:1로 일치시켜 핸드오프 마찰을 제거했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Storybook과 Figma를 연동해 디자이너가 실제 구현된 컴포넌트를 Figma 내에서 직접 확인할 수 있는 환경을 구축했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: '컴포넌트 변경 시 영향 범위를 자동으로 파악할 수 있는 "Impact Map" 문서를 함께 운영했습니다.',
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "SDT 디자인 시스템 — 1단계 토큰",
        title: "토큰 기반 Foundation",
        desc: "Color, Spacing, Typography, Radius 토큰을 Figma Variables로 정의해 라이트/다크 모드를 단일 컴포넌트로 지원했습니다.",
        image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=1200&q=75",
      },
      {
        zone: "SDT 컴포넌트 — Atomic Design",
        title: "Atomic 컴포넌트 구조",
        desc: "Button, Input, Badge 등 30개 원자 컴포넌트를 기반으로 Form, Card, Table 등 18개 분자 컴포넌트를 조립했습니다.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=75",
      },
      {
        zone: "운영 프로세스",
        title: "기여 & 변경 관리 프로세스",
        desc: "새 컴포넌트 제안부터 리뷰, 머지, 배포까지의 프로세스를 문서화해 DS를 살아있는 시스템으로 운영했습니다.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: '디자인 시스템은 도구가 아니라 조직 문화임을 배웠습니다. 기술보다 "누가 어떻게 기여하고 운영하는가"가 더 중요한 요소였습니다.',
      },
      {
        title: "해결하지 못한 것",
        body: "다크 모드 전환 시 일부 복합 컴포넌트에서 토큰 적용이 누락되는 엣지 케이스를 완전히 해결하지 못했습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "Design Token을 JSON으로 관리하고 Style Dictionary로 CSS Variables, iOS, Android 토큰을 동시에 생성하는 멀티플랫폼 토큰 파이프라인을 구축할 계획입니다.",
      },
    ],
  },
  {
    slug: "mlops-b2b-dashboard",
    heroContext:
      "양자 컴퓨팅 기업에서 초고밀도 데이터를 다루며 얻은 시각으로, 복잡한 파이프라인을 하나의 화면으로 압축했습니다.",
    title: "MLOps 4단계를 하나의 노드 그래프로\n시각화한 B2B 대시보드",
    subtitle: "SDT CLOUD",
    cardDesc: "4단계 MLOps 파이프라인을 단일 노드 그래프로 시각화한 B2B 대시보드",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    category: "B2B UX Service",
    client: "SDT CLOUD",
    tags: ["B2B", "ML", "Dashboard"],
    year: "2024",
    role: "Product Designer / Planning",
    metrics: [
      { value: "4 in 1", label: "4단계 통합", sub: "MLOps 파이프라인 단일 뷰" },
      { value: "11층", label: "데이터 계층", sub: "레이어 구조 시각화" },
      { value: "23분↓", label: "오류 탐지 시간 단축", sub: "기존 평균 23분 → 개선 목표" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "ML 엔지니어는 데이터 준비 → 모델 학습 → 평가 → 배포의 4단계 파이프라인을 각각 다른 도구에서 관리했습니다. 전체 파이프라인 상태를 파악하기 위해 4개 화면을 오가야 했습니다.",
      domainContextExtra:
        "양자 컴퓨팅 환경에서는 하나의 연산 결과가 수천 개의 경우의 수를 동시에 담습니다. 그 환경에서 일하면서, '상태를 즉각 읽을 수 없는 인터페이스'가 얼마나 큰 리스크인지 체감했습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        '"파이프라인 어느 단계에서 오류가 났는지 바로 알 수 없다"는 것이 가장 빈번한 불만이었습니다. 오류 탐지부터 수정까지 평균 23분이 소요되고 있었습니다.',
    },
    approach: [
      {
        step: 1,
        title: "도메인 이해",
        desc: "MLOps 4단계 파이프라인 도메인 학습 — 양자 컴퓨팅 기업 재직 경험을 바탕으로, 고밀도 데이터 환경에서의 가시성 설계 원칙을 이 도메인에 적용",
      },
      { step: 2, title: "IA 설계", desc: "노드 그래프 정보 구조 설계" },
      { step: 3, title: "노드 시각화", desc: "상태별 노드 컴포넌트 설계" },
      { step: 4, title: "데이터 흐름 설계", desc: "데이터 흐름 시각화 인터랙션" },
      { step: 5, title: "스펙 핸드오프", desc: "개발팀 스펙 문서화" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "분리된 4개 화면을 하나의 노드 그래프로",
        items: [
          {
            icon: "현황",
            title: "",
            body: "4단계 파이프라인이 각각 다른 화면에 분리되어 있어 전체 흐름을 파악하기 위해 화면 전환을 반복해야 했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "단일 노드 그래프 뷰에서 4단계 전체 파이프라인의 상태와 데이터 흐름을 실시간으로 시각화하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "노드 색상으로 상태(정상/오류/경고/대기)를 즉시 파악할 수 있도록 하고, 오류 노드 클릭 시 상세 로그를 패널로 표시했습니다. 양자 컴퓨팅 도메인에서는 결과가 확률적입니다. '완전한 오류'보다 '위험 가능성의 정도'를 표현하는 데 익숙했기 때문에, 상태를 이진(오류/정상)이 아닌 4단계 그라데이션으로 설계했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "파이프라인 실행 진행률을 노드 간 엣지(화살표)의 애니메이션으로 표현해 데이터 흐름을 실시간으로 전달했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "다크 모드 기본, 공유 화면은 라이트 — 모드 전환 trade-off",
        items: [
          {
            icon: "현황",
            title: "",
            body: "ML 엔지니어는 주로 어두운 환경에서 장시간 모니터링 작업을 수행하기 때문에 라이트 모드는 눈의 피로를 가중시켰습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "다크 모드를 기본값으로 설계하되, 공유 리포트 화면은 라이트 모드로 제공해 외부 공유 시 가독성을 확보했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "다크/라이트 전환 시 데이터 시각화 컬러 팔레트가 각 모드에 맞게 자동으로 교체되도록 토큰 기반으로 설계했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "중요도 높은 알림은 다크 모드에서도 가시성이 보장되도록 High Contrast 컬러를 별도 정의했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "MLOps — 노드 그래프",
        title: "파이프라인 노드 그래프",
        desc: "4단계 MLOps 파이프라인을 방향성 그래프(DAG)로 시각화하여 데이터 흐름과 실행 상태를 단일 화면에서 파악할 수 있게 했습니다.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=75",
      },
      {
        zone: "실시간 알림 패널",
        title: "실시간 모니터링 패널",
        desc: "오류 발생 시 해당 노드가 붉은색으로 강조되고, 사이드 패널에 로그와 수정 가이드가 자동으로 표시됩니다.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=75",
      },
      {
        zone: "데이터 수준 정보",
        title: "계층적 데이터 뷰",
        desc: "파이프라인 → 스테이지 → 태스크 → 로그 순으로 드릴다운하는 계층 탐색 구조를 설계했습니다.",
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "양자 컴퓨팅 기업에서 '기술이 복잡할수록 인터페이스는 더 단순해야 한다'는 원칙을 현장에서 배웠습니다. 이 프로젝트는 그 원칙을 MLOps 도메인에서 실증한 작업이었습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "실시간 데이터 업데이트 시 노드 그래프가 재렌더링되면서 레이아웃이 흔들리는 UX 문제를 완전히 해결하지 못했습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "노드 그래프에 AI 기반 이상 탐지 결과를 오버레이로 표시하는 기능을 추가해 선제적 장애 대응 UX를 실험할 계획입니다.",
      },
    ],
  },
  {
    slug: "sunnano-website-renewal",
    title: "20년간 쌓인 정보를\n구조로 정리한 웹사이트 리뉴얼",
    subtitle: "SunNano",
    cardDesc: "오래 쌓여 복잡해진 썬팅필름 브랜드 사이트를 정보 구조 중심으로 개편",
    coverImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75",
    category: "Web Service",
    client: "썬나노 (SunNano)",
    tags: ["Web", "Renewal", "Publishing"],
    year: "2025",
    role: "디자인 · 퍼블리싱",
    metrics: [
      { value: "2003→2025", label: "노후 사이트 전면 개편", sub: "시멘틱 마크업·정보구조 재정비" },
      { value: "7개 라인업", label: "필름 제품군 체계화", sub: "Signature·Eco·Crystal·Nano·Prestige·Hi-Tec·Silver" },
      { value: "단독 수행", label: "디자인 100% · 퍼블리싱 100%", sub: "Figma → React·Tailwind·SCSS·WordPress" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "썬나노는 30년 업력의 썬팅(윈도우) 필름 브랜드입니다. 다만 웹사이트는 2003년에 제작된 이후 콘텐츠가 장기간 누적되며, 시멘틱 마크업이 지켜지지 않고 정보가 흩어져 복잡해 보이는 인상을 주고 있었습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "제품 라인업·시공 사례·구매 안내가 한 화면에 과도하게 쌓여, 방문자가 \"내게 맞는 필름과 다음 행동\"을 빠르게 판단하기 어려웠습니다. 오래된 마크업 구조는 유지보수와 검색 노출에도 불리했습니다.",
    },
    approach: [
      { step: 1, title: "현황 진단", desc: "기존 사이트 정보·마크업 구조 분석" },
      { step: 2, title: "정보 구조", desc: "제품·사례·문의 흐름 재설계" },
      { step: 3, title: "마크업 정비", desc: "시멘틱 구조로 재구축" },
      { step: 4, title: "UI 디자인", desc: "Figma로 화면·컴포넌트 설계" },
      { step: 5, title: "퍼블리싱", desc: "React·Tailwind·SCSS·WordPress 구현" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "쌓인 정보를 '판단 흐름' 중심으로 재배치",
        items: [
          {
            icon: "현황",
            title: "",
            body: "메인에 제품·이벤트·사례·구매가 평면적으로 나열되어, 처음 방문한 사용자가 무엇부터 봐야 할지 알기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "\"필름 선택 → 사례 확인 → 견적/구매\"로 이어지는 의사결정 흐름에 맞춰 화면 위계를 다시 잡는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "히어로에서 브랜드 메시지를 명확히 던지고, 그 아래로 제품 라인업과 대표 시공 사례를 단계적으로 노출했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "견적 문의 CTA를 흐름의 끝에 일관되게 배치해, 탐색이 행동으로 자연스럽게 이어지도록 설계했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "시멘틱 마크업으로 구조와 유지보수성 회복",
        items: [
          {
            icon: "현황",
            title: "",
            body: "오래된 마크업은 의미 없는 태그 중첩이 많아, 화면이 복잡해 보이고 수정·확장이 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "시멘틱 태그 기반으로 문서 구조를 재정의해 가독성과 유지보수성, 검색 노출 기반을 함께 확보하려 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "제품 라인업을 탭 구조로 정리하고, 특징·투과율 비교 같은 정보를 일관된 컴포넌트로 표준화했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "디자인부터 퍼블리싱까지 단독으로 수행해, 설계 의도가 구현 단계에서 흐트러지지 않도록 일관성을 유지했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Hero",
        title: "모든 것을 갖춘 30년 브랜드 썬나노",
        desc: "브랜드의 연혁과 신뢰를 전면에 내세운 히어로로, 첫 화면에서 핵심 메시지를 명확히 전달합니다.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=75",
      },
      {
        zone: "Products",
        title: "필름 라인업 — 탭으로 정리한 제품군",
        desc: "Signature부터 Silver까지 7개 라인업을 탭 구조로 묶고, 특징·투과율 비교를 표준 컴포넌트로 정리했습니다.",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&q=75",
      },
      {
        zone: "Cases",
        title: "대표 시공 사례",
        desc: "공공기관·대형 건물 등 대표 시공 사례를 카드 갤러리로 구성해 브랜드 레퍼런스를 한눈에 보여줍니다.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "오래 운영된 사이트의 리뉴얼은 '새로 그리는 일'보다 '쌓인 정보를 다시 구조화하는 일'에 가깝다는 것을 체감했습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "장기간 축적된 레거시 콘텐츠를 전부 재정리하지는 못해, 일부 하위 페이지는 단계적 이관 과제로 남겼습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "정비한 시멘틱 구조를 바탕으로 검색 노출(SEO)과 견적 전환 퍼널을 데이터로 측정·개선할 계획입니다.",
      },
    ],
  },
  {
    slug: "fatima-franciscan-renewal",
    title: "오래된 수도회 사이트를\n정돈된 정보 구조로 리뉴얼",
    subtitle: "파티마의 성모 프란치스코 수녀회",
    cardDesc: "수도회 소개·사도직·교육 정보를 위계 중심으로 재정리한 웹사이트 리뉴얼",
    coverImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=75",
    category: "Web Service",
    client: "파티마의 성모 프란치스코 수녀회",
    tags: ["Web", "Renewal", "Publishing"],
    year: "2025",
    role: "디자인 · 퍼블리싱",
    metrics: [
      { value: "진행 중", label: "수도회 웹사이트 리뉴얼", sub: "디자인 100% · 퍼블리싱 100%" },
      { value: "4개 섹션", label: "정보 구조 재편", sub: "수도회 소개·우리의 사도직·청년 사도직·함께 나눠요" },
      { value: "Figma→Web", label: "노후 사이트 전면 개편", sub: "가독성·위계 중심 재설계" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "파티마의 성모 프란치스코 수녀회의 웹사이트는 오래된 디자인과 정돈되지 않은 정보 구조로, 수도회 소개·역사·사도직·교육 정보가 일관된 위계 없이 흩어져 있었습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "방문자가 수도회의 정체성과 활동(사도직), 교육·피정 정보를 차분하게 따라 읽기 어려웠습니다. 콘텐츠의 톤과 위계가 수도회의 분위기를 충분히 담아내지 못했습니다.",
    },
    approach: [
      { step: 1, title: "현황 진단", desc: "기존 사이트 정보·톤 분석" },
      { step: 2, title: "정보 구조", desc: "4개 핵심 섹션으로 재편" },
      { step: 3, title: "톤 설정", desc: "수도회 분위기에 맞는 무드 정의" },
      { step: 4, title: "UI 디자인", desc: "Figma로 화면·타이포 위계 설계" },
      { step: 5, title: "퍼블리싱", desc: "웹 구현 (진행 중)" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "흩어진 정보를 4개 섹션 위계로 재편",
        items: [
          {
            icon: "현황",
            title: "",
            body: "수도회 소개, 역사, 사도직, 교육·피정 정보가 분산되어 있어 방문자가 전체 그림을 파악하기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "'수도회 소개 · 우리의 사도직 · 청년 사도직 · 함께 나눠요' 4개 축으로 정보를 묶어 탐색 경로를 명확히 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "수도회 역사·교육과정 같은 긴 정보는 타임라인과 표로 정리해 차분히 읽히도록 구성했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "각 섹션의 진입 지점을 상단 내비게이션에 일관되게 노출해, 처음 방문자도 길을 잃지 않게 했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "수도회의 분위기를 담은 톤과 타이포 위계",
        items: [
          {
            icon: "현황",
            title: "",
            body: "기존 화면은 색과 장식이 과해, 수도회 특유의 고요하고 정돈된 인상을 전달하지 못했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "여백과 절제된 색, 명확한 타이포 위계로 '고요함과 신뢰'의 톤을 화면 전반에 담는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "히어로에 수도회의 정신을 담은 문장을 배치해, 첫 화면에서 정체성이 전해지도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "사진·텍스트의 위계를 일관된 규칙으로 정리해, 콘텐츠가 늘어나도 톤이 흐트러지지 않도록 설계했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Hero",
        title: "수도회의 정신을 담은 첫 화면",
        desc: "'고요함 중에 주님의 뜻을 찾고, 인내함 중에 덕으로 나아가며, 사랑함으로써 복음을 전하라'는 메시지를 히어로에 담았습니다.",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&q=75",
      },
      {
        zone: "History",
        title: "수도회 역사 — 타임라인으로 정리",
        desc: "긴 연혁을 연도별 타임라인으로 구조화해, 방문자가 흐름을 따라 자연스럽게 읽도록 했습니다.",
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=1200&q=75",
      },
      {
        zone: "Education",
        title: "교육 · 피정 안내",
        desc: "교육과정과 피정 정보를 표와 카드로 정리해, 필요한 정보를 빠르게 찾을 수 있게 구성했습니다.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=75",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "정보의 양보다 '톤과 위계'가 신뢰를 만든다는 것을 다시 확인했습니다. 절제된 디자인이 오히려 메시지를 더 선명하게 전달했습니다.",
      },
      {
        title: "진행 상황",
        body: "현재 디자인을 마치고 퍼블리싱을 진행 중이며, 콘텐츠 이관과 세부 페이지를 단계적으로 반영하고 있습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "청년 사도직 등 활동 콘텐츠를 정기적으로 업데이트할 수 있는 구조를 더해, 살아있는 사이트로 운영되도록 할 계획입니다.",
      },
    ],
  },
];

export const caseStudies = {
  research: [
    {
      category: "연구",
      categoryEn: "Research and Insight",
      items: [
        { title: "Title Title Title Title Title", date: "2024년 8월 12일" },
        { title: "Title Title Title Title Title", date: "2024년 7월 30일" },
      ],
    },
  ],
  news: [
    {
      category: "소식",
      categoryEn: "News",
      items: [
        { title: "Title Title Title Title Title", date: "2024년 8월 05일" },
        { title: "Title Title Title Title Title", date: "2024년 7월 20일" },
      ],
    },
  ],
};
