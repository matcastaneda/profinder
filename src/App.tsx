import './css/main.css';

import { Toaster } from 'sonner';
import LangProvider from 'providers/localeProvider';
import ThemeProvider from 'providers/theme/themeProvider';
import ViewHeader from 'components/ViewHeader';
import NProgressWrapper from 'components/NProgressWrapper';

const App = () => {
  return (
    <LangProvider>
      <ThemeProvider>
        <ViewHeader />

        <NProgressWrapper />
        <Toaster richColors />
      </ThemeProvider>
    </LangProvider>
  );
};

export default App;
