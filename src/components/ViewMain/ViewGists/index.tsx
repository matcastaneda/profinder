import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchGists } from 'services/user';
import { MAX_COUNT_TO_SHOW } from 'setup';
import { useUserStore } from 'store/user';
import { Gist } from 'types';
import GistItem from './GistItem';
import ViewNoData from 'components/ViewNoData';
import GithubURL from 'components/GitHubURL';
import LoadingIcon from 'components/icons/LoadingIcon';

const ViewGists = () => {
  const { username, setGistsCount } = useUserStore(state => ({
    username: state.username,
    setGistsCount: state.setGistsCount,
  }));

  const { data: gists, isLoading } = useQuery<Gist[], Error>({
    enabled: !!username,
    queryKey: ['gists', username],
    queryFn: () => fetchGists(username),
  });

  useEffect(() => {
    if (gists) setGistsCount(gists.length);
  }, [gists, setGistsCount]);

  const userGistsURL = `https://github.com/${username}?tab=gists`;
  const hasGists = gists && gists.length > 0;
  const hasMoregists = gists && gists.length > MAX_COUNT_TO_SHOW;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      {hasGists ? (
        <ul className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 select-none">
          {gists &&
            gists
              .slice(0, MAX_COUNT_TO_SHOW)
              .map(gist => <GistItem key={gist.id} {...gist} />)}
        </ul>
      ) : null}

      {!hasGists ? <ViewNoData dataType="gists" /> : null}

      {hasMoregists ? <GithubURL url={userGistsURL} /> : null}
    </section>
  );
};

export default ViewGists;
