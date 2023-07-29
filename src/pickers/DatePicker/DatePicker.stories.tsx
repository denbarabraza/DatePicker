import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@/pickers/DatePicker/DatePicker';
import { IDatePicker } from '@/pickers/DatePicker/interfaces';

export default {
  title: 'ReactComponentLibrary/DatePicker',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const DatePickerTemplate: StoryFn<typeof DatePicker> = (args: IDatePicker) => {
  const [date, setDate] = useState<Dayjs>(dayjs());

  const handleDateChange = (date: Dayjs) => {
    setDate(date);
  };

  return (
    <>
      <h4>Picked Date: {date?.format('DD - MMMM - YYYY')}</h4>
      <DatePicker {...args} selectedDate={date} onChangeDate={handleDateChange} />
    </>
  );
};

export const DatePickerStories = DatePickerTemplate.bind({});
