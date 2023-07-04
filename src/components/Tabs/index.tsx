import React, { Suspense, lazy } from 'react';
import { Tab } from '@headlessui/react';
import Tabtitle from './TabTitle';
import clsx from 'clsx';
import { useUserStore } from 'store/user';
import IntlMessage from 'components/IntlMessage';
import LoadingIcon from 'components/icons/LoadingIcon';

const ViewRepos = lazy(() => import('../ViewMain/ViewRepos'));
const ViewGists = lazy(() => import('../ViewMain/ViewGists'));
const ViewFollowers = lazy(() => import('../ViewMain/ViewFollowers'));
const ViewFollowing = lazy(() => import('../ViewMain/ViewFollowing'));

const Tabs = () => {
  const { reposCount, gistsCount, followersCount, followingCount } =
    useUserStore(state => ({
      reposCount: state.reposCount,
      gistsCount: state.gistsCount,
      followersCount: state.followersCount,
      followingCount: state.followingCount,
    }));

  const tabList = [
    {
      name: 'Repos',
      title: (
        <Tabtitle
          normalText={IntlMessage({ id: 'app.main.metrics.title-my' })}
          strongText="Repos"
          total={reposCount}
        />
      ),
      component: <ViewRepos />,
    },
    {
      name: 'Gists',
      title: (
        <Tabtitle
          normalText={IntlMessage({ id: 'app.main.metrics.title-my' })}
          strongText="Gists"
          total={gistsCount}
        />
      ),
      component: <ViewGists />,
    },
    {
      name: IntlMessage({ id: 'app.main.followers' }),
      title: (
        <Tabtitle
          normalText={IntlMessage({ id: 'app.main.metrics.title-my' })}
          strongText={IntlMessage({ id: 'app.main.followers.title' })}
          total={followersCount}
        />
      ),
      component: <ViewFollowers />,
    },
    {
      name: IntlMessage({ id: 'app.main.following' }),
      title: (
        <Tabtitle
          normalText={IntlMessage({ id: 'app.main.metrics.title-my' })}
          strongText={IntlMessage({ id: 'app.main.following.title' })}
          total={followingCount}
        />
      ),
      component: <ViewFollowing />,
    },
  ];

  return (
    <Tab.Group as={'section'} className="w-full">
      <div className="flex mb-5">
        <div className="flex-none min-w-full">
          <Tab.List
            as="ul"
            className="border-b border-slate-200 flex justify-between items-center text-center whitespace-nowrap dark:border-slate-200/5">
            {tabList.map((tab, index) => (
              <Tab
                key={index}
                as="li"
                className={({ selected }) =>
                  clsx(
                    'flex w-full justify-center text-sm leading-6 font-semibold pb-2.5 border-b-2 -mb-px cursor-pointer focus-visible:outline-none',
                    selected
                      ? 'text-sky-500 border-current'
                      : 'text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-300/70 dark:hover:border-slate-700',
                  )
                }>
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={React.Fragment}>
        {tabList.map((tab, index) => (
          <Tab.Panel key={index} className="space-y-5">
            {tab.title}
            <Suspense
              fallback={
                <div className="flex items-center justify-center">
                  <LoadingIcon />
                </div>
              }>
              {tab.component}
            </Suspense>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
