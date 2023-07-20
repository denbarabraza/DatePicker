import { Dayjs } from 'dayjs';

export interface ICustomInput {
  date: Dayjs;
  onChooseDate: (date: Dayjs) => void;
  placeholder: string;
}
