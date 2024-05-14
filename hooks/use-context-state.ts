import { useContext } from "react";

import { ContextState } from "@/contexts/context-state";

export const useContextState = () => useContext(ContextState);
