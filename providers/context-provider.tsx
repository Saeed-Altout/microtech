"use client";

import { ContextState } from "@/contexts/context-state";
import { useState, useEffect, useCallback } from "react";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (scrollY > 500) {
      setIsScrolled(true);
      localStorage.setItem("scrollTop", "true");
    } else {
      setIsScrolled(false);
      localStorage.setItem("scrollTop", "false");
    }
  }, []);

  useEffect(() => {
    const currentScrollTop = JSON.parse(
      localStorage.getItem("scrollTop") || "false"
    );
    if (currentScrollTop) {
      setIsScrolled(true);
    } else {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <ContextState.Provider value={{ isScrolled, handleScroll }}>
      {children}
    </ContextState.Provider>
  );
}
