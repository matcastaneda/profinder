import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SearchedUser = {
  username: string;
  avatar: string;
};

interface State {
  searches: SearchedUser[] | [];
}

interface Actions {
  addSearch: (search: SearchedUser) => void;
}

export const useSearchesStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      searches: [],
      addSearch: (search: SearchedUser) => {
        const isAlreadySearched = new Set(
          get().searches.map(searchedUser => searchedUser.username),
        ).has(search.username);

        if (isAlreadySearched) return;

        set(state => ({
          searches: [
            ...state.searches,
            {
              username: search.username,
              avatar: search.avatar,
            },
          ].slice(-5),
        }));
      },
    }),
    { name: 'searches' },
  ),
);
