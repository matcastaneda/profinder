import MetricSkeleton from './MetricSkeleton';

const ProfileSkeleton = () => {
  return (
    <section className="space-y-4 w-full lg:max-w-sm">
      <div className="px-4 pt-8 pb-4 bg-white dark:bg-[#1F2A48] rounded-xl shadow-sm">
        <div className="animate-pulse space-y-5">
          <div className="w-32 h-32 mx-auto rounded-full bg-slate-700"></div>

          <div className="flex flex-col space-y-2">
            <div className="h-4 rounded bg-slate-700"></div>
            <div className="h-4 mx-auto w-48 rounded bg-slate-700"></div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="h-4 rounded bg-slate-700"></div>
            <div className="h-4 rounded bg-slate-700"></div>
          </div>

          <div className="h-4 mx-auto w-28 rounded bg-slate-700"></div>
        </div>
      </div>

      <MetricSkeleton />
    </section>
  );
};

export default ProfileSkeleton;
