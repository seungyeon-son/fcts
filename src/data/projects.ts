export type Project = {
  slug: string
  title: string
  subtitle: string
  category: 'B2B UX Service' | 'B2C UX Service' | 'Web Service' | 'UX Planning/Branding'
  client: string
  tags: string[]
  year: string
  role: string
  metrics: { value: string; label: string; sub?: string }[]
  coverImage?: string
  images?: string[]
  heroContext?: string
  problemContext: {
    domain: string
    domainDetail: string
    domainContextExtra?: string
    coreChallenge: string
    coreChallengeDetail: string
  }
  approach: { step: number; title: string; desc: string }[]
  keyDecisions: {
    area: string
    areaTitle: string
    items: { icon: string; title: string; body: string }[]
  }[]
  designHighlights: { zone: string; title: string; desc: string }[]
  reflection: { title: string; body: string }[]
}

export const projects: Project[] = [
  {
    slug: 'global-credit-bank',
    title: '글로벌 장벽을 허문\n학위 취득 플랫폼 서비스 디자인',
    subtitle: '글로벌 학점은행제',
    category: 'B2B UX Service',
    client: '글로벌 학점은행제',
    tags: ['UX', 'B2C', 'Web'],
    year: '2024',
    role: 'UX Designer',
    metrics: [
      { value: '3가지', label: '핵심 사용자 여정 단순화', sub: '가입 → 수강신청 → 학점 취득' },
      { value: '3-Zone', label: '정보 구조 재설계', sub: 'discover · 1·1·1 학습 · 결제' },
      { value: '65%+', label: '목표 완강률 달성', sub: '기존 대비 → 1·1·1 달성' },
    ],
    problemContext: {
      domain: '도메인 맥락',
      domainDetail:
        '글로벌 학점은행제는 국내외 인정 학점을 통합해 학위를 취득할 수 있는 서비스입니다. 하지만 복잡한 제도 안내와 분산된 정보 구조로 인해 사용자가 첫 접점에서 이탈하는 비율이 높았습니다.',
      coreChallenge: '핵심 페인포인트',
      coreChallengeDetail:
        '사용자는 "내가 어떤 과목을 들어야 졸업할 수 있는지"를 파악하는 데 평균 3회 이상 문의가 필요했고, 수강 계획 수립부터 결제까지 이어지는 플로우가 단절되어 있었습니다.',
    },
    approach: [
      { step: 1, title: '리서치', desc: '사용자 인터뷰 및 경쟁사 분석' },
      { step: 2, title: 'Zone 탐색', desc: '3-Zone 정보구조 설계' },
      { step: 3, title: 'Zone 분석', desc: '각 존 별 사용자 흐름 정의' },
      { step: 4, title: '4D 추진', desc: '와이어프레임 → 프로토타입' },
      { step: 5, title: '렌더링', desc: '최종 UI 및 디자인 시스템 완성' },
    ],
    keyDecisions: [
      {
        area: '영역 1',
        areaTitle: 'IA 탐색 경로 — Zone 구조로 정리 하기',
        items: [
          { icon: '현황', title: '', body: '기존 메뉴는 제도 중심으로 구성되어 있어, 처음 방문한 사용자가 "나에게 맞는 과목"을 찾기까지 평균 7번 이상 클릭이 발생했습니다.' },
          { icon: '목표', title: '', body: '3-Zone 구조(Discover → 학습 → 결제)로 사용자 여정을 선형화하여 전환율을 높이는 것을 목표로 했습니다.' },
          { icon: 'UX', title: '', body: 'Zone 기반 네비게이션을 설계해 사용자가 현재 위치와 다음 단계를 직관적으로 파악할 수 있도록 했습니다.' },
          { icon: '설 계', title: '', body: '각 Zone의 진입·이탈 포인트를 명확히 정의하고, 전환 퍼널 내 이탈 가능 지점을 최소화했습니다.' },
        ],
      },
      {
        area: '영역 2',
        areaTitle: '학점인정플로우(UX)의 구체 실현이란',
        items: [
          { icon: '현황', title: '', body: '학점 인정 신청 과정이 8단계로 구성되어 있었고, 각 단계 사이에 외부 시스템으로 이동해야 하는 구조였습니다.' },
          { icon: '목표', title: '', body: '학점 인정 신청을 3단계 이내로 압축하고, 전 과정을 플랫폼 내부에서 완결할 수 있도록 설계했습니다.' },
          { icon: 'UX', title: '', body: '스텝 인디케이터와 실시간 자격 확인 모듈을 도입해 사용자가 신청 가능 여부를 즉시 확인할 수 있게 했습니다.' },
          { icon: '설 계', title: '', body: '문서 업로드, 검토, 승인 알림을 하나의 대시보드에서 관리하는 통합 뷰를 설계했습니다.' },
        ],
      },
    ],
    designHighlights: [
      { zone: 'Zone 1', title: 'Discover — 나에게 맞는 과목 찾기', desc: '사용자 목표(취득 학위)를 입력하면 필요 과목을 자동 추천하는 퍼스널라이즈드 플로우를 설계했습니다.' },
      { zone: 'Zone 2', title: '학습 — 완강률을 높이는 학습 경험', desc: '강의 페이지 내 진도 시각화와 학점 누적 현황 위젯을 배치해 동기 부여를 강화했습니다.' },
      { zone: 'Zone 3', title: '결제 — 신뢰 기반 전환 설계', desc: '가격 투명성과 환불 정책을 결제 화면에 선명하게 노출해 이탈률을 낮췄습니다.' },
    ],
    reflection: [
      { title: '배운 것', body: '제도의 복잡성을 UI로 단순화하는 것의 한계와, 사용자 교육과 UI 설계가 함께 가야 한다는 것을 배웠습니다.' },
      { title: '해결하지 못한 것', body: '모바일 환경에서의 문서 업로드 UX는 기술 제약으로 인해 완전히 해결하지 못한 과제로 남았습니다.' },
      { title: '다음 ITERATION', body: '학점 계획 시뮬레이터를 도입해 사용자가 졸업까지의 로드맵을 직접 시각화할 수 있는 기능을 고도화할 예정입니다.' },
    ],
  },
  {
    slug: 'humanities-lecture',
    title: '완강을 65%를 목표로 설계한\n고등학생용 인문학 강의 페이지',
    subtitle: 'Gracture',
    category: 'B2C UX Service',
    client: 'Gracture',
    tags: ['UX', 'B2C', 'Mobile', 'Web'],
    year: '2024',
    role: 'UX Designer',
    metrics: [
      { value: '+65%', label: '완강률 목표 달성', sub: '설계 기반 UX 구조 적용' },
      { value: '+60%', label: '수강생 재등록률', sub: '코호트 1기 기준' },
      { value: '+4회', label: '평균 강의 접속 빈도', sub: '주간 기준 목표치' },
    ],
    problemContext: {
      domain: '도메인 맥락',
      domainDetail:
        'gracture는 고등학생 대상 인문학 온라인 강의 플랫폼입니다. 기존 플랫폼들은 수강 중단율이 높았으며, 특히 청소년 사용자의 경우 학습 지속성이 낮은 문제가 있었습니다.',
      coreChallenge: '핵심 페인포인트',
      coreChallengeDetail:
        '"수강 중 흥미를 잃는 지점이 어디인가"를 데이터로 추적한 결과, 3강 이후 이탈률이 급격히 상승했습니다. 강의 자체가 아닌 "지속하는 이유"의 부재가 핵심 원인이었습니다.',
    },
    approach: [
      { step: 1, title: '자료 PDF 글쓰기', desc: '기존 수강 데이터 및 이탈 패턴 분석' },
      { step: 2, title: '시준 정리', desc: '사용자 학습 동기 인터뷰' },
      { step: 3, title: 'KPI 수집', desc: '완강률 목표 지표 설정' },
      { step: 4, title: '서비스평가', desc: '경쟁 플랫폼 UX 벤치마킹' },
      { step: 5, title: '전략적 방안', desc: '학습 지속성 설계 전략 수립' },
    ],
    keyDecisions: [
      {
        area: '영역 1',
        areaTitle: '출결관리를 "학만된 기억하던" 1개로 만든',
        items: [
          { icon: '현황', title: '', body: '수강생은 강의 목록, 진도 현황, 과제 제출 페이지가 각각 분리되어 있어 학습 상태를 파악하기 위해 3개 이상의 페이지를 오가야 했습니다.' },
          { icon: '목표', title: '', body: '대시보드 1개에서 진도, 과제, 다음 강의를 모두 확인할 수 있는 통합 학습 홈을 설계했습니다.' },
          { icon: 'UX', title: '', body: '학습 스트릭(연속 수강일) 시각화와 뱃지 시스템을 도입해 게이미피케이션 효과를 더했습니다.' },
          { icon: '설 계', title: '', body: '"오늘 들어야 할 강의" 카드를 홈 최상단에 배치해 재방문 시 즉시 학습으로 연결되는 경험을 설계했습니다.' },
        ],
      },
      {
        area: '영역 2',
        areaTitle: '진행률을 높이는 다지인 — 인터페이 안에',
        items: [
          { icon: '현황', title: '', body: '강의 플레이어가 단순 영상 재생 기능만 제공해 학습 맥락이 단절되는 문제가 있었습니다.' },
          { icon: '목표', title: '', body: '강의 플레이어 내에 핵심 개념 요약, 노트 작성, 질문 기능을 통합한 올인원 학습 화면을 설계했습니다.' },
          { icon: 'UX', title: '', body: '강의 시청 중 주요 개념에서 자동으로 퀴즈가 팝업되는 인터랙션을 기획해 능동적 학습을 유도했습니다.' },
          { icon: '설 계', title: '', body: '강의 완료 후 "다음 강의 예고" 화면을 5초 카운트다운과 함께 제공해 연속 시청률을 높였습니다.' },
        ],
      },
    ],
    designHighlights: [
      { zone: '강의 목록 (강의 목록)', title: '코스 구조 시각화', desc: '전체 커리큘럼을 타임라인 형태로 표현해 학습 여정 전체를 한눈에 파악할 수 있도록 했습니다.' },
      { zone: '강의 1강', title: '완강 의식 설계', desc: '각 강의 완료 시 성취 애니메이션과 다음 강의 예고로 이어지는 서사적 경험을 만들었습니다.' },
      { zone: '수강 신청', title: '수강 전환 설계', desc: '체험 강의 → 수강 신청 → 결제의 3단계 퍼널을 최소화하고 각 단계의 가치를 명확히 전달했습니다.' },
    ],
    reflection: [
      { title: '배운 것', body: '청소년 사용자는 성취감에 강하게 반응한다는 것을 확인했고, 학습 맥락을 유지하는 UI 설계가 완강률에 직접적인 영향을 준다는 것을 배웠습니다.' },
      { title: '해결하지 못한 것', body: '부모와 자녀가 함께 사용하는 패밀리 계정 UX는 범위 초과로 다음 버전으로 미뤄졌습니다.' },
      { title: '다음 ITERATION', body: '학습 스트릭 기능과 소셜 학습(같은 강의 수강생 간 소통) 기능을 고도화해 커뮤니티 기반 완강률 향상을 실험할 계획입니다.' },
    ],
  },
  {
    slug: 'b2b-design-system',
    title: '두 B2B 제품의 일관성을 구축한\n디자인 시스템 — UI Kit이 아닌 운영 원칙',
    subtitle: 'B2B Design System',
    category: 'B2B UX Service',
    client: 'S2IT Design System',
    tags: ['Design System', 'Publishing', 'Figma'],
    year: '2024–년',
    role: 'Design System Lead / Sole',
    metrics: [
      { value: '2개', label: '제품 통합', sub: '공통 DS 적용' },
      { value: '6제품', label: '컴포넌트 커버리지', sub: '커버된 제품 카운트 6가' },
      { value: '3 레이어', label: '계층 구조', sub: 'Foundation → Pattern → Figma/Components' },
    ],
    problemContext: {
      domain: '도메인 맥락',
      domainDetail:
        '두 B2B SaaS 제품이 각자의 디자인 언어로 개발되어 있어, 동일 기업 내 제품임에도 불구하고 UX가 전혀 다른 문제가 있었습니다. 개발팀은 동일한 컴포넌트를 제품별로 두 번씩 구현하는 비효율이 발생했습니다.',
      coreChallenge: '핵심 페인포인트',
      coreChallengeDetail:
        '"디자이너는 UI Kit을 만들었지만, 개발자는 쓰지 않는다"는 피드백이 반복됐습니다. 운영 원칙 없이 컴포넌트만 존재하는 디자인 시스템은 실질적인 일관성을 만들지 못했습니다.',
    },
    approach: [
      { step: 1, title: '두 제품 감사', desc: '기존 두 제품의 UI 컴포넌트 전수 감사' },
      { step: 2, title: 'Foundation', desc: '색상·타이포·스페이싱 토큰 정의' },
      { step: 3, title: 'Atomic 구성', desc: '원자 단위 컴포넌트 설계' },
      { step: 4, title: '운영 대여', desc: '컴포넌트 기여 및 업데이트 프로세스 정의' },
      { step: 5, title: '가이드라인 & 적용라인', desc: '문서화 및 핸드오프' },
    ],
    keyDecisions: [
      {
        area: '영역 1',
        areaTitle: 'Foundation + Patterns 두 거치며 구조 — 속도 고일 같이 확인',
        items: [
          { icon: '현황', title: '', body: '두 제품은 컬러, 간격, 타이포그래피가 각각 다르게 정의되어 있었으며, 공통 기준이 없었습니다.' },
          { icon: '목표', title: '', body: 'Foundation 레이어(토큰) → Pattern 레이어(공통 패턴) → Component 레이어 순으로 3단계 계층 구조를 정의했습니다.' },
          { icon: 'UX', title: '', body: 'Foundation의 변경이 Product-specific 컴포넌트까지 자동으로 반영되는 토큰 연동 구조를 Figma Variables로 구현했습니다.' },
          { icon: '설 계', title: '', body: '각 컴포넌트에 "이 컴포넌트를 쓸 때 / 쓰지 말 때" 사용 가이드를 필수로 포함시켰습니다.' },
        ],
      },
      {
        area: '영역 2',
        areaTitle: '진행률을 높이는 다시인 — 인터페이스 안에',
        items: [
          { icon: '현황', title: '', body: '디자이너와 개발자 간 컴포넌트 명칭이 달라 핸드오프 과정에서 혼선이 빈번하게 발생했습니다.' },
          { icon: '목표', title: '', body: 'Figma 컴포넌트 명칭을 개발 코드베이스의 네이밍 컨벤션과 1:1로 일치시켜 핸드오프 마찰을 제거했습니다.' },
          { icon: 'UX', title: '', body: 'Storybook과 Figma를 연동해 디자이너가 실제 구현된 컴포넌트를 Figma 내에서 직접 확인할 수 있는 환경을 구축했습니다.' },
          { icon: '설 계', title: '', body: '컴포넌트 변경 시 영향 범위를 자동으로 파악할 수 있는 "Impact Map" 문서를 함께 운영했습니다.' },
        ],
      },
    ],
    designHighlights: [
      { zone: 'S2IT 디자인 시스템 — 1단계 토큰', title: '토큰 기반 Foundation', desc: 'Color, Spacing, Typography, Radius 토큰을 Figma Variables로 정의해 라이트/다크 모드를 단일 컴포넌트로 지원했습니다.' },
      { zone: 'S2IT 컴포넌트 — Atomic Design', title: 'Atomic 컴포넌트 구조', desc: 'Button, Input, Badge 등 30개 원자 컴포넌트를 기반으로 Form, Card, Table 등 18개 분자 컴포넌트를 조립했습니다.' },
      { zone: '운영 프로세스', title: '기여 & 변경 관리 프로세스', desc: '새 컴포넌트 제안부터 리뷰, 머지, 배포까지의 프로세스를 문서화해 DS를 살아있는 시스템으로 운영했습니다.' },
    ],
    reflection: [
      { title: '배운 것', body: '디자인 시스템은 도구가 아니라 조직 문화임을 배웠습니다. 기술보다 "누가 어떻게 기여하고 운영하는가"가 더 중요한 요소였습니다.' },
      { title: '해결하지 못한 것', body: '다크 모드 전환 시 일부 복합 컴포넌트에서 토큰 적용이 누락되는 엣지 케이스를 완전히 해결하지 못했습니다.' },
      { title: '다음 ITERATION', body: 'Design Token을 JSON으로 관리하고 Style Dictionary로 CSS Variables, iOS, Android 토큰을 동시에 생성하는 멀티플랫폼 토큰 파이프라인을 구축할 계획입니다.' },
    ],
  },
  {
    slug: 'mlops-b2b-dashboard',
    heroContext: '양자 컴퓨팅 기업에서 초고밀도 데이터를 다루며 얻은 시각으로, 복잡한 파이프라인을 하나의 화면으로 압축했습니다.',
    title: 'MLOps 4단계를 하나의 노드 그래프로\n시각화한 B2B 대시보드',
    subtitle: 'S2IT CLOUD',
    category: 'B2B UX Service',
    client: 'S2IT CLOUD',
    tags: ['B2B', 'ML', 'Dashboard'],
    year: '2024년 - 년',
    role: 'Product Designer / Planing',
    metrics: [
      { value: '4 in 1', label: '4단계 통합', sub: 'MLOps 파이프라인 단일 뷰' },
      { value: '11층', label: '데이터 계층', sub: '레이어 구조 시각화' },
      { value: '회플 수', label: '파이프라인 노드 수', sub: '평균 대시보드 기준' },
    ],
    problemContext: {
      domain: '도메인 맥락',
      domainDetail:
        'ML 엔지니어는 데이터 준비 → 모델 학습 → 평가 → 배포의 4단계 파이프라인을 각각 다른 도구에서 관리했습니다. 전체 파이프라인 상태를 파악하기 위해 4개 화면을 오가야 했습니다.',
      domainContextExtra:
        '양자 컴퓨팅 환경에서는 하나의 연산 결과가 수천 개의 경우의 수를 동시에 담습니다. 그 환경에서 일하면서, \'상태를 즉각 읽을 수 없는 인터페이스\'가 얼마나 큰 리스크인지 체감했습니다.',
      coreChallenge: '핵심 페인포인트',
      coreChallengeDetail:
        '"파이프라인 어느 단계에서 오류가 났는지 바로 알 수 없다"는 것이 가장 빈번한 불만이었습니다. 오류 탐지부터 수정까지 평균 23분이 소요되고 있었습니다.',
    },
    approach: [
      { step: 1, title: '도메인 이해', desc: 'MLOps 4단계 파이프라인 도메인 학습 — 양자 컴퓨팅 기업 재직 경험을 바탕으로, 고밀도 데이터 환경에서의 가시성 설계 원칙을 이 도메인에 적용' },
      { step: 2, title: 'AA 설계', desc: '노드 그래프 정보 구조 설계' },
      { step: 3, title: '노드 시각화', desc: '상태별 노드 컴포넌트 설계' },
      { step: 4, title: 'DX 연결', desc: '데이터 흐름 시각화 인터랙션' },
      { step: 5, title: '6A 핸드오프', desc: '개발팀 스펙 문서화' },
    ],
    keyDecisions: [
      {
        area: '영역 1',
        areaTitle: '서터 화면 연결 — 싸도 파케이드면 노드 그래프',
        items: [
          { icon: '현황', title: '', body: '4단계 파이프라인이 각각 다른 화면에 분리되어 있어 전체 흐름을 파악하기 위해 화면 전환을 반복해야 했습니다.' },
          { icon: '목표', title: '', body: '단일 노드 그래프 뷰에서 4단계 전체 파이프라인의 상태와 데이터 흐름을 실시간으로 시각화하는 것을 목표로 했습니다.' },
          { icon: 'UX', title: '', body: '노드 색상으로 상태(정상/오류/경고/대기)를 즉시 파악할 수 있도록 하고, 오류 노드 클릭 시 상세 로그를 패널로 표시했습니다. 양자 컴퓨팅 도메인에서는 결과가 확률적입니다. \'완전한 오류\'보다 \'위험 가능성의 정도\'를 표현하는 데 익숙했기 때문에, 상태를 이진(오류/정상)이 아닌 4단계 그라데이션으로 설계했습니다.' },
          { icon: '설 계', title: '', body: '파이프라인 실행 진행률을 노드 간 엣지(화살표)의 애니메이션으로 표현해 데이터 흐름을 실시간으로 전달했습니다.' },
        ],
      },
      {
        area: '영역 2',
        areaTitle: '기도/아토리/대시보드 — 라이트/다크 패밀 공유 trade-off',
        items: [
          { icon: '현황', title: '', body: 'ML 엔지니어는 주로 어두운 환경에서 장시간 모니터링 작업을 수행하기 때문에 라이트 모드는 눈의 피로를 가중시켰습니다.' },
          { icon: '목표', title: '', body: '다크 모드를 기본값으로 설계하되, 공유 리포트 화면은 라이트 모드로 제공해 외부 공유 시 가독성을 확보했습니다.' },
          { icon: 'UX', title: '', body: '다크/라이트 전환 시 데이터 시각화 컬러 팔레트가 각 모드에 맞게 자동으로 교체되도록 토큰 기반으로 설계했습니다.' },
          { icon: '설 계', title: '', body: '중요도 높은 알림은 다크 모드에서도 가시성이 보장되도록 High Contrast 컬러를 별도 정의했습니다.' },
        ],
      },
    ],
    designHighlights: [
      { zone: 'MLOps — 노드 그래프', title: '파이프라인 노드 그래프', desc: '4단계 MLOps 파이프라인을 방향성 그래프(DAG)로 시각화하여 데이터 흐름과 실행 상태를 단일 화면에서 파악할 수 있게 했습니다.' },
      { zone: '현황 대비 알림판', title: '실시간 모니터링 패널', desc: '오류 발생 시 해당 노드가 붉은색으로 강조되고, 사이드 패널에 로그와 수정 가이드가 자동으로 표시됩니다.' },
      { zone: '데이터 수준 정보', title: '계층적 데이터 뷰', desc: '파이프라인 → 스테이지 → 태스크 → 로그 순으로 드릴다운하는 계층 탐색 구조를 설계했습니다.' },
    ],
    reflection: [
      { title: '배운 것', body: '양자 컴퓨팅 기업에서 \'기술이 복잡할수록 인터페이스는 더 단순해야 한다\'는 원칙을 현장에서 배웠습니다. 이 프로젝트는 그 원칙을 MLOps 도메인에서 실증한 작업이었습니다.' },
      { title: '해결하지 못한 것', body: '실시간 데이터 업데이트 시 노드 그래프가 재렌더링되면서 레이아웃이 흔들리는 UX 문제를 완전히 해결하지 못했습니다.' },
      { title: '다음 ITERATION', body: '노드 그래프에 AI 기반 이상 탐지 결과를 오버레이로 표시하는 기능을 추가해 선제적 장애 대응 UX를 실험할 계획입니다.' },
    ],
  },
]

export const caseStudies = {
  research: [
    {
      category: '연구',
      categoryEn: 'Research and Insight',
      items: [
        { title: 'Title Title Title Title Title', date: '2024년 8월 12일' },
        { title: 'Title Title Title Title Title', date: '2024년 7월 30일' },
      ],
    },
  ],
  news: [
    {
      category: '소식',
      categoryEn: 'News',
      items: [
        { title: 'Title Title Title Title Title', date: '2024년 8월 05일' },
        { title: 'Title Title Title Title Title', date: '2024년 7월 20일' },
      ],
    },
  ],
}
