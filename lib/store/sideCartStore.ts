import { create } from "zustand";

type OpenCartState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useSideCartStore = create<OpenCartState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
