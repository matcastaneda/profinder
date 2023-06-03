import { create } from 'zustand';
import { type ThemeType } from 'types';

type State = {
  theme: ThemeType | null;
};

type Actions = {
  setTheme: (theme: ThemeType) => void;
};

export const useThemeStore = create<State & Actions>(set => ({
  theme: null,
  setTheme: theme => set({ theme }),
}));
