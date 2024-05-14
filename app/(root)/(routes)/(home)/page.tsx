import type { Metadata } from "next";

import {
  AboutSection,
  ContactSection,
  HeroSection,
  ServicesSection,
  StartProjectSection,
} from "./_components";

export const metadata: Metadata = {
  title: "Home",
  description: "Home Page",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StartProjectSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
