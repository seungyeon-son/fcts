export type PostBlock =
  | { type: 'lead'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; label?: string; lines: string[] }

export type Post = {
  slug: string
  category: 'Research and Insight' | 'News'
  tag: string
  title: string
  excerpt: string
  date: string // 표시용
  dateISO: string
  readingMin: number
  relatedWork?: { slug: string; label: string }
  body: PostBlock[]
}

export const posts: Post[] = [
  {
    slug: 'gcb-global-checkout-dropout',
    category: 'Research and Insight',
    tag: 'UX Research',
    title: '외국인 학습자는 왜 결제 직전에 떠났을까',
    excerpt:
      '글로벌 학점은행 GCB에서 결제 이탈을 추적하다 발견한 건 "결제 버튼"이 아니라 그 앞에 쌓인 언어와 신뢰의 문제였습니다. 디자이너에서 기획자의 시선으로 넘어가며 남긴 설계 기록.',
    date: '2026년 6월 17일',
    dateISO: '2026-06-17',
    readingMin: 6,
    relatedWork: { slug: 'global-credit-bank', label: 'UBION 글로벌 학점은행제 케이스 보기' },
    body: [
      {
        type: 'lead',
        text:
          '화면을 예쁘게 만드는 일과, 사람이 왜 떠나는지를 묻는 일은 다른 작업입니다. GCB(Global Credit Bank) 프로젝트는 그 차이를 가장 선명하게 느낀 작업이었습니다. 이 글은 결과물이 아니라, 결정의 과정과 그때 무엇을 배웠는지에 대한 기록입니다.',
      },
      {
        type: 'callout',
        label: '3줄 요약',
        lines: [
          '문제: 외국인 학습자가 결제 직전에 가장 많이 이탈했다.',
          '원인: 버튼이 아니라 그 앞에 쌓인 결제 수단 부재 + 언어 장벽이었다.',
          '결정: 글로벌 결제와 다국어 온보딩을 분리해 풀고, 설계 범위를 B2B 기관 권한까지 넓혔다.',
        ],
      },
      { type: 'heading', text: '1. 문제 — "결제 버튼"을 의심하기 전에' },
      {
        type: 'paragraph',
        text:
          '처음 받은 요청은 단순했습니다. "결제 전환율이 낮으니 결제 화면을 개선해달라." 디자이너의 본능은 곧장 화면으로 향합니다 — 버튼 색, CTA 문구, 레이아웃. 하지만 퍼널을 단계별로 끊어 보니 이탈은 결제 화면 안이 아니라 결제 화면에 도달하기 직전에 집중돼 있었습니다. 특히 해외 IP의 외국인 학습자에게서요.',
      },
      {
        type: 'quote',
        text: '"버튼을 고쳐달라"는 요청을 곧이곧대로 받아쓰지 않는 것 — 그게 기획자의 첫 일이었습니다.',
      },
      { type: 'heading', text: '2. 원인 — 하나의 이탈, 두 개의 벽' },
      {
        type: 'paragraph',
        text:
          '이탈을 한 덩어리로 보면 "결제가 어렵다"로 끝납니다. 그래서 의도적으로 둘로 분리해서 봤습니다. 첫째는 결제 수단의 부재였습니다. 국내 카드·간편결제 위주라 해외 카드와 글로벌 결제 수단을 쓰는 학습자는 마지막 단계에서 막혔습니다. 둘째는 언어 장벽이었습니다. 결제 직전까지 오는 동안 약관·자격 안내·환불 정책이 모국어로 읽히지 않아, 돈을 낼 만큼의 신뢰가 쌓이지 못한 채 결제 화면에 도착했습니다.',
      },
      {
        type: 'paragraph',
        text:
          '원인을 둘로 나눈 게 중요했습니다. 하나로 뭉뚱그리면 "결제 화면 다국어화"라는 부분적 해결로 끝났을 텐데, 분리해서 보니 결제 수단은 인프라 문제, 언어는 신뢰 형성 문제로 서로 다른 처방이 필요하다는 게 드러났습니다.',
      },
      { type: 'heading', text: '3. 결정 — 무엇을 했고, 무엇을 하지 않았나' },
      {
        type: 'list',
        items: [
          '글로벌 결제 수단을 도입해 인프라의 벽을 먼저 제거했습니다.',
          '다국어 온보딩을 결제 화면이 아니라 여정 초입으로 끌어올려, 신뢰가 결제 전에 쌓이도록 했습니다.',
          '3-Zone 정보구조(Discover → 학습 → 결제)로 여정을 선형화해 "지금 어디에 있고 다음이 무엇인지"를 항상 보이게 했습니다.',
        ],
      },
      {
        type: 'paragraph',
        text:
          '하지 않은 선택도 기록해 둡니다. 결제 화면만 다국어로 바꾸는 가장 빠른 안은 버렸습니다. 이탈의 원인이 화면이 아니라 그 앞의 신뢰였기 때문에, 결제 직전에 번역만 붙이는 건 증상만 가리는 일이라고 판단했습니다.',
      },
      { type: 'heading', text: '4. 범위 확장 — 화면 너머의 구조' },
      {
        type: 'paragraph',
        text:
          'GCB는 개인 학습자만의 서비스가 아니었습니다. 학습자를 보내는 B2B 교육 기관이 있었고, 그들에게는 소속 학습자를 관리하고 대리 결제하거나 수강 현황을 보는 권한이 필요했습니다. 결제 이탈을 파다 보니 "누가 어떤 권한으로 무엇을 볼 수 있는가"라는 권한 매트릭스 설계까지 범위가 넓어졌습니다.',
      },
      {
        type: 'paragraph',
        text:
          '이 지점이 디자이너에서 기획자로 넘어가는 감각의 분기점이었습니다. 화면 한 장을 잘 그리는 것에서, 보이지 않는 역할·상태·예외의 구조를 정의하는 일로요. 한 화면이 기관 관리자와 개인 학습자에게 다르게 작동해야 한다는 걸 정의하는 순간, 만들던 건 더 이상 그림이 아니라 시스템이었습니다.',
      },
      { type: 'heading', text: '5. 결과와 배운 점 — 정직하게' },
      {
        type: 'paragraph',
        text:
          '설계 결과로 결제 직전 단계의 마찰 지점을 줄이고, 외국인 학습자의 여정을 결제까지 끊김 없이 이을 수 있는 구조를 만들었습니다. 다만 솔직히 적자면, 개선 전후를 같은 조건에서 비교할 측정 체계를 처음부터 붙이지 못한 건 아쉬움으로 남습니다. 다음 프로젝트에서는 설계와 동시에 "무엇을, 어떻게 측정할지"를 먼저 합의하는 걸 원칙으로 가져가려 합니다.',
      },
      {
        type: 'quote',
        text:
          '결국 배운 건 하나였습니다. 요청은 화면으로 오지만, 문제는 거의 항상 화면 앞에 있다는 것.',
      },
    ],
  },
]

export const researchPosts = posts.filter((p) => p.category === 'Research and Insight')

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
