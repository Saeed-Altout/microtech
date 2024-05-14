import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { ScrollTopButton } from "./_components/scroll-top-button";

import { AddBookNowProvider } from "@/providers/add-book-now-provider";

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
      <ScrollTopButton />
      <main className="flex-1 pt-16">
        {children} <AddBookNowProvider />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
