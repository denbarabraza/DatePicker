import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { baseTheme } from '@/theme/theme';

export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};
