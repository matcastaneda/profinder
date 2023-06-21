import { TbBook2, TbEye, TbGitFork, TbStar, TbTemplate } from 'react-icons/tb';
import { type RepoType, type Repo } from 'types';
import RepoBadge from '../RepoBadge';
import RepoFork from '../RepoFork';
import RepoOwn from '../RepoOwn';
import { formattedDate } from 'utils/formattedDate';

const RepoItem = (repo: Repo) => {
  const icons = {
    public: <TbBook2 className="w-5 h-5" />,
    fork: <TbGitFork className="w-5 h-5" />,
    template: <TbTemplate className="w-5 h-5" />,
  };

  const repoType: RepoType = repo.fork
    ? 'fork'
    : repo.is_template
    ? 'template'
    : 'public';

  const repoIconType = icons[repoType];
  const repoUrl = repo.homepage || repo.html_url;
  const updatedAt = formattedDate(repo.updated_at);
  const metrics = [
    {
      icon: <TbStar className="w-4 h-4 -mt-0.5" />,
      value: repo.stargazers_count,
    },
    {
      icon: <TbEye className="w-4 h-4 -mt-0.5" />,
      value: repo.watchers_count,
    },
    {
      icon: <TbGitFork className="w-4 h-4 -mt-0.5" />,
      value: repo.forks_count,
    },
  ];

  return (
    <li className="clickable">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <article className="relative rounded-xl bg-white dark:bg-[#1F2A48] shadow-sm p-4 md:hover:outline-2 md:hover:outline-dashed md:hover:outline-sky-500">
          <div className="flex items-center">
            <span className="mr-1">
              <i>{repoIconType}</i>
            </span>

            <h4 className="font-medium tracking-tight truncate">{repo.name}</h4>

            <div className="pl-2 ml-auto">
              <RepoBadge type={repoType} />
            </div>
          </div>

          <div className="my-3">
            <small className="tracking-tight leading-5">
              {repo.description ? (
                <p>{repo.description}</p>
              ) : (
                <p className="opacity-50 italic">No description provided.</p>
              )}
            </small>
          </div>

          {repoType === 'fork' ? <RepoFork full_name={repo.full_name} /> : null}

          {repoType === 'public' || repoType === 'template' ? (
            <RepoOwn metrics={metrics} updatedAt={updatedAt} />
          ) : null}
        </article>
      </a>
    </li>
  );
};

export default RepoItem;
