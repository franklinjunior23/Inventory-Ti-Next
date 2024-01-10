import { create } from "zustand";

interface BearState {
  ActiveMen: boolean;
  HandleActiveMenu: () => void;
}

export const StateMenuDash = create<BearState>((set) => ({
  ActiveMen: false,
  HandleActiveMenu: () => set((state) => ({ ActiveMen: !state.ActiveMen })),
}));

