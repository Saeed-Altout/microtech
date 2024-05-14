import { createContext } from "react";

interface ContextStateProps {
  isScrolled: boolean;
  handleScroll: () => void;
}

export const ContextState = createContext<ContextStateProps>({
  isScrolled: false,
  handleScroll: () => {},
});
