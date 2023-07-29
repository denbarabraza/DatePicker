import { SelectEnum } from '@/constants/enums';

export interface ICustomSelect {
  type: SelectEnum;
  selectedValue: number;
  onSelect: (year: number) => void;
}
