import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type LanguageType } from 'types';

interface State {
  username: string;
  locale: LanguageType;
  reposCount: number;
  gistsCount: number;
  followersCount: number;
  followingCount: number;
}

interface Actions {
  setUsername: (username: string) => void;
  setLocale: (locale: LanguageType) => void;
  setReposCount: (repos: number) => void;
  setGistsCount: (gists: number) => void;
  setFollowersCount: (followers: number) => void;
  setFollowingCount: (following: number) => void;
}

const DEFAULT_USERNAME = 'matcastaneda';

export const useUserStore = create<State & Actions>()(
  persist(
    set => ({
      username: DEFAULT_USERNAME,
      locale: 'en',
      reposCount: 0,
      gistsCount: 0,
      followersCount: 0,
      followingCount: 0,
      setUsername: (username: string) => set({ username }),
      setLocale: (locale: LanguageType) => set({ locale }),
      setReposCount: (reposCount: number) => set({ reposCount }),
      setGistsCount: (gistsCount: number) => set({ gistsCount }),
      setFollowersCount: (followersCount: number) => set({ followersCount }),
      setFollowingCount: (followingCount: number) => set({ followingCount }),
    }),
    { name: 'user' },
  ),
);
