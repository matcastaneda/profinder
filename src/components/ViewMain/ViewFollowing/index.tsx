import { useQuery } from '@tanstack/react-query';
import GithubURL from 'components/GitHubURL';
import ViewGithubUsers from 'components/ViewGitHubUsers';
import ViewNoData from 'components/ViewNoData';
import LoadingIcon from 'components/icons/LoadingIcon';
import { useEffect } from 'react';
import { fetchFollowing } from 'services/user';
import { MAX_COUNT_TO_SHOW } from 'setup';
import { useUserStore } from 'store/user';
import { UserResponse } from 'types';

const ViewFollowing = () => {
  const { username, setFollowingCount } = useUserStore(state => ({
    username: state.username,
    setFollowingCount: state.setFollowingCount,
  }));

  const { data: following, isLoading } = useQuery<UserResponse[], Error>({
    enabled: !!username,
    queryKey: ['following', username],
    queryFn: () => fetchFollowing(username),
  });

  useEffect(() => {
    if (following) setFollowingCount(following.length);
  }, [following, setFollowingCount]);

  const userFollowingURL = `https://github.com/${username}?tab=following`;
  const hasFollowing = following && following.length > 0;
  const hasMoreFollowing = following && following.length > MAX_COUNT_TO_SHOW;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      {hasFollowing && (
        <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2">
          {following
            ? following
                .slice(0, MAX_COUNT_TO_SHOW)
                .map(following => (
                  <ViewGithubUsers key={following.id} {...following} />
                ))
            : null}
        </ul>
      )}

      {hasMoreFollowing && <GithubURL url={userFollowingURL} />}

      {!hasFollowing && <ViewNoData dataType="following" />}
    </section>
  );
};

export default ViewFollowing;
