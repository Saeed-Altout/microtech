import { AboutSection } from "./_components/about";
import { ContactSection } from "./_components/contact";
import { HeroSection } from "./_components/hero";
import { ServicesSection } from "./_components/services";
import { StartProjectSection } from "./_components/start-project";

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
