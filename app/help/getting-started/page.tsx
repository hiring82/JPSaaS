import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "はじめてのガイド",
  description: "SaaSマーケットの基本的な使い方を解説します。",
};

export default function GettingStartedPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/help" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            ← ヘルプセンターへ戻る
          </Link>
        </div>
        <div className="card p-8 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">はじめてのガイド</h1>
          <p className="mt-4 text-lg text-gray-600">
            SaaSマーケットの使い方を、購入者・出品者それぞれの観点からご案内します。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">購入者として使う</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• プロダクト一覧からカテゴリや検索で探す</li>
                <li>• 気になるサービスを比較して問い合わせる</li>
                <li>• 価格や機能を確認して最適な選択をする</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">出品者として使う</h2>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• 新規登録後にダッシュボードへ進む</li>
                <li>• プロダクト情報を入力して公開する</li>
                <li>• 問い合わせを管理して商談につなげる</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn btn-primary">
              プロダクトを探す
            </Link>
            <Link href="/signup" className="btn btn-outline">
              新規登録する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
