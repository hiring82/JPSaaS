import Link from "next/link";
import { SignIn, SignUp } from "@clerk/nextjs";

type AuthVariant = "sign-in" | "sign-up";

type ClerkAuthPageProps = {
  variant: AuthVariant;
  path: string;
  signInUrl?: string;
  signUpUrl?: string;
  afterSignInUrl?: string;
  afterSignUpUrl?: string;
};

export function ClerkAuthPage({
  variant,
  path,
  signInUrl = "/login",
  signUpUrl = "/signup",
  afterSignInUrl = "/dashboard",
  afterSignUpUrl = "/dashboard",
}: ClerkAuthPageProps) {
  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const isClerkConfigured =
    typeof clerkPubKey === "string" &&
    clerkPubKey.length > 0 &&
    !clerkPubKey.includes("placeholder") &&
    !clerkPubKey.includes("xxx");

  if (!isClerkConfigured) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            認証設定中
          </p>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            {variant === "sign-in" ? "ログイン" : "新規登録"}ページを準備中です
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            認証サービスの設定が完了すると、このページでログインと新規登録が利用できるようになります。
          </p>
          <div className="mt-6">
            <Link href="/" className="btn btn-primary">
              トップへ戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
            SaaSマーケット
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {variant === "sign-in" ? "アカウントにログイン" : "無料で始める"}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {variant === "sign-in"
              ? "出品者向けダッシュボードに戻って続けましょう。"
              : "登録後すぐに商品管理や掲載を始められます。"}
          </p>
        </div>

        {variant === "sign-in" ? (
          <SignIn
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-lg border border-gray-200 rounded-2xl",
                headerTitle: "text-2xl font-bold",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-primary-600 hover:bg-primary-700",
                footerActionLink: "text-primary-600 hover:text-primary-500",
              },
              variables: {
                colorPrimary: "#2563eb",
              },
            }}
            path={path}
            routing="path"
            signUpUrl={signUpUrl}
            afterSignInUrl={afterSignInUrl}
          />
        ) : (
          <SignUp
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-lg border border-gray-200 rounded-2xl",
                headerTitle: "text-2xl font-bold",
                headerSubtitle: "text-gray-600",
                socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
                formButtonPrimary: "bg-primary-600 hover:bg-primary-700",
                footerActionLink: "text-primary-600 hover:text-primary-500",
              },
              variables: {
                colorPrimary: "#2563eb",
              },
            }}
            path={path}
            routing="path"
            signInUrl={signInUrl}
            afterSignUpUrl={afterSignUpUrl}
          />
        )}
      </div>
    </div>
  );
}
