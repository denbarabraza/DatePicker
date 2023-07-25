import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';

import { DatePicker } from '@/components/DatePicker/DatePicker';
import { GlobalStylePicker } from '@/decorators/components/GlobalStylePicker';

describe('RangePicker', () => {
  const mockChangeDate = jest.fn();

  it('all RangePicker elements should be visible', () => {
    const { getByRole, queryByTestId } = render(
      <GlobalStylePicker>
        <DatePicker selectedDate={dayjs()} onChangeDate={mockChangeDate} />
      </GlobalStylePicker>,
    );

    const input = getByRole('textbox');
    const selector = queryByTestId('selectorItem');
    const calendarItem = queryByTestId('calendarItem');

    expect(input).toBeInTheDocument();
    expect(selector).toBeInTheDocument();
    expect(calendarItem).toBeInTheDocument();
  });
});
