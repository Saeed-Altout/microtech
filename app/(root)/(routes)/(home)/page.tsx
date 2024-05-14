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
  description:
    "MicroTech is your dedicated partner in transforming ideas into powerful digital experiences. As a leading application design and development company, we specialize in creating customized, cutting-edge solutions to propel your business forward. Discover our expertise today",
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
