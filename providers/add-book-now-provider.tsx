"use client";

import { useState, useEffect } from "react";
import { AddBookNow } from "@/components/modals/add-book-now";

export const AddBookNowProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddBookNow />
    </>
  );
};
