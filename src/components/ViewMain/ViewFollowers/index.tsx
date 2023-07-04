import { useQuery } from '@tanstack/react-query';
import GithubURL from 'components/GitHubURL';
import ViewGithubUsers from 'components/ViewGitHubUsers';
import ViewNoData from 'components/ViewNoData';
import LoadingIcon from 'components/icons/LoadingIcon';
import { useEffect } from 'react';
import { fetchFollowers } from 'services/user';
import { MAX_COUNT_TO_SHOW } from 'setup';
import { useUserStore } from 'store/user';
import { UserResponse } from 'types';

const ViewFollowers = () => {
  const { username, setFollowersCount } = useUserStore(state => ({
    username: state.username,
    setFollowersCount: state.setFollowersCount,
  }));

  const { data: followers, isLoading } = useQuery<UserResponse[], Error>({
    enabled: !!username,
    queryKey: ['followers', username],
    queryFn: () => fetchFollowers(username),
  });

  useEffect(() => {
    if (followers) setFollowersCount(followers.length);
  }, [followers, setFollowersCount]);

  const userFollowersURL = `https://github.com/${username}?tab=followers`;
  const hasFollowers = followers && followers.length > 0;
  const hasMoreFollowers = followers && followers.length > MAX_COUNT_TO_SHOW;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <section className="space-y-5">
      {hasFollowers && (
        <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2">
          {followers
            ? followers
                .slice(0, MAX_COUNT_TO_SHOW)
                .map(follower => (
                  <ViewGithubUsers key={follower.id} {...follower} />
                ))
            : null}
        </ul>
      )}

      {hasMoreFollowers && (
        <GithubURL
          url={userFollowersURL}
          count={followers.length}
          dataType="follower"
        />
      )}

      {!hasFollowers && <ViewNoData dataType="followers" />}
    </section>
  );
};

export default ViewFollowers;
