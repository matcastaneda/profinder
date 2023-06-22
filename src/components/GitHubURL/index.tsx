import IntlMessage from 'components/IntlMessage';
import { FormattedMessage } from 'react-intl';
import { MAX_COUNT_TO_SHOW } from 'setup';

interface GithubURLProps {
  dataType: 'follower' | 'following' | 'repo' | 'gist';
  count: number;
  url: string;
}

const GithubURL = ({ count, url }: GithubURLProps) => {
  const hasMany =
    count > 1 ? (
      <FormattedMessage
        id="app.main.metrics.view-all"
        values={{ count: count - MAX_COUNT_TO_SHOW }}
      />
    ) : (
      <FormattedMessage id="app.main.metrics.view-one" />
    );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold border border-sky-500/50 bg-sky-600 text-slate-50 flex items-center justify-center py-3 rounded-xl">
      {hasMany}
    </a>
  );
};

export default GithubURL;
