import { Dayjs } from 'dayjs';

import { InputEnum } from '@/constants/enums';

export interface ICustomInput {
  type: InputEnum;
  date?: false | Dayjs;
  onChooseDate?: (date: Dayjs) => void;
  placeholder?: string;
  taskValue?: string;
  setTaskValue?: (inputValue: string) => void;
  setTaskInCalendar?: () => void;
}
