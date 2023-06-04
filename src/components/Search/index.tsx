import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons';
import { TbSearch } from 'react-icons/tb';
import { useUserStore } from 'store/user';
import Icon from 'components/Icon';

const LoadingIcon: IconType = ({ ...props }) => (
  <svg
    className="animate-spin h-5 w-5 text-current"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
);

const Search = () => {
  const setUsername = useUserStore(state => state.setUsername);
  const [value, setValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    e.preventDefault();
    if (!value) return;

    setTimeout(() => {
      setUsername(value);
      setLoading(false);
    }, 1000);

    setValue(null);
    e.currentTarget.reset();
  };

  return (
    <section className="select-none rounded-xl bg-white dark:bg-[#1F2A48] shadow-sm text-sm">
      <form
        onSubmit={handleSubmit}
        className="group relative flex justify-between items-center p-2">
        <Icon
          icon={TbSearch}
          className="absolute w-6 h-6 left-3.5 -mt-0.5 text-slate-400/60 dark:text-slate-100/60 pointer-events-none group-focus-within:text-sky-500 cursor-auto"
        />
        <input
          type="text"
          placeholder="Search github username"
          autoComplete="off"
          autoFocus={true}
          onChange={handleChange}
          ref={searchRef}
          className="appearance-none w-full bg-transparent py-2 pl-10 md:pl-12 focus:outline-none focus:right-0"
        />
        <button
          type="submit"
          className={clsx(
            'bg-sky-500 md:hover:bg-sky-600 text-slate-50 font-semibold ml-3 px-5 py-3.5 rounded-xl flex items-center justify-center w-auto',
            !value || loading
              ? 'cursor-not-allowed opacity-50'
              : 'active:clickable',
          )}
          disabled={!value || loading}>
          {loading ? <Icon icon={LoadingIcon} /> : 'Search'}
        </button>
      </form>
    </section>
  );
};

export default Search;
