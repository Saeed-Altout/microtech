import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description:
    "Securely authenticate and register on our platform. Access your account with confidence using our robust authentication system. Sign in or create an account to explore our services.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      {/* TODO Build Navbar */}
      <main className="h-full flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}
