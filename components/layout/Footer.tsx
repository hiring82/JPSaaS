import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter */}
        <div className="pb-8 mb-8 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">最新情報をニュースレターで受け取る</h3>
              <p className="text-xs text-gray-500 mt-0.5">新着プロダクトやアップデートをお届けします。</p>
            </div>
            <NewsletterForm />
          </div>
        </div>

        {/* Link Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold text-primary-600">
              SaaSマーケット
            </Link>
            <span className="text-xs text-primary-500 font-medium mt-1 block">
              日本のSaaSを、ひとつの場所で。
            </span>
            <p className="mt-4 text-sm text-gray-500 max-w-md leading-relaxed">
              日本発のSaaS製品・サービスを見つけるマーケットプレイス。
              あなたのビジネスを加速させるツールがここにあります。
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              プロダクト
            </h4>
            <ul className="space-y-3">
              <li><Link href="/products" className="footer-link">プロダクト一覧</Link></li>
              <li><Link href="/categories" className="footer-link">カテゴリー</Link></li>
              <li><Link href="/search" className="footer-link">検索</Link></li>
              <li><Link href="/pricing" className="footer-link">料金プラン</Link></li>
              <li><Link href="/blog" className="footer-link">ブログ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              出品者向け
            </h4>
            <ul className="space-y-3">
              <li><Link href="/signup" className="footer-link">出品者登録</Link></li>
              <li><Link href="/dashboard" className="footer-link">ダッシュボード</Link></li>
              <li><Link href="/help" className="footer-link">ヘルプセンター</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              会社情報
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="footer-link">会社概要</Link></li>
              <li><Link href="/contact" className="footer-link">お問い合わせ</Link></li>
              <li><Link href="/terms" className="footer-link">利用規約</Link></li>
              <li><Link href="/privacy" className="footer-link">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} SaaSマーケット. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/babushkai/saas-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-150 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/babushkai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-150 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
