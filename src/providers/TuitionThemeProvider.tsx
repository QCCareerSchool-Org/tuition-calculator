import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTuitionTheme } from '../hooks/useTuitionTheme';

export const TuitionThemeProvider: React.FC = ({ children }) => {
  const theme = useTuitionTheme();
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};
