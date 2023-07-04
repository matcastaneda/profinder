import { lazy, Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from 'services/user';
import { useUserStore } from 'store/user';
import { type UserResponse } from 'types';
import ProfileSkeleton from 'components/ViewSkeleton/ProfileSkeleton';
import Tabs from 'components/Tabs';
import ViewUserNotFound from 'components/ViewUserNotFound';
import LoadingIcon from 'components/icons/LoadingIcon';

const ViewProfile = lazy(() => import('./ViewProfile'));

const ViewMain = () => {
  const username = useUserStore(state => state.username);

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery<UserResponse, Error>({
    enabled: !!username,
    queryKey: ['profile', username],
    queryFn: () => fetchProfile(username),
  });

  if (isLoading) {
    return (
      <main className="mt-10 flex items-center justify-center mx-auto max-w-5xl">
        <LoadingIcon className="h-8 w-8" />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="mt-10 mx-auto max-w-5xl">
        <ViewUserNotFound />
      </main>
    );
  }

  return (
    <main className="mt-10 mx-auto max-w-5xl">
      {!isLoading && !isError ? (
        <section className="flex flex-col lg:flex-row gap-10">
          <Suspense fallback={<ProfileSkeleton />}>
            <ViewProfile {...(profile as UserResponse)} />
          </Suspense>

          <Tabs />
        </section>
      ) : null}
    </main>
  );
};

export default ViewMain;
