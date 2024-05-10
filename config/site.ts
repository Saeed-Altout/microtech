import mobile from "@/public/mobile.svg";
import web from "@/public/web.svg";
import uiux from "@/public/ui&ux.svg";
import { CheckCircle, Goal, Hand, Stars } from "lucide-react";

export const siteConfig = {
  name: "Microtech",
  description:
    "At MicroTech, we're dedicated to transforming your ideas into powerful digital experiences. As a leading application design and development company, we specialize in creating customized, cutting-edge solutions that propel your business forward. Discover Our Expertise",
};

export const routes = [
  {
    label: "home",
    href: "/",
    pathname: "/",
  },
  {
    label: "contact us",
    href: "/contact-us",
    pathname: "/contact-us",
  },
];

export const features = [
  {
    title: "Our Vision",
    description:
      "we are a fresh face in the world of digital innovation. Our journey has just begun, but our aspirations are grand, our passion is unwavering, and our dedication is resolute.",
    icon: Stars,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is clear - to provide businesses with cutting-edge digital solutions that leave a lasting impact. We're here to help you navigate the complexities of the digital world, create beautiful and functional designs, and build applications that drive your success.",
    icon: Goal,
  },
  {
    title: "Our Values",
    description:
      "Our core values are the foundation upon which we build relationships, create solutions, and drive our company forward.",
    icon: CheckCircle,
  },
  {
    title: "Our Promise",
    description:
      "We may be new, but we promise unwavering commitment to your success, a fresh perspective on digital solutions, and the unyielding pursuit of excellence.",
    icon: Hand,
  },
];

export const services = [
  {
    icon: web,
    title: "Website Development",
    description:
      "Creating stunning and functional websites that represent your brand and drive results.",
  },
  {
    icon: uiux,
    title: "UX & UI Design",
    description:
      "Crafting seamless and user-friendly experiences that captivate your audience.",
  },
  {
    icon: mobile,
    title: "Application Development",
    description:
      "Building applications that stand out, meet user needs, and drive business growth.",
  },
];
