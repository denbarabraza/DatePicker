import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';

import { IDatePicker, IRangeDateObj } from '@/pickers/DatePicker/interfaces';
import { RangePicker } from '@/pickers/RangePicker/index';

export default {
  title: 'ReactComponentLibrary/RangePicker',
  component: RangePicker,
} as Meta<typeof RangePicker>;

const RangePickerTemplate: StoryFn<typeof RangePicker> = (args: IDatePicker) => {
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [rangeDays, setRangeDays] = useState<IRangeDateObj>({
    from: '',
    to: '',
  });

  const handleDateChange = (date: Dayjs) => {
    setDate(date);
  };
  const handleRangeDateChange = (date: IRangeDateObj) => {
    setRangeDays(date);
  };

  return (
    <>
      {rangeDays.from && rangeDays.to && (
        <h4>
          Range: {rangeDays.from} / {rangeDays.to}
        </h4>
      )}
      <RangePicker
        {...args}
        selectedDate={date}
        onChangeDate={handleDateChange}
        onChangeRange={handleRangeDateChange}
      />
    </>
  );
};

export const RangePickerStories = RangePickerTemplate.bind({});
