import { IoOpenOutline } from 'react-icons/io5';
import { type User } from 'types';

const ViewGithubUsers = (user: User) => {
  const userTypeColor =
    user.type === 'User' ? 'text-sky-500' : 'text-amber-500';

  return (
    <li className="clickable">
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center rounded-lg border dark:border-slate-300/30 hover:border-sky-500 p-3">
        <img
          src={user.avatar_url}
          alt={user.login}
          width={56}
          height={56}
          className="rounded-full"
        />

        <div className="ml-4 leading-5">
          <h4 className="font-semibold tracking-wide">{user.login}</h4>
          <span className={`${userTypeColor} text-sm font-medium`}>
            {user.type}
          </span>
        </div>

        <IoOpenOutline
          className="ml-auto w-6 h-6 text-sky-500/70 group-hover:block md:hidden"
          strokeWidth={1.3}
        />
      </a>
    </li>
  );
};

export default ViewGithubUsers;
