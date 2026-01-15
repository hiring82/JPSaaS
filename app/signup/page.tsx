import type { Metadata } from "next";
import { ClerkAuthPage } from "@/components/auth/ClerkAuthPage";

export const metadata: Metadata = {
  title: "新規登録",
  description: "SaaSマーケットで新規登録して、あなたのサービスを掲載しましょう。",
};

export default function SignupPage() {
  return <ClerkAuthPage variant="sign-up" path="/signup" signInUrl="/login" />;
}
