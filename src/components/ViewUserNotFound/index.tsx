import IntlMessage from 'components/IntlMessage';

const ViewUserNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h2 className="text-2xl font-semibold mb-3">
        {IntlMessage({ id: 'app.main.user-not-found' })}
      </h2>

      <h3 className="text-lg text-center text-slate-500 dark:text-slate-400">
        {IntlMessage({ id: 'app.main.user-not-found.description' })}
      </h3>
    </section>
  );
};

export default ViewUserNotFound;
