import { AboutSection } from "./_components/about";
import { ContactSection } from "./_components/contact";
import { HeroSection } from "./_components/hero";
import { ServicesSection } from "./_components/services";
import { StartProjectSection } from "./_components/start-project";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StartProjectSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
