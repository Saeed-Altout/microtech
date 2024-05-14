"use client";

import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";

export const ScrollTopButton = () => {
  const { isScrolled } = useScrollTop(600);

  return (
    <Button
      className={cn(
        "fixed z-10 bottom-4 right-4 rounded-full opacity-0 transition-all",
        isScrolled && "opacity-100"
      )}
      size="icon"
      onClick={() => scrollTo(0, 0)}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
