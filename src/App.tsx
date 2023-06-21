import './css/main.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';
import LangProvider from 'providers/localeProvider';
import ThemeProvider from 'providers/theme/themeProvider';
import ViewHeader from 'components/ViewHeader';
import ViewMain from 'components/ViewMain';
import NProgressWrapper from 'components/NProgressWrapper';

import { queryClient } from 'queryClient';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <ThemeProvider>
          <ViewHeader />

          <ViewMain />

          <NProgressWrapper />
          <Toaster richColors />
        </ThemeProvider>
      </LangProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
