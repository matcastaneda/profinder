import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { TbSearch } from 'react-icons/tb';
import { useUserStore } from 'store/user';
import CustomIcon from 'components/CustomIcon';
import IntlMessage from 'components/IntlMessage';

const Search = () => {
  const setUsername = useUserStore(state => state.setUsername);
  const [value, setValue] = useState<string | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.target.value;
    const formattedValue = targetValue.trim().toLowerCase();
    setValue(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;

    setUsername(value);

    setValue(null);
    e.currentTarget.reset();
  };

  return (
    <section className="select-none rounded-xl bg-white dark:bg-[#1F2A48] shadow-sm text-sm">
      <form
        onSubmit={handleSubmit}
        className="group relative flex justify-between items-center p-2">
        <CustomIcon
          icon={TbSearch}
          className="absolute w-6 h-6 left-3.5 -mt-0.5 text-slate-400/60 dark:text-slate-100/60 pointer-events-none group-focus-within:text-sky-500 cursor-auto"
        />
        <input
          type="text"
          placeholder={IntlMessage({ id: 'app.main.search.placeholder' })}
          autoCapitalize="off"
          onChange={handleChange}
          ref={searchRef}
          className="appearance-none w-full bg-transparent py-2 pl-10 md:pl-12 focus:outline-none focus:right-0"
        />
        <button
          type="submit"
          className={clsx(
            'bg-sky-500 md:hover:bg-sky-600 text-slate-50 font-semibold ml-3 px-5 py-3.5 rounded-xl flex items-center justify-center w-auto',
            !value ? 'cursor-not-allowed opacity-50' : 'active:clickable',
          )}
          disabled={!value}>
          {IntlMessage({ id: 'app.main.search.button' })}
        </button>
      </form>
    </section>
  );
};

export default Search;
