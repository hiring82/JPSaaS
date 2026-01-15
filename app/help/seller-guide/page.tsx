import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "出品者ガイド",
  description: "SaaSを出品するための手順とポイントを解説します。",
};

export default function SellerGuidePage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/help" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            ← ヘルプセンターへ戻る
          </Link>
        </div>
        <div className="card p-8 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">出品者ガイド</h1>
          <p className="mt-4 text-lg text-gray-600">
            まずは無料登録から始めて、魅力的な製品ページを公開しましょう。
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">1. アカウントを作成する</h2>
              <p className="mt-2 text-sm text-gray-600">新規登録後、ダッシュボードからサービスの管理を始められます。</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">2. プロダクト情報を登録する</h2>
              <p className="mt-2 text-sm text-gray-600">名前・説明・料金・特徴を整理して、購買意欲が高まる内容に仕上げます。</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">3. 問い合わせを追跡する</h2>
              <p className="mt-2 text-sm text-gray-600">問い合わせ管理を活用して、見込み顧客との接点を逃さず増やします。</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/signup" className="btn btn-primary">
              出品を始める
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
