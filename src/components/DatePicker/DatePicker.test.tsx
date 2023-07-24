import React from 'react';
import { render } from '@testing-library/react';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import { Theme } from '@/components/Theme';

describe('DatePicker', () => {
  const mockChangeDate = jest.fn();

  it('1', () => {
    const { getByText, getByRole, queryByTestId } = render(
      <Theme>
        <CustomInput
          type={InputEnum.Date}
          date={false}
          onChooseDate={mockChangeDate}
          placeholder='Choose a date to'
        />
        ,
      </Theme>,
    );

    const input = queryByTestId('textboxInput');

    expect(input).toBeInTheDocument();
  });
});
