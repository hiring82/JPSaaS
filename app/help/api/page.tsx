import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "APIドキュメント",
  description: "SaaSマーケットのAPI連携についての概要です。",
};

export default function ApiDocsPage() {
  return (
    <div className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/help" className="text-sm font-medium text-primary-600 hover:text-primary-700">
            ← ヘルプセンターへ戻る
          </Link>
        </div>
        <div className="card p-8 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900">APIドキュメント</h1>
          <p className="mt-4 text-lg text-gray-600">
            今後の連携拡張に向けて、APIの利用方法や対応予定についてご案内します。
          </p>

          <div className="mt-8 rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">公開予定の内容</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• 認証方法とエンドポイント一覧</li>
              <li>• 商品データ取得・更新の流れ</li>
              <li>• 例外エラーとリトライ方針</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">
              連携について問い合わせる
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
