"use client";

import Link from "next/link";
import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { signIn } = useSignIn();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
    } catch {
      // Always show success to prevent user enumeration
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              メールを送信しました
            </h1>
            <p className="text-gray-600 mb-6">
              <strong>{email}</strong> にパスワードリセット用のコードを送信しました。
              メールをご確認ください。
            </p>
            <p className="text-sm text-gray-500 mb-6">
              メールが届かない場合は、迷惑メールフォルダをご確認いただくか、
              再度お試しください。
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail("");
                }}
                className="w-full btn btn-secondary"
              >
                別のメールアドレスで試す
              </button>
              <Link href="/login" className="block w-full btn btn-primary">
                ログインページに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">パスワードをお忘れですか？</h1>
          <p className="mt-2 text-gray-600">
            登録したメールアドレスを入力してください。
            パスワードリセット用のコードをお送りします。
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              メールアドレス
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input mt-1"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn btn-primary"
          >
            {isLoading ? "送信中..." : "リセットコードを送信"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          パスワードを思い出しましたか？{" "}
          <Link
            href="/login"
            className="text-primary-600 hover:text-primary-500 font-medium"
          >
            ログインする
          </Link>
        </p>
      </div>
    </div>
  );
}
