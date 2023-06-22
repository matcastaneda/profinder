import { useIntl } from 'react-intl';

const IntlMessage = ({ id, ...props }: { id: string }) => {
  const intl = useIntl();
  return intl.formatMessage({ id });
};

export default IntlMessage;
