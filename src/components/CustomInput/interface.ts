import { Dayjs } from 'dayjs';

export interface ICustomInput {
  date: Dayjs;
  onChooseDate: IOnChoose;
  placeholder: string;
}

export interface IOnChoose {
  (value: Dayjs): void;
}
