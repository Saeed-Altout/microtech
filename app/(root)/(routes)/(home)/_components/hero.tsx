import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";

import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div id="hero" className="w-full max-w-screen-xl mx-auto px-4 pt-10 pb-20">
      <div className="flex justify-center items-center gap-16 flex-wrap">
        <div className="flex flex-col gap-y-5 max-w-5xl flex-1">
          <h1 className="font-medium md:font-semibold tracking-wide text-4xl md:text-5xl lg:text-6xl  md:!leading-[60px] lg:!leading-[70px] xl:!leading-[85px]">
            Crafting Innovative Digital Solutions.
          </h1>
          <p>
            At MicroTech, we&apos;re dedicated to transforming your ideas into
            powerful digital experiences. As a leading application design and
            development company, we specialize in creating customized,
            cutting-edge solutions that propel your business forward. Discover
            Our Expertise
          </p>
          <div className="flex items-center gap-x-2">
            <Button asChild>
              <Link href="/contact-us">
                Get started <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://t.me/microtechdev" target="_blank">
                <span className="sr-only">Telegram</span>
                <BsTelegram className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link
                href="https://www.facebook.com/microtechdev/"
                target="_blank"
              >
                <span className="sr-only">Facebook</span>
                <BsFacebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link
                href="https://www.linkedin.com/company/microtechdev"
                target="_blank"
              >
                <span className="sr-only">Linkedin</span>
                <BsLinkedin className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          priority
          width={400}
          height={400}
          src="./hero.svg"
          alt="Image Hero"
        />
      </div>
    </div>
  );
};
