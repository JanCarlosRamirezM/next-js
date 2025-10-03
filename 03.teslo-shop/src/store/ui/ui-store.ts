import { create } from "zustand";

interface UIState {
  isSideMenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSideMenuOpen: false,
  openSidebar: () => set(() => ({ isSideMenuOpen: true })),
  closeSidebar: () => set(() => ({ isSideMenuOpen: false })),
}));
