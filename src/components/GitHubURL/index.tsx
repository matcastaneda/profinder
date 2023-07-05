import { FormattedMessage } from 'react-intl';

interface GithubURLProps {
  url: string;
}

const GithubURL = ({ url }: GithubURLProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-semibold border border-sky-500/50 bg-sky-600 text-slate-50 flex items-center justify-center py-3 rounded-xl">
      <FormattedMessage id="app.main.metrics.view-all" />
    </a>
  );
};

export default GithubURL;
