import Link from "next/link";
import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { FAQJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "料金プラン - SaaSマーケット",
  description: "SaaSマーケットの料金プラン。フリープランから始めて、ビジネスの成長に合わせてアップグレードできます。",
  openGraph: {
    title: "料金プラン | SaaSマーケット",
    description: "フリープランから始めて、ビジネスの成長に合わせてアップグレード。",
  },
};

const plans = [
  {
    id: "free",
    name: "フリー",
    price: "¥0",
    period: "永久無料",
    description: "まずは試してみたい方向け",
    features: [
      { text: "3プロダクトまで掲載", included: true },
      { text: "基本的なプロダクトページ", included: true },
      { text: "無制限のPV", included: true },
      { text: "問い合わせフォーム", included: true },
      { text: "コミュニティサポート", included: true },
      { text: "アナリティクス", included: false },
      { text: "注目プロダクトへの掲載", included: false },
      { text: "カスタムブランディング", included: false },
    ],
    cta: "無料で始める",
    highlighted: false,
  },
  {
    id: "standard",
    name: "スタンダード",
    price: "¥980",
    period: "/月",
    description: "成長中のSaaS企業向け",
    features: [
      { text: "10プロダクトまで掲載", included: true },
      { text: "カスタムプロダクトページ", included: true },
      { text: "無制限のPV", included: true },
      { text: "問い合わせフォーム", included: true },
      { text: "メールサポート", included: true },
      { text: "アナリティクスダッシュボード", included: true },
      { text: "注目プロダクトへの掲載", included: true },
      { text: "カスタムブランディング", included: false },
    ],
    cta: "スタンダードを選択",
    highlighted: true,
  },
  {
    id: "pro",
    name: "プロ",
    price: "¥2,980",
    period: "/月",
    description: "大規模なSaaS企業向け",
    features: [
      { text: "無制限のプロダクト掲載", included: true },
      { text: "プレミアムプロダクトページ", included: true },
      { text: "無制限のPV", included: true },
      { text: "問い合わせフォーム + API連携", included: true },
      { text: "優先サポート", included: true },
      { text: "高度なアナリティクス", included: true },
      { text: "トップページへの掲載", included: true },
      { text: "カスタムブランディング", included: true },
    ],
    cta: "プロを選択",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "無料プランでもプロダクトを掲載できますか？",
    answer: "はい、無料プランでも3つのプロダクトを掲載できます。まずは無料プランでお試しいただき、必要に応じてアップグレードしてください。",
  },
  {
    question: "プランの変更はいつでもできますか？",
    answer: "はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次の請求サイクルから適用されます。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "クレジットカード（Visa, Mastercard, JCB, American Express）に対応しています。Stripeによる安全な決済処理を採用しています。",
  },
  {
    question: "年払いの割引はありますか？",
    answer: "はい、年払いをお選びいただくと、月払いと比較して2ヶ月分お得になります。詳しくはお問い合わせください。",
  },
];

export default async function PricingPage() {
  const { userId } = await auth();
  const isLoggedIn = !!userId;

  return (
    <div className="py-16">
      <FAQJsonLd questions={faqs} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            フリープランで今すぐ始められます
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            シンプルな料金プラン
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            あなたのビジネスの規模に合わせて、最適なプランをお選びください。
            いつでもアップグレード・ダウングレードが可能です。
          </p>
        </div>

        {/* Pricing Cards */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 items-start">
          {plans.map((plan) => {
            const href = isLoggedIn
              ? plan.id === "free"
                ? "/dashboard"
                : "/dashboard/settings?tab=billing"
              : "/signup";

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-white border-2 border-primary-500 shadow-lg ring-1 ring-primary-500/10"
                    : "card"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-btn-primary">
                      人気No.1
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <Link
                  href={href}
                  className={`w-full btn text-center mb-8 ${
                    plan.highlighted ? "btn-primary btn-lg" : "btn-outline"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                      )}
                      <span className={feature.included ? "text-sm text-gray-700" : "text-sm text-gray-400"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </StaggerGrid>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center tracking-tight mb-8">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <Link href="/contact" className="btn btn-outline">
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
