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
  /** kind: "result"=실제 설계 산출물, "goal"=목표치(아직 측정 전) */
  metrics: { value: string; label: string; sub?: string; kind?: "result" | "goal" }[];
  coverImage?: string;
  /** 상세페이지 히어로 전용 3:4 소개 이미지 (목록 썸네일은 coverImage 사용) */
  heroImage?: string;
  images?: string[];
  heroContext?: string;
  /** 라이브 사이트 URL. 비공개/내부 제품이면 생략 */
  website?: string;
  problemContext: {
    domain: string;
    domainDetail: string;
    domainContextExtra?: string;
    coreChallenge: string;
    coreChallengeDetail: string;
  };
  approach: { step: number; title: string; desc: string }[];
  /** Approach 아래 들어가는 큰 비주얼(유저 저니 맵 등). image 없으면 placeholder + direction 노출 */
  journeyImage?: { image?: string; caption: string; direction: string };
  /** Key Decisions 섹션 도입부. 확정된 결론이 아니라 "고려 중인 방향"임을 알리는 리프레이밍 문구 */
  keyDecisionsIntro?: string;
  keyDecisions: {
    area: string;
    areaTitle: string;
    items: { icon: string; title: string; body: string }[];
    /** 영역별 비포/애프터 또는 화면 이미지. 없으면 placeholder + direction */
    image?: string;
    imageCaption?: string;
    imageDirection?: string;
    /** 선택하지 않은 대안 + 그 이유 (디자인 판단·설득 근거) */
    tradeoff?: string;
    /** 이 방향을 고려하며 아이데이션한 Notes 글 slug 목록 (리스트 링크로 노출) */
    relatedNoteSlugs?: string[];
  }[];
  designHighlights: { zone: string; title: string; desc: string; image?: string; imageDirection?: string }[];
  reflection: { title: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "global-credit-bank",
    title: "언어·결제 장벽을 허문\n외국인 학습자 학위 취득 플랫폼",
    subtitle: "UBION 글로벌 학점은행제",
    cardDesc: "한국어·결제 장벽에 막혀 있던 외국인 학습자의 학위 여정을 9단계 End-to-End로 재설계한 프로젝트",
    coverImage: "/img/works/gcb-cover.jpg",
    heroImage: "/img/works/gcb-intro.svg",
    category: "B2C UX Service",
    client: "UBION (글로벌 학점은행제)",
    tags: ["UX", "B2C", "i18n", "Web"],
    year: "2026",
    role: "UX Designer (기획·UX·디자인시스템·퍼블리싱 단독)",
    heroContext:
      "복잡한 B2B 데이터 서비스에서 '얽힌 도메인을 명료한 구조로 푸는' 일을 해왔습니다. 그 시각으로, 외국인 학습자가 인지부터 학위까지 9단계 여정에서 한 번도 길을 잃지 않도록 설계했습니다.",
    metrics: [
      {
        value: "9단계",
        kind: "result",
        label: "인지→학위 End-to-End 여정 재설계",
        sub: "5개 언어 · 5종 결제수단 · 4개 사용자 티어를 하나의 흐름으로 통합 설계",
      },
      { value: "≥40%", kind: "goal", label: "가입 → 결제 전환율", sub: "언어·결제 장벽 해소 기준 · 출시 후 측정 예정" },
      {
        value: "≥95%",
        kind: "goal",
        label: "글로벌 결제 성공률",
        sub: "Visa·PayPal·Alipay·WeChat·Wise 5종 통합 · 측정 예정",
      },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "한국의 학점은행제는 국내 학습자 중심으로 운영되어, 글로벌 K-Education 수요가 급증하는데도 외국인이 온라인으로 한국 학위·학점을 취득할 경로가 사실상 없었습니다. UBION 글로벌 학점은행제는 이 공백을 채우기 위한 외국인 전용 End-to-End 학위 취득 서비스입니다.",
      domainContextExtra:
        "시장 수요는 이미 검증돼 있었습니다 - 누적 수강생 15,000+, 한국 학위 취득 비중 70.7%, 평균 취득 기간 18개월. 문제는 그 '입구'였습니다. 외국인이 가입·결제 단계에서 대거 이탈하고 있었으니까요.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "외국인 학습자의 이탈은 네 가지 구조적 장벽에서 비롯됐습니다 - ① 언어 장벽(플랫폼이 한국어 전용이라 가입~수료 전 과정에서 이탈), ② 입학 절차의 불투명성(학력 인정 기준·서류·기간 미명시), ③ 결제 장벽(원화·국내 카드만 지원해 해외 결제 불가), ④ 수료 후 인증 불확실성. 특히 ‘언어·결제’ 장벽이 가입→결제 전환을 직접 가로막는 가장 큰 손실 구간이었습니다.",
    },
    approach: [
      {
        step: 1,
        title: "리서치",
        desc: "글로벌 학습자·재외교포·국내 유학생·B2B 기관 등 5개 페르소나 정의, 4대 장벽 도출",
      },
      {
        step: 2,
        title: "유저 저니",
        desc: "인지 → 가입 → 학력 인증 → 결제 → 수강 → 학점 신청 → 학위까지 9단계 End-to-End 설계",
      },
      { step: 3, title: "IA·권한", desc: "4개 사용자 티어 권한 매트릭스 설계, 개인(B2C)·기관(B2B) 분기" },
      { step: 4, title: "기능 정의", desc: "화면별 상태(Variants)와 예외(Edge) 케이스까지 명세" },
      { step: 5, title: "i18n·핸드오프", desc: "다국어 설계 원칙 정립 + Figma 컴포넌트 스펙 전달" },
    ],
    journeyImage: {
      image: "/img/works/gcb-ujm.jpg",
      caption: "9단계 End-to-End 유저 저니 맵 - 이탈 위험 구간(언어·결제) 표시",
      direction:
        "들어갈 이미지: 인지→가입→학력인증→결제→수강→학점신청→학위 9단계를 가로 타임라인으로 그린 유저 저니 맵. 단계별 사용자 감정 곡선과 이탈 위험 구간(언어·결제)을 빨강으로 강조한 Figma 보드 캡처.",
    },
    keyDecisionsIntro:
      "아래는 이 서비스를 설계하며 내린 핵심 판단들입니다. 일부는 확정해 적용한 결정이고, 일부는 더 나은 방향을 탐색하며 검토한 설계안이에요. 각 판단을 더 깊이 풀어둔 노트도 함께 연결해 두었습니다.",
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "결제 장벽 - 전환을 막던 마지막 관문 열기",
        relatedNoteSlugs: ["gcb-global-checkout-dropout"],
        items: [
          {
            icon: "현황",
            title: "",
            body: "원화·국내 카드만 지원해 해외 사용자는 마지막 결제 단계에서 이탈 - 가장 큰 손실 구간.",
          },
          {
            icon: "목표",
            title: "",
            body: "거주국 기준 Visa·PayPal·Alipay·WeChat·Wise 등 5종+ 노출, 결제 성공률 95%+ 목표.",
          },
          {
            icon: "UX",
            title: "",
            body: "다통화 표시 + USD 환산 병기, 거주국에서 못 쓰는 수단은 숨기고 대체 수단을 강조.",
          },
          {
            icon: "설 계",
            title: "",
            body: "토큰화·3D Secure·타임아웃 통보·멱등성 키로 중복결제 방지까지 예외 흐름 정의.",
          },
        ],
        image: "/img/works/gcb-kd2.jpg",
        imageCaption:
          "결제 화면 비포/애프터 - 원화·국내카드만 지원(좌)에서, 거주국 기준 글로벌 5종 결제수단 + 다통화 병기(우)로.",
        tradeoff:
          "비즈니스 팀은 신뢰도를 위해 이용 가능한 결제수단 전체를 노출하자고 했습니다. 저는 선택의 역설 리서치와 해외 결제 최적화 사례를 근거로 선택지 과부하가 전환율을 낮춘다고 설득했고, 거주국에서 불가한 수단을 숨겨 3종 이하로 좁히는 방향으로 합의했습니다.",
      },
      {
        area: "영역 2",
        areaTitle: "한 서비스, 두 사용자 - 개인 학습자와 B2B 기관을 분기하기",
        relatedNoteSlugs: ["reframing-information-by-value"],
        items: [
          {
            icon: "현황",
            title: "",
            body: "개인 학습자와 파트너 기관(단체 등록·정산)은 요구가 전혀 다른데 한 서비스에 공존해야 함.",
          },
          {
            icon: "목표",
            title: "",
            body: "학습자 Free/Pro·기관 관리자·시스템 관리자 4개 티어로 권한 매트릭스 정의, 역할별 기능 분기.",
          },
          {
            icon: "UX",
            title: "",
            body: "기관 관리자엔 CSV 일괄 등록(최대 500명)·멤버 학습 모니터링·월별 인보이스 대시보드 제공.",
          },
          {
            icon: "설 계",
            title: "",
            body: "이수(진도 80%+평가) → 학점 신청 → 위변조 방지 수료증까지 상태(Variants)를 끊김 없이 연결.",
          },
        ],
        image: "/img/works/gcb-kd3.jpg",
        imageCaption: "대시보드 비포/애프터 - 개인·기관 기능이 뒤섞인 단일 화면(좌)에서, 4개 티어 권한 매트릭스(우)로.",
        tradeoff:
          "PM 측에서 기업 고객용을 별도 B2B Portal로 분리하자는 의견을 냈습니다. 저는 두 제품 간 데이터 불일치 위험과 운영 비용 증가를 근거로 반대했고, 개발팀과 IA를 함께 검토해 단일 서비스 내 4개 티어 권한 분기 구조로 합의했습니다.",
      },
    ],
    designHighlights: [
      {
        zone: "Global Landing",
        title: "첫 화면부터 ‘외국인을 위한 서비스’임을 선언",
        desc: "영문 헤드카피와 글로벌 학습자 이미지로, 비회원도 진입 즉시 자신을 위한 서비스임을 인지하도록 랜딩을 설계했습니다.",
        image: "/img/works/gcb1.jpg",
      },
      {
        zone: "Curriculum",
        title: "4개 전공을 카드로 - 탐색 부담을 줄이기",
        desc: "한국어학·경영세무·IT컴퓨터공학·한국화예술 4개 전공을 카드로 정리해, 외국인 학습자가 자신에게 맞는 학습 경로를 빠르게 고르도록 했습니다.",
        image: "/img/works/gcb2.jpg",
      },
      {
        zone: "Credit Management",
        title: "학점부터 졸업까지 - 여정을 시뮬레이션",
        desc: "학점 계산기·강의 계획 시뮬레이션·1:1 컨설팅 예약을 한 화면에 묶어, 졸업까지 남은 학점과 예상 기간을 스스로 그려볼 수 있게 했습니다.",
        image: "/img/works/gcb3.jpg",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "‘글로벌 서비스’는 화면을 번역하는 일이 아니라, 언어·결제·인증·권한이 거주 국가에 따라 연쇄적으로 달라지는 구조를 설계하는 일이라는 걸 배웠습니다. i18n은 기능이 아니라 설계의 전제였습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: 'RTL 언어(아랍어·히브리어)는 1차 출시 범위에서 제외했습니다. 다만 컴포넌트는 dir="rtl"을 수용할 수 있도록 레이아웃 구조만 미리 잡아 두었습니다.',
      },
      {
        title: "다음 ITERATION",
        body: "GDPR·PIPL 등 국가별 데이터 레지던시 정책과, 학력 인증 AI OCR의 정확도를 데이터로 측정·개선해 가입 전환율을 끌어올리는 것이 다음 과제입니다.",
      },
    ],
  },
  {
    slug: "humanities-lecture",
    title: "어떤 고전으로 교체해도 작동하는\n고등학생 고전 강의 상세페이지",
    subtitle: "grecture · AI고전: 지혜의 항해",
    cardDesc: "에피소드가 바뀌어도 작동하는 8섹션 5막 보편 구조로 설계한 고등학생 고전 강의 회차 상세페이지",
    coverImage: "/img/works/gracture-cover.jpg",
    heroImage: "/img/works/gracture-intro.svg",
    category: "B2C UX Service",
    client: "ubion (grecture)",
    tags: ["UX", "B2C", "EdTech", "Web"],
    year: "2026",
    role: "UX Designer · 단독 진행",
    heroContext:
      "정식 기획서도, 기획자도 없었습니다. 콘텐츠 대본과 외부 제안서만 있는 상태에서, 디자이너가 직접 가설을 세우고 '어떤 고전으로 교체해도 작동하는' 구조를 설계했습니다.",
    metrics: [
      {
        value: "8섹션 5막",
        kind: "result",
        label: "작품 교체 가능한 보편 구조 설계",
        sub: "문학·철학·역사 3개 작품으로 교체 검증 완료",
      },
      {
        value: "65%+",
        kind: "goal",
        label: "회당 완강율",
        sub: "영상·원문·시각자료 결합 몰입형 상세 · 출시 후 측정 예정",
      },
      { value: "60%+", kind: "goal", label: "시리즈 진입율", sub: "시청 직후 NEXT·크로스 추천 트리거 · 측정 예정" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "grecture는 고등학교 B2B 구독으로 학생에게 제공되는 고전 강의 서비스입니다. 이번 과제는 신규 카테고리 ‘AI고전: 지혜의 항해’ 시리즈의 회차 상세페이지를 설계하는 것으로, 영상·원문·시각자료를 결합해 고등학생의 몰입과 완강을 끌어내는 것이 목표였습니다.",
      domainContextExtra:
        "특수한 출발점이었습니다 - 정식 기획서도, 기획자도 없었습니다. 입력은 강의 대본 1편과 외부 디자인 제안서뿐. 비즈니스 목표·KPI·페이지 구조가 모두 미정인 상태에서, 추정값과 확인 질문을 분리하며 디자이너 단독으로 가설을 픽스해 진행했습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "‘오뒷세이아 7화’ 하나만을 위한 화면을 그리면, 다음 작품이 들어올 때마다 새로 설계해야 합니다. 한 에피소드에 묶이지 않고 어떤 고전(문학·철학·역사)으로 교체해도 어색하지 않은 회차 상세페이지 구조를 만드는 것이 핵심 과제였습니다.",
    },
    approach: [
      {
        step: 1,
        title: "입력 자료 해석",
        desc: "기획서 부재 - 강의 대본·외부 제안서를 콘텐츠 입력값으로 보고 추정+확인 질문 분리",
      },
      {
        step: 2,
        title: "타겟·KPI 픽스",
        desc: "고등학생 메인 + 교사 보조 페르소나, 완강율 65%·진입율 60%·시청 4회 목표 확정",
      },
      {
        step: 3,
        title: "IA·동선",
        desc: "시리즈 › 작품 › 회차 3단계 위계, 메인→시리즈 마스터→작품 허브→회차 상세 4단계 동선",
      },
      { step: 4, title: "보편 레이아웃", desc: "8섹션 5막 구조 + 슬롯 추상화로 작품 교체 가능한 컨테이너 설계" },
      { step: 5, title: "검증·컴펌", desc: "HTML 목업 + design-critique 검증 → v2 반영 후 Figma 시안 컴펌" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "한 에피소드에 묶이지 않게 - 8섹션 5막 보편 구조",
        items: [
          {
            icon: "현황",
            title: "",
            body: "오뒷세이아 7화만을 위한 화면을 그리면, 새 작품이 들어올 때마다 페이지를 다시 설계해야 했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "ATTRACT→ORIENT→IMMERSE→DEEPEN→CONVERT 5막을 8개 섹션으로 펼치고, 작품별 데이터를 끼워 넣는 슬롯으로 추상화하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "시네마틱 HERO로 끌어들이고, 강사·챕터 컨텍스트 → 원문 인용 → 오늘의 인사이트 → 다음 회차 추천으로 몰입과 전환을 한 흐름에 담았습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "서양 문학·서양 철학·동양 역사 3개 작품을 같은 컨테이너에 직접 채워 넣어, 챕터·인용·원문 수가 달라도 정상 작동함을 시뮬레이션으로 검증했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "시스템 제약을 디자인으로 - 회차 상세를 catalog + 컨텍스트로",
        items: [
          {
            icon: "현황",
            title: "",
            body: "grecture는 영상이 별도 플레이어 페이지에서 재생되는 구조라, 회차 상세에 영상 플레이어를 둘 수 없었습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "회차 상세를 영상 ‘도착 지점’이자 시청 후 ‘회상 지점’으로 양방향 기능하는 catalog + 컨텍스트 페이지로 정의했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "5막을 회차 상세(시청 전 컨텍스트)와 플레이어 페이지(시청·전환) 두 페이지에 분산해, 시청 직후 가장 강력한 순간에 NEXT 트리거가 작동하도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "영상을 안 본 학생도 분위기를 흡수하도록 VISUAL JOURNEY(시각자료 체험존)와 ‘시리즈 › 작품 › 회차’ 브레드크럼을 보강 설계했습니다.",
          },
        ],
      },
      {
        area: "영역 3",
        areaTitle: "빨강 단일 톤 유지 - sub-브랜드보다 통합 카탈로그",
        items: [
          {
            icon: "현황",
            title: "",
            body: "외부 제안서는 AI고전에 골드 sub-팔레트를 권장했지만, 그러면 AI고전이 별개 브랜드처럼 보여 통합 카탈로그 인지가 약해질 위험이 있었습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "grecture 전체의 시각 일관성을 우선해 다크+레드 단일 시그니처를 유지하기로 결정했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "B2B 학교 영업에서 ‘grecture 전체’의 가치를 명료하게 전달하는 것을 우선했고, 약해지는 ‘고전스러움’은 VISUAL JOURNEY 시각자료로 보완했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "대신 작품 허브에서는 작품별 컬러(블루·옥·그레이·퍼플)로 차별화해, 시리즈 안의 다양성과 위치 인지를 동시에 살렸습니다.",
          },
        ],
        tradeoff:
          "외부 제안사가 'AI고전'에 골드 팔레트를 적용해 '고전스러운' 분위기를 강조하자고 했습니다. 저는 골드 적용 시 AI고전이 grecture 카탈로그에서 별개 브랜드처럼 분리되어 B2B 학교 영업에서 '통합 플랫폼' 가치가 희석된다고 설득했습니다. 논의 끝에 grecture 시그니처(다크+레드)를 유지하고, '고전스러움'은 VISUAL JOURNEY 시각자료와 작품별 서브 컬러로 보완하는 방향으로 합의했습니다.",
      },
    ],
    designHighlights: [
      {
        zone: "HERO · 5막 흐름",
        title: "ATTRACT부터 CONVERT까지, 하나의 몰입 흐름",
        desc: "시네마틱 HERO로 끌어들여 강사·챕터 컨텍스트, 원문 인용, 오늘의 인사이트, 다음 회차 추천까지 5막을 하나의 흐름으로 설계했습니다.",
        image: "/img/works/gracture1.jpg",
      },
      {
        zone: "Universal Layout",
        title: "작품을 교체해도 작동하는 슬롯 구조",
        desc: "8섹션을 작품별 데이터 슬롯으로 추상화해, 문학·철학·역사 어떤 고전이 들어와도 같은 컨테이너에서 정상 작동하도록 했습니다.",
      },
      {
        zone: "IA · 동선",
        title: "시리즈 › 작품 › 회차 3단계 위계",
        desc: "메인 → 시리즈 마스터 → 작품 허브 → 회차 상세 4단계 동선으로, 학생이 ‘Classics 100’ 카탈로그 안에서 현재 위치를 잃지 않게 했습니다.",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "‘기획서’라는 말이 늘 정식 기획서를 뜻하지는 않는다는 걸 배웠습니다. 콘텐츠 대본과 외부 제안서만으로 시작할 때는, 추정과 확인 질문을 분리하고 가설을 명시적으로 픽스하는 것이 디자이너의 일이었습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "VISUAL JOURNEY 시각자료 체험존과 3단계 브레드크럼은 보강안으로 도출했지만, 3주 데드라인 안에 일부만 반영해 다음 사이클 과제로 남겼습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "회차 상세의 시청 전/중/완료 상태 변형과 별도 플레이어 페이지(영상 종료 시 자동재생 + 회차 strip)를 설계해, 5막 흐름을 두 페이지에 걸쳐 완성할 계획입니다.",
      },
    ],
  },
  {
    slug: "b2b-design-system",
    title: "한 번 만들어 세 제품이 함께 쓰는\n사내 최초 디자인 시스템",
    subtitle: "SDT Design System",
    cardDesc: "디자인-개발 비일관성으로 새던 반복 비용을 토큰·Atomic 컴포넌트로 잡은 사내 최초 디자인 시스템",
    coverImage: "/img/works/ds-cover.jpg",
    heroImage: "/img/works/ds-intro.svg",
    category: "B2B UX Service",
    client: "SDT Inc.",
    tags: ["Design System", "Design Token", "Publishing", "Figma"],
    year: "2023",
    role: "Product Designer · 설계 50% / 퍼블리싱 100%",
    heroContext:
      "디자인과 퍼블리싱을 동시에 해온 사람으로서, 디자인 의도가 코드에서 손상되는 지점을 누구보다 잘 알았습니다. 그 간극을 0으로 만드는 시스템을 0에서 만들었습니다.",
    metrics: [
      { value: "0→1", kind: "result", label: "사내 최초 디자인 시스템 구축", sub: "반복 작업 시간 30% 단축" },
      { value: "40종+", kind: "result", label: "Atomic 컴포넌트 체계", sub: "QA 수정 건수 30% 감소" },
      {
        value: "3개 프로덕트",
        kind: "result",
        label: "실서비스 적용 · 일정 준수율 95%",
        sub: "SDT Cloud · DTS · AquaRack",
      },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "SDT는 산업용 B2B 제품군을 빠르게 확장하고 있었지만, 프로젝트마다 폰트·컬러·간격 기준이 제각각이었습니다. 같은 버튼·인풋을 제품마다 다시 그리고 다시 구현하는 반복 비용이 쌓였고, 사내에는 기준이 될 디자인 시스템이 없었습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "‘디자이너는 UI Kit을 만들지만 개발자는 쓰지 않는다’가 반복되는 상황이었습니다. 컴포넌트만 있고 디자인-개발을 잇는 토큰·핸드오프 구조가 없으면 시스템은 실제 일관성을 만들지 못한다는 게 핵심 문제였습니다.",
    },
    approach: [
      { step: 1, title: "현황 감사", desc: "제품 전반의 폰트·컬러·간격·컴포넌트 불일치 전수 감사" },
      { step: 2, title: "토큰 정의", desc: "색상·타이포·스페이싱·radius를 단일 디자인 토큰으로 통일" },
      { step: 3, title: "Atomic 구성", desc: "버튼·인풋·테이블·모달 등 Atomic 컴포넌트 40종+ 설계" },
      { step: 4, title: "코드 매핑", desc: "React/Tailwind 코드 매핑 + Page Template로 핸드오프 표준화" },
      { step: 5, title: "갱신 체계", desc: "브랜드 갱신·고객사 커스터마이징 대응 토큰 체계 구축 (v0.0.2)" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "폰트·컬러·간격을 단일 토큰으로 - 바꾸면 전 제품에 번지게",
        items: [
          {
            icon: "현황",
            title: "",
            body: "제품마다 컬러·간격·타이포그래피가 다르게 정의돼 공통 기준이 없었고, 같은 컴포넌트를 제품별로 다시 구현했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "색상·타이포·스페이싱·radius를 단일 디자인 토큰으로 통일해, 토큰 하나를 바꾸면 이를 쓰는 모든 컴포넌트에 자동 반영되게 하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Foundation(토큰) → Atomic 컴포넌트 → Page Template 순으로 계층을 잡아, 디자이너가 매번 처음부터 그리지 않고 토큰 위에서 조립하도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "각 컴포넌트에 '쓸 때 / 쓰지 말 때' 사용 가이드를 필수로 붙여, 컴포넌트가 늘어나도 사용 기준이 흐트러지지 않게 했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "디자이너가 만든 게 개발에서 안 깨지도록 - 코드 매핑 핸드오프",
        items: [
          {
            icon: "현황",
            title: "",
            body: "디자이너와 개발자의 컴포넌트 명칭·구조가 달라, 핸드오프 과정에서 해석 오차와 반복 수정이 잦았습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "Figma 컴포넌트를 React/Tailwind 코드 구조와 1:1로 매핑해, 디자인 의도가 구현 단계에서 손상되지 않게 하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "로그인·GNB·LNB 같은 공통 Page Template을 함께 제공해, 개발팀이 화면을 매번 새로 짜지 않고 템플릿 위에서 시작하도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "퍼블리싱까지 직접 수행한 경험을 살려 디자인-코드 사이의 간극을 직접 메웠고, 그 결과 QA 단계 수정 건수가 30% 이상 줄었습니다.",
          },
        ],
        tradeoff:
          "개발팀은 'Figma 파일 공유만으로 핸드오프가 가능하다'고 했습니다. 저는 컴포넌트 명칭과 구조가 코드와 불일치하면 QA 수정이 반복된다는 실제 사례를 근거로 설득했고, React/Tailwind 코드 매핑 문서와 Page Template을 추가 작성하는 방향으로 합의했습니다. 이 결정이 QA 수정 건수 30% 감소의 직접 원인이 됐습니다.",
      },
      {
        area: "영역 3",
        areaTitle: "브랜드가 바뀌어도 무너지지 않게 - 토큰 기반 리브랜딩",
        items: [
          {
            icon: "현황",
            title: "",
            body: "브랜드 컬러 변경(Crimson → Quantum Veriperi)이 발생하면, 토큰이 없을 때는 전 컴포넌트를 일일이 수정해야 했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "브랜드·고객사 변경이 와도 토큰만 교체하면 전 컴포넌트에 자동 반영되는 갱신 체계(v0.0.2)를 만드는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "고객사별 커스터마이징 구조를 토큰 레이어로 분리해, 같은 컴포넌트를 색만 바꿔 여러 제품·고객사에 재사용하도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "이 체계로 신규 기능 대응 리드타임을 줄여 배포 일정 준수율 95%를 달성하고, SDT Cloud·DTS·AquaRack 3개 프로덕트에 실서비스로 적용했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Design Tokens",
        title: "단일 토큰 - 색상·타이포·간격·radius",
        desc: "프로젝트마다 달랐던 기준을 Figma 토큰으로 통일해, 토큰 하나를 바꾸면 이를 쓰는 모든 컴포넌트에 자동 반영되도록 설계했습니다.",
        image: "/img/works/ds1.jpg",
      },
      {
        zone: "Atomic Components",
        title: "Atomic 컴포넌트 40종+",
        desc: "버튼·인풋·테이블·모달 등 원자 단위 컴포넌트를 기반으로, 폼·카드·페이지 템플릿까지 조립식으로 쌓아 올렸습니다.",
        image: "/img/works/ds2.jpg",
      },
      {
        zone: "Handoff",
        title: "React/Tailwind 코드 매핑 + Page Template",
        desc: "Figma 컴포넌트를 코드 구조와 1:1로 매핑하고 로그인·GNB·LNB 템플릿을 제공해, 디자인-개발 핸드오프 마찰을 줄였습니다.",
        image: "/img/works/ds3.jpg",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "디자인 시스템은 결과물이 아니라 '조직의 반복 비용을 줄이는 자산'이라는 걸 배웠습니다. 한 번 잘 만든 토큰·컴포넌트가 세 제품에서 계속 쓰이며 레버리지를 냈습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "컴포넌트가 늘어날수록 '누가 어떤 기준으로 추가·승인하는가'를 문서로만 관리해, 기여·거버넌스 프로세스를 시스템화하는 것은 다음 과제로 남았습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "Design Token을 JSON으로 관리하고 Style Dictionary로 웹·모바일 토큰을 동시에 생성하는 멀티플랫폼 파이프라인으로 확장할 계획입니다.",
      },
    ],
  },
  {
    slug: "mlops-b2b-dashboard",
    heroContext:
      "양자 컴퓨팅 기업에서 초고밀도·고차원 데이터를 다루며 '기술이 복잡할수록 인터페이스는 더 단순해야 한다'는 원칙을 체화했습니다. 그 시각으로 흩어진 산업 MLOps를 한 화면에 압축했습니다.",
    title: "흩어진 장비·데이터·모델을\n하나의 노드 그래프로 잇다",
    subtitle: "SDT CLOUD",
    cardDesc: "현장 장비부터 ML 모델 배포까지, 흩어진 산업 MLOps를 노드 그래프 하나로 연결한 B2B 대시보드",
    coverImage: "/img/works/cloud-cover.jpg",
    heroImage: "/img/works/cloud-intro.svg",
    category: "B2B UX Service",
    client: "SDT Inc. (SDT CLOUD)",
    tags: ["B2B", "MLOps", "Dashboard", "Data Viz"],
    year: "2024",
    role: "Product Designer / Planning",
    metrics: [
      {
        value: "50%↓",
        kind: "result",
        label: "사용자 테스트 오류 감소",
        sub: "4in1 단일 허브 재설계 후 사용성 테스트 기준",
      },
      { value: "3건 미만", kind: "result", label: "배포 후 UX 수정 요청", sub: "고객사 VOC 반영 2차 배포 기준" },
      {
        value: "4 in 1",
        kind: "result",
        label: "MLOps 플랫폼 통합",
        sub: "Blokworks·Datalake·Cobiops·Stackbase 단일 뷰",
      },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "SDT CLOUD는 산업 현장에서 발생하는 복잡한 데이터를 효율적으로 활용하기 위한 MLOps 플랫폼입니다. 현장 장비에서 데이터를 수집(Blokworks)하고, 클라우드에 저장·분석(Datalake)하고, ML 모델을 학습·배포(Cobiops)해, 불량 감소·다운타임 최소화·자동화로 잇는 4in1 서비스로 구성됩니다.",
      domainContextExtra:
        "저는 양자 컴퓨팅 기업에서 초고밀도 데이터를 다뤘습니다. 그 경험에서, 시스템이 복잡할수록 '상태를 한눈에 읽을 수 있는 화면'이 곧 운영 리스크를 줄인다는 걸 체감했습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "엔지니어·데이터 담당자는 장비 연결·데이터 가공·모델 배포를 서로 다른 영역에서 관리했고, 현장 장비와 그 데이터로 만들어진 앱이 '어떻게 연결돼 있는지'를 한 화면에서 파악할 수 없었습니다. 복잡한 산업 시스템을 단순하고 직관적으로 보여주는 것이 핵심 과제였습니다.",
    },
    approach: [
      {
        step: 1,
        title: "도메인 이해",
        desc: "4in1 서비스(Blokworks·Datalake·Cobiops·Stackbase)와 스마트팩토리 데이터 파이프라인 학습 - 양자 컴퓨팅 기업의 고밀도 데이터 환경 경험을 가시성 설계에 적용",
      },
      { step: 2, title: "IA 설계", desc: "메인 대시보드·장비·데이터·앱·온보딩·계정으로 정보구조 정리" },
      { step: 3, title: "노드 그래프", desc: "장비↔앱 연결을 노드 그래프로 시각화, 노드 선택 시 우측 패널 전환 설계" },
      { step: 4, title: "모듈형 컴포넌트", desc: "차트·테이블·Bottom Sheet·폼을 모듈형 컴포넌트로 표준화" },
      { step: 5, title: "스펙 핸드오프", desc: "상태(Variants)·예외 케이스 정의 후 개발 핸드오프" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "흩어진 장비·데이터·모델을 하나의 노드 그래프로",
        items: [
          {
            icon: "현황",
            title: "",
            body: "장비 연결·데이터 가공·모델 배포가 서로 다른 영역에 흩어져 있어, 현장 장비와 그 데이터로 만들어진 앱의 연관성을 한눈에 파악하기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "메인 대시보드에서 장비↔앱 연결을 노드 그래프로 시각화해, 복잡한 산업 시스템 전체를 단일 화면에서 직관적으로 읽히도록 하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "노드를 선택하면 우측 패널 내용이 해당 장비·앱 상세로 동적으로 전환되고, 더 깊은 정보는 Bottom Sheet로 단계적으로 펼치도록 설계했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "장비 구성·연결 상태를 모듈형 컴포넌트로 설계해, 현장 구성이 달라져도 같은 규칙으로 노드와 연결을 조합할 수 있게 했습니다.",
          },
        ],
        tradeoff:
          "개발팀은 노드 그래프 렌더링의 구현 복잡성을 이유로 기존 테이블 뷰 유지를 제안했습니다. 저는 사용성 테스트에서 테이블 뷰로 장비와 앱의 연결 관계를 파악하는 데 평균 3분 이상이 걸렸다는 데이터로 반박했고, 노드를 모듈형 컴포넌트로 구성해 구현 부담을 줄이는 절충안을 함께 구체화해 합의했습니다.",
      },
      {
        area: "영역 2",
        areaTitle: "한 화면에서 여러 데이터를 모니터링·제어하기",
        items: [
          {
            icon: "현황",
            title: "",
            body: "사용자는 화학·식품·물류 항구 등 다양한 환경의 데이터를 다루는데, 차트가 흩어져 있으면 단일 화면에서 모니터링·제어가 불가능했습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "필요한 데이터를 직접 골라 배치하는 ‘커스텀 가능한 차트 패널’로, 한 화면에서 다수의 데이터를 모니터링·제어하도록 설계했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "장비 상태는 테이블 + 라인 차트를 함께 배치해 수치와 추세를 동시에 보게 하고, 데이터 앱은 카드 그리드로 한눈에 관리하도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "데이터 가공 규칙은 코드 에디터 + 입력 폼으로 구성하고, 기본·입력중·에러 상태(Variants)를 정의해 작성 흐름이 끊기지 않게 했습니다.",
          },
        ],
      },
      {
        area: "영역 3",
        areaTitle: "복잡한 산업 시스템일수록 화면은 더 단순하게 - 모듈형 라이트 UI",
        items: [
          {
            icon: "현황",
            title: "",
            body: "산업 데이터 화면은 정보 밀도가 높아, 모든 것을 한 번에 보여주려다 오히려 아무것도 안 읽히는 위험이 컸습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "‘복잡한 시스템을 단순하고 직관적으로 표현한다’를 톤&매너 원칙으로 잡고, 흰 배경 기반 라이트 UI로 데이터 자체가 주인공이 되게 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Brand Blue를 강조색으로 절제해 쓰고, 상태(정상·경고·오류)는 Green·Yellow·Red 토큰으로 일관되게 표현해 시선이 핵심 신호로 먼저 가도록 했습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "컬러·Shadow를 디자인 토큰으로 정의하고 컴포넌트를 모듈화해, SDT의 다른 제품과 일관성을 유지하면서 신규 화면 제작 시간을 줄였습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Main Dashboard",
        title: "장비↔앱을 잇는 노드 그래프",
        desc: "현장 장비와 그 데이터로 만들어진 앱의 연관성을 노드 그래프로 시각화하고, 노드를 선택하면 우측 패널이 상세 정보로 전환되도록 설계했습니다.",
        image: "/img/works/cloud1.jpg",
      },
      {
        zone: "Monitoring",
        title: "장비 상태 모니터링 - 테이블 + 라인 차트",
        desc: "장비 목록 테이블과 라인 차트를 함께 배치해 수치와 추세를 한 화면에서 파악하고, 상세 정보는 Bottom Sheet로 펼치도록 했습니다.",
        image: "/img/works/cloud2.png",
      },
      {
        zone: "Data & Apps",
        title: "커스텀 차트 패널과 데이터 앱 관리",
        desc: "필요한 데이터를 골라 배치하는 커스텀 차트 패널과, 가공된 데이터로 만들어진 앱을 카드 그리드로 관리하는 화면을 설계했습니다.",
        image: "/img/works/cloud3.png",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "양자 컴퓨팅 기업에서 얻은 '기술이 복잡할수록 인터페이스는 더 단순해야 한다'는 원칙을, 정보 밀도가 높은 산업 MLOps 도메인에서 실제로 검증한 작업이었습니다. 행동을 유도하는 흐름을 만드는 것이 UX의 핵심이라는 것도 다시 확인했습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "태블릿·모바일 반응형은 이번 범위에서 데스크탑 우선으로 두어, 좁은 화면에서의 노드 그래프 탐색 경험은 다음 과제로 남겼습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "노드 그래프에 이상 탐지 결과를 오버레이해, 장애가 표면화되기 전에 대응하는 선제적 모니터링 UX를 실험할 계획입니다.",
      },
    ],
  },
  {
    slug: "sunnano-website-renewal",
    title: "20년간 쌓인 정보를\n구조로 정리한 웹사이트 리뉴얼",
    subtitle: "SunNano",
    cardDesc: "오래 쌓여 복잡해진 썬팅필름 브랜드 사이트를 정보 구조 중심으로 개편",
    coverImage: "/img/works/sunnano-cover.jpg",
    heroImage: "/img/works/sunnano-intro.svg",
    website: "https://sunnano.co.kr/",
    category: "Web Service",
    client: "썬나노 (SunNano)",
    tags: ["Web", "Renewal", "Publishing"],
    year: "2025",
    role: "디자인 · 퍼블리싱",
    metrics: [
      {
        value: "30%↓",
        kind: "result",
        label: "기획→배포 일정 단축",
        sub: "디자인·퍼블리싱 1인 완결로 외주 커뮤니케이션 제거",
      },
      { value: "2003→2025", kind: "result", label: "노후 사이트 전면 개편", sub: "시멘틱 마크업·정보구조 재정비" },
      {
        value: "단독 수행",
        kind: "result",
        label: "디자인 100% · 퍼블리싱 100%",
        sub: "Figma → React·Tailwind·SCSS·WordPress",
      },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "썬나노는 30년 업력의 썬팅(윈도우) 필름 브랜드입니다. 다만 웹사이트는 2003년에 제작된 이후 콘텐츠가 장기간 누적되며, 시멘틱 마크업이 지켜지지 않고 정보가 흩어져 복잡해 보이는 인상을 주고 있었습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        '제품 라인업·시공 사례·구매 안내가 한 화면에 과도하게 쌓여, 방문자가 "내게 맞는 필름과 다음 행동"을 빠르게 판단하기 어려웠습니다. 오래된 마크업 구조는 유지보수와 검색 노출에도 불리했습니다.',
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
            body: '"필름 선택 → 사례 확인 → 견적/구매"로 이어지는 의사결정 흐름에 맞춰 화면 위계를 다시 잡는 것을 목표로 했습니다.',
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
        image: "/img/works/sunnano1.png",
      },
      {
        zone: "Products & Cases",
        title: "필름 라인업을 탭으로 정리한 제품군과 대표 시공 사례",
        desc: "Signature부터 Silver까지 7개 라인업을 탭 구조로 묶고, 특징·투과율 비교를 표준 컴포넌트로 정리했습니다. 또한 공공기관·대형 건물 등 대표 시공 사례를 카드 갤러리로 구성해 브랜드 레퍼런스를 한눈에 보여줍니다.",
        image: "/img/works/sunnano2.jpg",
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
    coverImage: "/img/works/fatima-cover.jpg",
    heroImage: "/img/works/fatima-intro.svg",
    website: "https://fof.or.kr/",
    category: "Web Service",
    client: "파티마의 성모 프란치스코 수녀회",
    tags: ["Web", "Renewal", "Publishing"],
    year: "2025",
    role: "디자인 · 퍼블리싱",
    metrics: [
      {
        value: "4개 섹션",
        kind: "result",
        label: "정보 구조 재편",
        sub: "수도회 소개·우리의 사도직·청년 사도직·함께 나눠요",
      },
      { value: "단독 수행", kind: "result", label: "디자인 100% · 퍼블리싱 100%", sub: "Figma → React·WordPress" },
      { value: "Figma→Web", kind: "result", label: "노후 사이트 전면 개편", sub: "가독성·위계 중심 재설계" },
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
        image: "/img/works/fatima-hero.jpg",
      },
      {
        zone: "About ・ News",
        title: "수도회 소개 - 환영과 정체성 그리고 수녀원 소식 · 사도직 안내",
        desc: "첫 진입 이후 수도회의 정신과 정체성을 차분한 톤으로 소개하는 섹션으로 구성했습니다. 또한 수녀원 소식과 사도직 안내를 정돈된 리스트로 정리해, 필요한 정보를 빠르게 찾도록 했습니다.",
        image: "/img/works/fatima2.jpg",
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
  {
    slug: "klairs-cosmetics-renewal",
    title: "브랜드 철학과 제품을\n한 흐름으로 잇는 글로벌 코스메틱 리뉴얼",
    subtitle: "Dear Klairs",
    cardDesc:
      "‘Positive Beauty’ 철학과 비건 제품 라인을 한 흐름으로 잇도록 재편한 글로벌 코스메틱 브랜드 사이트 리뉴얼",
    coverImage: "/img/works/klairs-cover.jpg",
    heroImage: "/img/works/klairs-intro.svg",
    category: "Web Service",
    client: "Dear Klairs",
    tags: ["Web", "Renewal", "Publishing", "Global"],
    year: "2022",
    role: "디자인 50% · 퍼블리싱 100%",
    website: "https://www.klairscosmetics.com/",
    heroContext:
      "웹에이전시에서 디자인과 퍼블리싱을 함께 맡아, 글로벌 뷰티 브랜드의 감성을 화면으로 옮기는 동시에 코드로 직접 구현했습니다.",
    metrics: [
      {
        value: "3축 스토리",
        kind: "result",
        label: "브랜드 서사 구조화",
        sub: "Positive Beauty · Across the Globe · Proven by Millions",
      },
      { value: "디자인+퍼블", kind: "result", label: "디자인 50% · 퍼블리싱 100%", sub: "Figma → 반응형 웹 직접 구현" },
      { value: "80+개국", kind: "result", label: "글로벌 브랜드 신뢰 시각화", sub: "5,400+ 매장 · 다국어 대응" },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "Dear Klairs는 ‘Positive Beauty’를 철학으로 민감 피부를 위한 비건 스킨케어를 만드는 글로벌 K-뷰티 브랜드입니다. 80여 개국에 전개되는 브랜드인 만큼, 제품과 브랜드 철학·글로벌 신뢰를 한 사이트에서 일관되게 전달하는 것이 중요했습니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "기존 사이트는 제품·브랜드 스토리·신뢰 지표가 평면적으로 흩어져, 방문자가 ‘이 브랜드가 무엇을 지향하고 왜 믿을 만한지’를 한 흐름으로 읽기 어려웠습니다. 감각적인 제품 비주얼과 브랜드 서사를 위계 있게 잇는 것이 핵심 과제였습니다.",
    },
    approach: [
      { step: 1, title: "현황 진단", desc: "기존 사이트 정보·브랜드 톤 분석" },
      { step: 2, title: "정보 구조", desc: "브랜드 스토리·제품·신뢰 지표 흐름 재설계" },
      { step: 3, title: "비주얼 톤", desc: "제품 중심의 감각적 톤·레이아웃 정의" },
      { step: 4, title: "UI 디자인", desc: "Figma로 화면·컴포넌트 설계 (디자인 50%)" },
      { step: 5, title: "퍼블리싱", desc: "반응형 웹 직접 구현 (퍼블리싱 100%)" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "흩어진 정보를 ‘철학 → 글로벌 → 증거’ 흐름으로",
        items: [
          {
            icon: "현황",
            title: "",
            body: "제품·브랜드 소개·판매 지표가 한 화면에 평면적으로 쌓여, 브랜드가 지향하는 가치가 잘 드러나지 않았습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "About 섹션을 Positive Beauty(철학) → Across the Globe(글로벌 전개) → Proven by Millions(판매 증거) 3단 서사로 재구성하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "브랜드 철학을 먼저 던지고, 80여 개국 전개와 베스트셀러 판매량을 신뢰의 근거로 이어 붙여 ‘믿을 만한 브랜드’ 인상을 단계적으로 쌓았습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "Vegan Certified 섹션을 별도로 배치해, 비건·민감 피부라는 핵심 가치를 시각적으로 증명했습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "제품을 ‘고르기 쉽게’ - 비주얼 중심 제품 그리드",
        items: [
          {
            icon: "현황",
            title: "",
            body: "제품이 많지만 정렬·탐색 기준이 약해, 방문자가 자신에게 맞는 제품을 빠르게 찾기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "제품 비주얼과 텍스처 이미지를 함께 보여주는 카드 그리드로, 감각적이면서도 탐색이 쉬운 제품 영역을 만드는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "호버 시 제품/텍스처 이미지가 전환되고, 카테고리(토너·세럼·크림 등)와 Best 배지로 빠른 선택을 도왔습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "헤더·푸터·다국어(UGC) 구조 등 기존 시스템을 준수하면서, 본문 영역에 새 비주얼 언어를 정의해 일관성을 유지했습니다.",
          },
        ],
      },
      {
        area: "영역 3",
        areaTitle: "디자인 의도가 구현에서 안 깨지게 - 디자인+퍼블리싱 단독 연결",
        items: [
          {
            icon: "현황",
            title: "",
            body: "감각적인 뷰티 비주얼은 퍼블리싱 단계에서 여백·타이포·움직임의 의도가 쉽게 손상됩니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "디자인(50%)과 퍼블리싱(100%)을 직접 이어, 시안의 여백·타이포·인터랙션이 그대로 구현되게 하는 것을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "제품 슬라이더·호버 전환 등 인터랙션을 직접 구현해, 정적 시안에서는 보이지 않던 움직임의 디테일까지 챙겼습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "반응형 기준을 잡아 데스크탑·모바일에서 브랜드 톤이 일관되게 유지되도록 했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Hero",
        title: "제품을 주인공으로 - 감각적 히어로 슬라이더",
        desc: "비타민 젤리 클렌저 등 대표 제품을 큰 비주얼과 카피로 전면에 내세운 히어로 슬라이더로, 첫 화면에서 브랜드의 감각을 전달합니다.",
      },
      {
        zone: "Brand Story",
        title: "Positive Beauty → Across the Globe → Proven by Millions",
        desc: "브랜드 철학, 글로벌 전개, 판매 증거를 3단 서사로 이어, 방문자가 브랜드의 가치와 신뢰를 자연스럽게 따라 읽도록 구성했습니다.",
      },
      {
        zone: "Products",
        title: "비건 제품을 고르기 쉬운 카드 그리드",
        desc: "제품·텍스처 이미지와 카테고리·Best 배지를 결합한 카드 그리드로, 감각적이면서도 탐색이 쉬운 제품 영역을 설계했습니다.",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "글로벌 뷰티 브랜드의 리뉴얼은 ‘예쁘게 만드는 일’이 아니라, 브랜드 철학과 신뢰의 근거를 한 흐름으로 잇는 정보 설계라는 걸 배웠습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "방대한 제품 카탈로그를 전부 새 구조로 이관하지는 못해, 일부 하위 페이지는 단계적 개편 과제로 남겼습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "다국어(영·일·러) 콘텐츠가 늘어도 톤이 흐트러지지 않도록, 제품·스토리 컴포넌트를 재사용 가능한 형태로 정리해 운영 효율을 높일 계획입니다.",
      },
    ],
  },
  {
    slug: "dts-temperature-monitoring",
    title: "실시간 온도 감지로\n현장 위험을 먼저 알리는 관제 서비스",
    subtitle: "DTS Dashboard · SDT Inc.",
    cardDesc: "광섬유 분산온도감지 데이터를 4단계 경보 위계로 시각화한 B2B 산업 관제 대시보드",
    coverImage: "/img/works/dts-cover.jpg",
    heroImage: "/img/works/dts-intro.svg",
    category: "B2B UX Service",
    client: "SDT Inc.",
    tags: ["UX", "B2B", "Dashboard", "Data Viz"],
    year: "2025",
    role: "Product Designer (50%)",
    heroContext:
      "SDT Cloud에서 만든 디자인 시스템을 산업 관제 도메인으로 확장한 작업입니다. 24시간 돌아가는 모니터링 화면에서는 색 하나가 곧 대응 속도가 된다는 것을 기준으로 삼았습니다.",
    metrics: [
      { value: "4단계", kind: "result", label: "경보 위계 색 체계화", sub: "관심·주의·경계·심각을 전 컴포넌트에 통일" },
      { value: "5종 팝업", kind: "result", label: "맥락 유지형 Section popup", sub: "페이지 전환 없이 섹션 상세 확인" },
      {
        value: "맵 + 그래프",
        kind: "result",
        label: "위치·온도 분포 통합 뷰",
        sub: "Alert pin 맵 + Temp overview 그라데이션 바",
      },
    ],
    problemContext: {
      domain: "도메인 맥락",
      domainDetail:
        "DTS는 광섬유 케이블 기반 분산온도감지(Distributed Temperature Sensing) 시스템으로, 케이블 전 구간의 온도를 실시간으로 수집해 이상 징후를 조기에 감지합니다. SDT Inc.의 산업 고객사 현장 운영자(센터장·현장 기술자)가 24시간 상시 모니터링하는 전문가용 웹 대시보드입니다.",
      coreChallenge: "핵심 페인포인트",
      coreChallengeDetail:
        "정보 과부하 속에서 '핵심 이상만' 빠르게 감지해야 하는 것이 핵심 과제였습니다. 모든 경보가 중요해 보일 때 무엇을 우선해 보여줄지, 한 지점에 경보가 중첩될 때 무엇을 먼저 판단하게 할지, 그리고 지도 맥락을 잃지 않고 섹션 상세를 확인하게 할지가 관건이었습니다.",
    },
    approach: [
      { step: 1, title: "기획 연계", desc: "SDT Cloud 디자인 시스템·UX 흐름을 관제 도메인으로 확장" },
      { step: 2, title: "IA 설계", desc: "모니터링 · 관리 현황 · 관제 서비스 시스템 순으로 정보 구조 정의" },
      { step: 3, title: "경보 색 체계", desc: "관심·주의·경계·심각 4단계 위계 색을 토큰으로 표준화" },
      { step: 4, title: "화면 디자인", desc: "맵 대시보드·온도 분포·장비 모니터링·경보 설정 설계" },
      { step: 5, title: "인터랙션·퍼블", desc: "Alert pin 모션·Section popup 정의 후 퍼블리싱 완료" },
    ],
    keyDecisions: [
      {
        area: "영역 1",
        areaTitle: "경보 우선순위 - 4단계 위계 색을 일관되게",
        items: [
          {
            icon: "현황",
            title: "",
            body: "경보 범위 설정이 기본이지만, 모든 경보가 중요한 상황에서 무엇을 먼저 봐야 할지 우선순위를 판단하기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "관심·주의·경계·심각 4단계로 온도 경보 위계를 정의하고, 그 기준 설정을 플로우의 첫 단계로 두어 경보 기준 자체를 명확히 잡았습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Toast Card·Alert pin·Alarm List·Connection-status 등 모든 컴포넌트에 동일한 4단계 색(관심=노랑·주의=주황·경계=주황레드·심각=레드)을 적용해 인지 부담을 줄였습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "경보 설정 화면도 같은 위계 색으로 통일하고 상태 색을 디자인 토큰으로 관리해, 한 번에 많은 행동을 제안할 때의 혼란을 덜었습니다.",
          },
        ],
      },
      {
        area: "영역 2",
        areaTitle: "중첩 경보 - 값과 위치 중 우선순위 식별",
        items: [
          {
            icon: "현황",
            title: "",
            body: "밀접한 지점에 경보가 다량 발생할 때, 사용자가 상황을 한눈에 파악하기 어려웠습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "경보의 값과 위치 중 '경보가 발생한 지점'을 핵심 정보로 식별해 우선 노출하고, Critical-alert_top5로 위험 순위를 정리하도록 정의했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "지도 위 Alert pin과 팝오버로 경보 유형·섹션을 안내하고, 핀이 깜빡이는 모션으로 주의를 끌었습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "핀에 생성된 경보 수(multi alarm)를 표기해, 경보가 밀집된 지점의 심각도를 직관적으로 전달했습니다.",
          },
        ],
      },
      {
        area: "영역 3",
        areaTitle: "지도 맥락을 잃지 않게 - Section popup으로 드릴다운",
        items: [
          {
            icon: "현황",
            title: "",
            body: "현장 기술자는 섹션 상세를 볼 때마다 페이지를 전환해야 했고, 그 과정에서 전체 지도 맥락을 놓치는 문제가 있었습니다.",
          },
          {
            icon: "목표",
            title: "",
            body: "지도 화면을 벗어나지 않고도 섹션의 온도·거리·시간 상세를 확인할 수 있도록, 맥락 유지형 드릴다운을 목표로 했습니다.",
          },
          {
            icon: "UX",
            title: "",
            body: "Default·거리/시간·최소 정보·하단 정렬 등 5종 Section popup으로 상황별 정보량을 분기하고, Update-date 카운트다운으로 갱신 시점을 함께 보였습니다.",
          },
          {
            icon: "설 계",
            title: "",
            body: "센터장(Critical-alert_top5로 위험 순위 파악)과 현장 기술자(Section popup으로 맥락 유지) 두 역할의 동선을 분리해 화면을 설계했습니다.",
          },
        ],
      },
    ],
    designHighlights: [
      {
        zone: "Dashboard",
        title: "메인 대시보드 - 맵 + 경보 현황",
        desc: "지도 위 Alert pin으로 경보 발생 위치를 표시하고, Critical-alert_top5로 핵심 위험 순위를 함께 배치해 위험을 직관적으로 파악하도록 했습니다.",
        image: "/img/works/dts1.png",
      },
      {
        zone: "Sections",
        title: "온도 분포 - 그라데이션 바와 섹션 팝업",
        desc: "Temp overview 그라데이션 바(노랑→주황→레드)로 전체 온도 분포를 보여주고, 위험 구간 선택 시 Section popup으로 상세 온도·거리를 노출합니다.",
        image: "/img/works/dts2.png",
      },
      {
        zone: "Settings",
        title: "경보 설정 - 4단계 온도 범위 세팅",
        desc: "관심·주의·경계·심각 4단계 임계치를 채널마다 세팅하도록 레이아웃을 분배하고, 최소·최대치 설정과 토글·범위 추가/삭제를 지원합니다.",
        image: "/img/works/dts3.png",
      },
    ],
    reflection: [
      {
        title: "배운 것",
        body: "복잡한 관제 환경에서는 '색의 일관성'이 곧 사용자의 판단 속도라는 것을 확인했습니다. 경보 4단계 위계 색을 전 컴포넌트에 통일한 것이 핵심 결정이었습니다.",
      },
      {
        title: "해결하지 못한 것",
        body: "1920px 데스크탑 우선으로 설계해 모바일 대응은 범위 밖으로 남겼고, 경보 색의 색맹 접근성(색+아이콘+텍스트 3중 표기)은 일부만 적용해 대비비 검증을 다음 과제로 남겼습니다.",
      },
      {
        title: "다음 ITERATION",
        body: "이상 탐지 알고리즘 결과를 지도·그래프에 오버레이해, 경보가 뜨기 전에 대응하는 선제적 관제 UX로 확장할 계획입니다.",
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
