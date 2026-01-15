import type { Metadata } from "next";
import { ClerkAuthPage } from "@/components/auth/ClerkAuthPage";

export const metadata: Metadata = {
  title: "ログイン",
  description: "SaaSマーケットにログインして出品者ダッシュボードを利用しましょう。",
};

export default function LoginPage() {
  return <ClerkAuthPage variant="sign-in" path="/login" signUpUrl="/signup" />;
}
