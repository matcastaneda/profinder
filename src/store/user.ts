import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  username: string;
}

interface Actions {
  setUsername: (username: string) => void;
}

const DEFAULT_USERNAME = 'matcastaneda';

export const useUserStore = create<State & Actions>()(
  persist(
    set => ({
      username: DEFAULT_USERNAME,
      setUsername: (username: string) => set({ username }),
    }),
    { name: 'user' },
  ),
);
