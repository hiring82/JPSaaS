import { Metadata } from "next";
import Link from "next/link";
import { MOCK_CATEGORY_CONTENT } from "@/lib/categories";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "カテゴリー一覧 - SaaSをカテゴリーから探す",
  description:
    "マーケティング、営業・CRM、経理・財務、人事・労務、業務効率化、コミュニケーション、開発、デザインなど、9つのカテゴリーからSaaS製品を探せます。",
  keywords: [
    "SaaSカテゴリー",
    "マーケティングツール",
    "CRMツール",
    "経理ソフト",
    "人事システム",
    "業務効率化",
    "ビジネスチャット",
  ],
  openGraph: {
    title: "カテゴリー一覧 - SaaSをカテゴリーから探す | SaaSマーケット",
    description:
      "9つのカテゴリーからSaaS製品を探せます。あなたのビジネスに最適なツールを見つけましょう。",
  },
};

const categoryInfo = MOCK_CATEGORY_CONTENT.map((category) => ({
  ...category,
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {category.id === "marketing" && (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </>
      )}
      {category.id === "sales" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )}
      {category.id === "finance" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )}
      {category.id === "hr" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      )}
      {category.id === "productivity" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      )}
      {category.id === "communication" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      )}
      {category.id === "development" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      )}
      {category.id === "design" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      )}
      {category.id === "other" && (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      )}
    </svg>
  ),
}));

export default async function CategoriesPage() {
  const categories = categoryInfo;
  const totalProducts = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            カテゴリー一覧
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {totalProducts}件のSaaS製品を{categoryInfo.length}つのカテゴリから整理しました。
            目的・導入シーン・主な機能を確認しながら、あなたの業務に合うツールを見つけましょう。
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="card p-6 hover:shadow-lg transition-shadow group h-full"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {category.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h2>
                    <span className="text-sm font-medium text-primary-600">
                      {category.count}件
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-gray-100 bg-gray-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  おすすめの使い方
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  {category.useCases}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  代表例
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full border border-primary-100 bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お探しのカテゴリーがありませんか？
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              キーワードで検索するか、すべてのプロダクトを閲覧して
              最適なツールを見つけましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn btn-primary">
                すべてのプロダクトを見る
              </Link>
              <Link href="/search" className="btn btn-secondary">
                キーワードで検索
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
