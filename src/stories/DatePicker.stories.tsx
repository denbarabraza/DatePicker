import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import DatePicker, { IDatePicker } from '@/components/DatePicker';

export default {
  title: 'ReactComponentLibrary/DatePicker',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args: IDatePicker) => (
  <DatePicker {...args} />
);

export const DatePickerTemplate = Template.bind({});
DatePickerTemplate.args = {
  selectedDate: new Date(),
  onChange: date => console.log(date),
};
