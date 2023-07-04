import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchRepositories } from 'services/user';
import { MAX_COUNT_TO_SHOW } from 'setup';
import { useUserStore } from 'store/user';
import { type Repo, type RepoResponse } from 'types';
import RepoItem from './RepoItem';
import GithubURL from 'components/GitHubURL';
import ViewNoData from 'components/ViewNoData';
import LoadingIcon from 'components/icons/LoadingIcon';

const ViewRepos = () => {
  const { username, setReposCount } = useUserStore(state => ({
    username: state.username,
    setReposCount: state.setReposCount,
  }));

  const { data: repos, isLoading } = useQuery<RepoResponse[], Error>({
    enabled: !!username,
    queryKey: ['repositories', username],
    queryFn: () => fetchRepositories(username),
  });

  useEffect(() => {
    if (repos) setReposCount(repos.length);
  }, [repos, setReposCount]);

  const userReposURL = `https://github.com/${username}?tab=repositories`;
  const hasRepos = repos && repos.length > 0;
  const hasMoreRepos = repos && repos.length > MAX_COUNT_TO_SHOW;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      {hasRepos ? (
        <ul className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 select-none">
          {repos &&
            repos
              .slice(0, MAX_COUNT_TO_SHOW)
              .map(repo => <RepoItem key={repo.id} {...(repo as Repo)} />)}
        </ul>
      ) : null}

      {!hasRepos ? <ViewNoData dataType="repos" /> : null}

      {hasMoreRepos ? (
        <GithubURL url={userReposURL} count={repos.length} dataType="repo" />
      ) : null}
    </section>
  );
};

export default ViewRepos;
