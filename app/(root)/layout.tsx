import type { Metadata } from "next";

import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 pt-16">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}