const metrics = ['Repos', 'Gists', 'Followers', 'Following'];

const MetricSkeleton = () => {
  return (
    <section className="relative py-7 w-full lg:max-w-sm bg-white dark:bg-[#1F2A48] rounded-xl shadow-sm text-center outline-dashed outline-2 outline-sky-500/50">
      <ul className="animate-pulse flex items-center justify-evenly">
        {metrics.map(metric => (
          <li key={metric} className="flex flex-col flex-1 text-center">
            <small className="opacity-50">{metric}</small>
            <div className="h-4 mx-auto w-5 rounded bg-slate-700"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MetricSkeleton;
