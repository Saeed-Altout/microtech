import { create } from "zustand";

interface UseAddBookNowProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useAddBookNow = create<UseAddBookNowProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
