"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const ClerkComponents = dynamic(
  () =>
    import("@clerk/nextjs").then((mod) => ({
      default: ({
        children,
      }: {
        children: (props: {
          SignedIn: typeof mod.SignedIn;
          SignedOut: typeof mod.SignedOut;
          UserButton: typeof mod.UserButton;
        }) => React.ReactNode;
      }) =>
        children({
          SignedIn: mod.SignedIn,
          SignedOut: mod.SignedOut,
          UserButton: mod.UserButton,
        }),
    })),
  {
    ssr: false,
    loading: () => <AuthFallback />,
  }
);

function AuthFallback() {
  return (
    <>
      <Link
        href="/login"
        className="text-gray-600 hover:text-gray-900 text-sm font-medium"
      >
        ログイン
      </Link>
      <Link href="/signup" className="btn btn-primary text-sm">
        無料で始める
      </Link>
    </>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Sync search input with URL query param on /products + close overlays on route change
  useEffect(() => {
    if (pathname === "/products") {
      setSearchQuery(searchParams.get("q") ?? "");
    }
    setMobileSearchOpen(false);
    setMobileMenuOpen(false);
  }, [pathname, searchParams]);

  // Close mobile search on Escape
  useEffect(() => {
    if (!mobileSearchOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileSearchOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileSearchOpen]);

  // Glass effect on scroll
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isClerkConfigured =
    clerkPubKey &&
    !clerkPubKey.includes("placeholder") &&
    !clerkPubKey.includes("xxx");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileSearchOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm" : "bg-white border-b border-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo and Nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xl font-bold text-primary-600">
                SaaSマーケット
              </Link>
              <a
                href="https://github.com/babushkai/saas-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                OSS
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/products"
                className={`nav-link ${pathname === "/products" || pathname?.startsWith("/products/") ? "nav-link-active" : ""}`}
                aria-current={pathname === "/products" || pathname?.startsWith("/products/") ? "page" : undefined}
              >
                プロダクト一覧
              </Link>
              <Link
                href="/pricing"
                className={`nav-link ${pathname === "/pricing" ? "nav-link-active" : ""}`}
                aria-current={pathname === "/pricing" ? "page" : undefined}
              >
                料金プラン
              </Link>
            </nav>
          </div>

          {/* Center: Desktop Search Bar */}
          <div className="hidden md:block flex-1 max-w-xs mx-6">
            <form onSubmit={handleSearch} className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg placeholder-gray-400 focus:bg-white focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400/20 transition-all"
              />
            </form>
          </div>

          {/* Right: Auth + Mobile controls */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="検索"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-4">
              {isClerkConfigured ? (
                <ClerkComponents>
                  {({ SignedIn, SignedOut, UserButton }) => (
                    <>
                      <SignedIn>
                        <Link
                          href="/dashboard"
                          className="btn btn-primary text-sm"
                        >
                          出品者ページ
                        </Link>
                        <UserButton
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-8 h-8",
                            },
                          }}
                        />
                      </SignedIn>
                      <SignedOut>
                        <Link
                          href="/login"
                          className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                        >
                          ログイン
                        </Link>
                        <Link href="/signup" className="btn btn-primary text-sm">
                          無料で始める
                        </Link>
                      </SignedOut>
                    </>
                  )}
                </ClerkComponents>
              ) : (
                <AuthFallback />
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="メニュー"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {mobileSearchOpen && (
          <div className="absolute left-0 right-0 top-full bg-white border-b border-gray-200 shadow-lg p-4 animate-slide-down md:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="プロダクトを検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-10 pr-20"
                autoFocus
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-primary text-sm py-1.5 px-3"
              >
                検索
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-slide-down">
          <nav className="px-4 py-4 space-y-2">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              プロダクト一覧
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              料金プラン
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              {isClerkConfigured ? (
                <ClerkComponents>
                  {({ SignedIn, SignedOut }) => (
                    <>
                      <SignedIn>
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block btn btn-primary text-center"
                        >
                          出品者ページ
                        </Link>
                      </SignedIn>
                      <SignedOut>
                        <Link
                          href="/login"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                        >
                          ログイン
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block btn btn-primary text-center"
                        >
                          無料で始める
                        </Link>
                      </SignedOut>
                    </>
                  )}
                </ClerkComponents>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                  >
                    ログイン
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block btn btn-primary text-center"
                  >
                    無料で始める
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
