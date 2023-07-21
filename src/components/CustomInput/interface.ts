import { Dayjs } from 'dayjs';

export enum InputEnum {
  Task = 'task',
  Date = 'date',
}

export interface ICustomInput {
  type: InputEnum;
  date?: Dayjs;
  onChooseDate?: (date: Dayjs) => void;
  placeholder?: string;
  taskValue?: string;
  setTaskValue?: (inputValue: string) => void;
  setTaskInCalendar?: () => void;
}
