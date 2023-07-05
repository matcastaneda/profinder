import { IoOpenOutline } from 'react-icons/io5';
import { TbGitFork } from 'react-icons/tb';

const RepoFork = ({ full_name }: { full_name: string }) => {
  return (
    <div className="flex items-center mt-4">
      <div className="flex items-center space-x-1">
        <TbGitFork className="w-5 h-5 -mt-0.5" />
        <small>{full_name}</small>
      </div>

      <i className="-mt-0.5 ml-auto">
        <IoOpenOutline className="w-5 h-5 text-sky-500" />
      </i>
    </div>
  );
};

export default RepoFork;
