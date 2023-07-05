import IntlMessage from 'components/IntlMessage';
import { type Metrics } from 'types';
import { formattedNumber } from 'utils/formattedNumber';

const ViewMetrics = (metrics: Metrics) => {
  const metricList = [
    { name: 'Repos', value: metrics.public_repos },
    { name: 'Gists', value: metrics.public_gists },
    {
      name: IntlMessage({ id: 'app.main.followers' }),
      value: metrics.followers,
    },
    {
      name: IntlMessage({ id: 'app.main.following' }),
      value: metrics.following,
    },
  ];

  return (
    <section className="relative py-5 bg-white dark:bg-[#1F2A48] rounded-xl shadow-sm text-center outline-dashed outline-2 outline-sky-500/50">
      <ul className="flex justify-evenly">
        {metricList.map(({ name, value }) => (
          <li key={name} className="flex flex-col text-center">
            <small className="opacity-50">{name}</small>
            <h3 className="font-semibold text-xl">{formattedNumber(value)}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ViewMetrics;
