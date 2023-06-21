import { MAX_COUNT_TO_SHOW } from 'setup';

interface GithubURLProps {
  dataType: 'follower' | 'following' | 'repo' | 'gist';
  count: number;
  url: string;
}

const GithubURL = ({ dataType, count, url }: GithubURLProps) => {
  const userCount = count === 1 ? `${dataType}` : `${dataType}s`;

  const hasMany =
    count > 1
      ? `See the other ${count - MAX_COUNT_TO_SHOW} ${dataType}s in github`
      : `See the other ${userCount} in github`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold border border-sky-500/50 bg-sky-600 text-slate-50 flex items-center justify-center py-3 rounded-xl">
      {hasMany}
    </a>
  );
};

export default GithubURL;
