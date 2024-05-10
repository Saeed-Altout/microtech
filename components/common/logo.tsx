import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg";
import logoDark from "@/public/logo-dark.svg";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Link href="/" className={cn("", className)} {...props}>
      <Image src={logo} alt="Logo" className="block dark:hidden w-40" />
      <Image src={logoDark} alt="Logo" className="hidden dark:block w-40" />
    </Link>
  );
};
