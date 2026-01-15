import { ClerkAuthPage } from "@/components/auth/ClerkAuthPage";

export default function SignUpPage() {
  return <ClerkAuthPage variant="sign-up" path="/sign-up" signInUrl="/sign-in" />;
}
