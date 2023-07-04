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
  removeSearch: (search: SearchedUser) => void;
}

export const useSearchesStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      searches: [],
      addSearch: (search: SearchedUser) => {
        const isAlreadySearched = get().searches.some(
          searchedUser => searchedUser.username === search.username,
        );

        if (isAlreadySearched) return;

        set(state => ({
          searches: [
            ...state.searches,
            {
              username: search.username,
              avatar: search.avatar,
            },
          ],
        }));
      },
      removeSearch: (search: SearchedUser) =>
        set(state => ({
          searches: state.searches.filter(
            searchedUser => searchedUser.username !== search.username,
          ),
        })),
    }),
    { name: 'searches' },
  ),
);
