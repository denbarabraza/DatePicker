import React, { FC } from 'react';

import { DatePickerBlock, GlobalStyle } from '@/components/DatePicker/styled';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Theme } from '@/components/Theme';
import { withGlobalStyle } from '@/decorators';
import { IGlobalStyle } from '@/decorators/interfaces';

export const GlobalStylePicker: FC<IGlobalStyle> = ({ children }) => {
  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <DatePickerBlock>
          <GlobalStyle />
          {children}
        </DatePickerBlock>
      </ErrorBoundary>
    </Theme>
  );
};

export default withGlobalStyle(GlobalStylePicker);
