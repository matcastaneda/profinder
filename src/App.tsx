import './css/main.css';

import nprogress from 'nprogress';
import ViewHeader from 'components/ViewHeader';
import NProgressWrapper from 'components/NProgressWrapper';

const App = () => {
  nprogress.configure({ showSpinner: false });

  return (
    <>
      <ViewHeader />

      <NProgressWrapper />
    </>
  );
};

export default App;
