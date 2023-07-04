import { useIntl } from 'react-intl';

const IntlMessage = ({ id }: { id: string }) => {
  const intl = useIntl();
  return intl.formatMessage({ id });
};

export default IntlMessage;
