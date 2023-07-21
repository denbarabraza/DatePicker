import { Dayjs } from 'dayjs';

export interface IDatePicker {
  selectedDate: Dayjs;
  onChangeDate: (date: Dayjs) => void;
}

export interface IHolidaysResponse {
  meta: { code: number };
  response: { holidays: IHolidays[] };
}

export interface IHolidays {
  canonical_url: string;
  country: { id: string; name: string };
  date: { iso: string; datetime: { year: number; month: number; day: number } };
  description: string;
  locations: string;
  name: string;
  primary_type: string;
  states: string;
  type: string[];
  urlid: string;
}

export interface ITaskInCalendar {
  [key: string]: string[];
}
