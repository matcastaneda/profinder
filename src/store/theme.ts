import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type ThemeType } from 'types';

type State = {
  theme: ThemeType;
};

type Actions = {
  setTheme: (theme: ThemeType) => void;
};

export const useThemeStore = create<State & Actions>()(
  persist(
    set => ({
      theme: 'system',
      setTheme: theme => set({ theme }),
    }),
    { name: 'theme' },
  ),
);
