import { Theme, ThemeProvider } from '@mui/material/styles';
import { Suspense } from 'react';
import { useAppTheme } from 'features/theme';

const GetTheme = ({ children }: { children: (theme: Theme) => React.ReactNode }) => {
  const { theme } = useAppTheme();
  return <>{children(theme)}</>;
};

export const withTheme = (component: () => React.ReactNode) => () => {
  return (
    <GetTheme>
      {(theme) => (
        <ThemeProvider theme={theme}>
          <Suspense fallback="Loading...">{component()}</Suspense>
        </ThemeProvider>
      )}
    </GetTheme>
  );
};
