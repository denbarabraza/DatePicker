export enum SelectEnum {
  Month = 'day',
  Year = 'currency',
}

export interface ICustomSelect {
  type: SelectEnum;
  selectedValue: number;
  onSelect: (year: number) => void;
}
