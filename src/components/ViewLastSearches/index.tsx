import CustomIcon from 'components/CustomIcon';
import IntlMessage from 'components/IntlMessage';
import { TbSearch } from 'react-icons/tb';
import { useSearchesStore } from 'store/searches';
import { useUserStore } from 'store/user';
import { cn } from 'utils/cn';

const ViewLastSearches = () => {
  const { username, setUsername } = useUserStore(state => ({
    username: state.username,
    setUsername: state.setUsername,
  }));
  const searches = useSearchesStore(state => state.searches);
  const currentSearch = searches.find(search => search.username === username);

  return (
    <section>
      <h2 className="text-lg font-medium mb-3">
        &#126; {IntlMessage({ id: 'app.main.last-searches' })}
      </h2>
      <ul className="flex flex-wrap justify-start gap-3">
        {searches.map((search, index) => (
          <li
            key={index}
            onClick={() => setUsername(search.username)}
            className={cn(
              'flex space-x-3 items-center bg-white dark:bg-[#1F2A48] px-4 py-3 rounded-lg select-none cursor-pointer clickable',
              currentSearch?.username === search.username &&
                'bg-sky-500 dark:bg-sky-600 text-white',
            )}>
            <img
              src={search.avatar}
              alt={search.username}
              className={cn(
                'w-7 h-7 rounded-full outline-1 outline-offset-2 outline-dashed outline-sky-400',
                currentSearch?.username === search.username && 'outline-white',
              )}
            />
            <small className="font-semibold mt-0.5 tracking-wide">
              {search.username}
            </small>

            <CustomIcon
              icon={TbSearch}
              size={16}
              className={cn(
                'opacity-70 text-sky-400',
                currentSearch?.username === search.username && 'text-white',
              )}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ViewLastSearches;
