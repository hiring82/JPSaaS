export interface UICategory {
  id: string;
  name: string;
}

/**
 * All product categories used across the site.
 * IDs must match the `category` column values in the `products` table.
 */
export const PRODUCT_CATEGORIES: UICategory[] = [
  { id: "marketing", name: "マーケティング" },
  { id: "sales", name: "営業・CRM" },
  { id: "finance", name: "経理・財務" },
  { id: "hr", name: "人事・労務" },
  { id: "productivity", name: "業務効率化" },
  { id: "communication", name: "コミュニケーション" },
  { id: "development", name: "開発・エンジニアリング" },
  { id: "design", name: "デザイン" },
  { id: "other", name: "その他" },
];

/** Categories with "all" option — used in filter UI */
export const FILTER_CATEGORIES: UICategory[] = [
  { id: "all", name: "すべて" },
  ...PRODUCT_CATEGORIES,
];

/** Category color system — full class strings to survive Tailwind purge */
interface CategoryColor {
  bg: string;
  text: string;
  gradient: string;
}

const CATEGORY_COLOR_MAP: Record<string, CategoryColor> = {
  marketing: { bg: "bg-orange-50", text: "text-orange-700", gradient: "bg-gradient-to-br from-orange-100 to-amber-50" },
  sales: { bg: "bg-blue-50", text: "text-blue-700", gradient: "bg-gradient-to-br from-blue-100 to-sky-50" },
  finance: { bg: "bg-emerald-50", text: "text-emerald-700", gradient: "bg-gradient-to-br from-emerald-100 to-teal-50" },
  hr: { bg: "bg-purple-50", text: "text-purple-700", gradient: "bg-gradient-to-br from-purple-100 to-violet-50" },
  productivity: { bg: "bg-amber-50", text: "text-amber-700", gradient: "bg-gradient-to-br from-amber-100 to-yellow-50" },
  communication: { bg: "bg-cyan-50", text: "text-cyan-700", gradient: "bg-gradient-to-br from-cyan-100 to-sky-50" },
  development: { bg: "bg-indigo-50", text: "text-indigo-700", gradient: "bg-gradient-to-br from-indigo-100 to-blue-50" },
  design: { bg: "bg-pink-50", text: "text-pink-700", gradient: "bg-gradient-to-br from-pink-100 to-rose-50" },
  other: { bg: "bg-gray-50", text: "text-gray-700", gradient: "bg-gradient-to-br from-gray-100 to-slate-50" },
};

const DEFAULT_COLOR: CategoryColor = { bg: "bg-gray-50", text: "text-gray-700", gradient: "bg-gradient-to-br from-gray-100 to-slate-50" };

export function getCategoryColor(id: string): CategoryColor {
  return CATEGORY_COLOR_MAP[id] ?? DEFAULT_COLOR;
}

export interface CategoryContent {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  useCases: string;
  count: number;
  examples: string[];
}

export const MOCK_CATEGORY_CONTENT: CategoryContent[] = [
  {
    id: "marketing",
    name: "マーケティング",
    description: "集客から施策改善まで、広告運用・メール・SNS・SEOを一元管理したいチーム向けのSaaSです。",
    highlights: ["広告運用", "メール施策", "分析レポート"],
    useCases: "認知拡大・見込み獲得・施策改善",
    count: 24,
    examples: ["HubSpot", "Mailchimp", "Google Analytics"],
  },
  {
    id: "sales",
    name: "営業・CRM",
    description: "商談管理・顧客情報・見積作成をつなげて、営業の進捗を可視化したい組織に最適です。",
    highlights: ["商談管理", "顧客DB", "見積・提案"],
    useCases: "営業効率化・成約率向上・顧客管理",
    count: 18,
    examples: ["Salesforce", "HubSpot CRM", "Pipedrive"],
  },
  {
    id: "finance",
    name: "経理・財務",
    description: "請求書・経費・会計処理を自動化し、経営判断に必要な数字を素早く把握できるようにします。",
    highlights: ["請求管理", "経費精算", "会計連携"],
    useCases: "業務の標準化・ミス削減・決算対応",
    count: 16,
    examples: ["freee", "マネーフォワード", "Money Forward"],
  },
  {
    id: "hr",
    name: "人事・労務",
    description: "採用・勤怠・給与・評価までを一つの流れで管理し、人事業務をスムーズに進められます。",
    highlights: ["採用管理", "勤怠管理", "人事評価"],
    useCases: "人事業務の効率化・制度運用・組織管理",
    count: 14,
    examples: ["SmartHR", "みんなのHR", "勤怠管理ツール"],
  },
  {
    id: "productivity",
    name: "業務効率化",
    description: "タスク管理・プロジェクト管理・業務自動化を組み合わせて、現場の作業を見える化します。",
    highlights: ["タスク管理", "プロジェクト", "自動化"],
    useCases: "進捗管理・属人化防止・手作業削減",
    count: 21,
    examples: ["Notion", "Trello", "Asana"],
  },
  {
    id: "communication",
    name: "コミュニケーション",
    description: "チャット・会議・ナレッジ共有を活用して、分散したチームでも情報を自然に伝える基盤を作ります。",
    highlights: ["ビジネスチャット", "会議", "ナレッジ共有"],
    useCases: "社内連携・リモート運用・意思決定の高速化",
    count: 19,
    examples: ["Slack", "Zoom", "Notion Wiki"],
  },
  {
    id: "development",
    name: "開発・エンジニアリング",
    description: "コード管理・デプロイ・監視を一連の流れで支援し、開発スピードと品質を両立させます。",
    highlights: ["CI/CD", "モニタリング", "レビュー支援"],
    useCases: "開発効率化・運用安定化・品質管理",
    count: 17,
    examples: ["GitHub", "Jira", "Datadog"],
  },
  {
    id: "design",
    name: "デザイン",
    description: "UI/UXの設計からプロトタイプ作成、画像・動画制作まで、デザイン業務を効率的に進めます。",
    highlights: ["UIデザイン", "プロトタイプ", "画像・動画"],
    useCases: "ブランド構築・プロダクト改善・コンテンツ制作",
    count: 13,
    examples: ["Figma", "Canva", "Adobe Creative Cloud"],
  },
  {
    id: "other",
    name: "その他",
    description: "特定の業務カテゴリに当てはまらない、ユニークな用途に対応するサービスです。",
    highlights: ["多目的", "独自機能", "柔軟な連携"],
    useCases: "ニーズに合わせた機能追加・特殊業務対応",
    count: 8,
    examples: ["Zapier", "Make", "Airtable"],
  },
];

/** Homepage featured categories (explicitly curated subset) */
const HOMEPAGE_IDS = ["marketing", "sales", "finance", "hr", "productivity", "communication"];
export const HOMEPAGE_CATEGORIES: UICategory[] = PRODUCT_CATEGORIES.filter(c => HOMEPAGE_IDS.includes(c.id));
