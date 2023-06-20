import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type LanguageType } from 'types';

interface State {
  username: string;
  locale: LanguageType;
}

interface Actions {
  setUsername: (username: string) => void;
  setLocale: (locale: LanguageType) => void;
}

const DEFAULT_USERNAME = 'matcastaneda';

export const useUserStore = create<State & Actions>()(
  persist(
    set => ({
      username: DEFAULT_USERNAME,
      locale: 'en',
      setUsername: (username: string) => set({ username }),
      setLocale: (locale: LanguageType) => set({ locale }),
    }),
    { name: 'user' },
  ),
);
