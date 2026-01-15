import { ClerkAuthPage } from "@/components/auth/ClerkAuthPage";

export default function SignInPage() {
  return <ClerkAuthPage variant="sign-in" path="/sign-in" signUpUrl="/sign-up" />;
}
