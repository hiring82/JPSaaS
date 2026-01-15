"use client";

import { useState } from "react";
import Link from "next/link";

const faqCategories = [
  {
    id: "general",
    name: "一般的な質問",
    faqs: [
      {
        question: "SaaSマーケットプレイスとは何ですか？",
        answer:
          "SaaSマーケットプレイスは、日本発のSaaS製品やサービスを集めたプラットフォームです。企業は最適なツールを見つけ、SaaS開発者は自社製品を多くの企業にアピールできます。",
      },
      {
        question: "利用は無料ですか？",
        answer:
          "購入者として製品を探す・問い合わせる機能は完全無料です。出品者として製品を掲載する場合は、無料プランから有料プランまで複数のオプションをご用意しています。",
      },
      {
        question: "アカウント登録に必要な情報は何ですか？",
        answer:
          "メールアドレスとパスワードのみで登録できます。Googleアカウントでのソーシャルログインも可能です。出品者として登録する場合は、会社情報の追加が必要です。",
      },
    ],
  },
  {
    id: "buyer",
    name: "購入者向け",
    faqs: [
      {
        question: "製品への問い合わせ方法を教えてください",
        answer:
          "各製品ページにある「問い合わせ」フォームから、出品者に直接連絡できます。氏名、メールアドレス、会社名（任意）、お問い合わせ内容を入力して送信してください。",
      },
      {
        question: "製品の購入や契約はどのように行いますか？",
        answer:
          "SaaSマーケットプレイスは製品の紹介・マッチングプラットフォームです。実際の購入や契約は、問い合わせ後に各出品者と直接行っていただきます。",
      },
      {
        question: "お気に入り機能はありますか？",
        answer:
          "はい、アカウント登録後にお気に入り機能をご利用いただけます。気になる製品を保存して、あとから比較検討できます。",
      },
    ],
  },
  {
    id: "seller",
    name: "出品者向け",
    faqs: [
      {
        question: "製品を出品するにはどうすればいいですか？",
        answer:
          "アカウント登録後、ダッシュボードから「プロダクトを追加」をクリックして、製品情報を入力してください。審査後、マーケットプレイスに掲載されます。",
      },
      {
        question: "出品に費用はかかりますか？",
        answer:
          "無料プランでは1製品まで無料で出品できます。複数製品の出品や、優先表示などの機能を利用するには有料プランへのアップグレードが必要です。",
      },
      {
        question: "問い合わせはどのように受け取りますか？",
        answer:
          "問い合わせはダッシュボードの「問い合わせ管理」で確認できます。また、登録メールアドレスにも通知が届きます。",
      },
      {
        question: "製品情報はあとから編集できますか？",
        answer:
          "はい、ダッシュボードからいつでも製品情報の編集、公開/非公開の切り替えが可能です。",
      },
    ],
  },
  {
    id: "account",
    name: "アカウント・設定",
    faqs: [
      {
        question: "パスワードを忘れた場合はどうすればいいですか？",
        answer:
          "ログインページの「パスワードをお忘れですか？」リンクからパスワードリセットを行えます。登録メールアドレスにリセット用のリンクが送信されます。",
      },
      {
        question: "メールアドレスを変更できますか？",
        answer:
          "はい、ダッシュボードの「設定」からメールアドレスを変更できます。変更後、確認メールが新しいアドレスに送信されます。",
      },
      {
        question: "アカウントを削除したい場合は？",
        answer:
          "ダッシュボードの「設定」>「セキュリティ」からアカウント削除をリクエストできます。削除されたデータは復元できませんのでご注意ください。",
      },
    ],
  },
];

const guides = [
  {
    title: "はじめてのガイド",
    description: "SaaSマーケットプレイスの基本的な使い方を学びましょう",
    href: "/help/getting-started",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "出品者ガイド",
    description: "製品を出品して多くの企業にアピールする方法",
    href: "/help/seller-guide",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "APIドキュメント",
    description: "開発者向けのAPI仕様とサンプルコード",
    href: "/help/api",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory);

  const filteredFaqs = searchQuery
    ? faqCategories.flatMap((cat) =>
        cat.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : currentCategory?.faqs || [];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ヘルプセンター
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            よくある質問への回答やガイドをご用意しています。
            お探しの情報が見つからない場合は、お気軽にお問い合わせください。
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="質問を検索..."
              className="input pl-12"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                {guide.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-600">{guide.description}</p>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          {!searchQuery && (
            <div className="lg:col-span-1">
              <h2 className="font-semibold text-gray-900 mb-4">カテゴリー</h2>
              <nav className="space-y-1">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary-100 text-primary-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* FAQ List */}
          <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
            <h2 className="font-semibold text-gray-900 mb-4">
              {searchQuery
                ? `「${searchQuery}」の検索結果: ${filteredFaqs.length}件`
                : currentCategory?.name}
            </h2>
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="card">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === `${activeCategory}-${index}` ? null : `${activeCategory}-${index}`)
                      }
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openFaq === `${activeCategory}-${index}` ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openFaq === `${activeCategory}-${index}` && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">
                    該当する質問が見つかりませんでした。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="card p-8 bg-gray-50">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              お探しの回答が見つかりませんか？
            </h2>
            <p className="text-gray-600 mb-6">
              サポートチームがお手伝いいたします。お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn btn-primary">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
