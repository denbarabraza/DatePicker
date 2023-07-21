import React, { FC } from 'react';

import { ITaskInCalendar } from '@/components/DatePicker/interface';
import { Toggle } from '@/components/Toggle';
import { WeekendStatusEnum } from '@/components/Toggle/types';

import { RemoveInfo, Wrapper } from './styled';

export interface IDisplayFilter {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
  setTasksDate: (value: ITaskInCalendar) => void;
}

export const DisplayFilter: FC<IDisplayFilter> = ({
  statusWeekends,
  setStatusWeekends,
  setTasksDate,
}) => {
  const onClickRemoveTaskHandler = () => {
    setTasksDate({});
    localStorage.removeItem('tasks');
  };

  return (
    <Wrapper>
      <Toggle statusWeekends={statusWeekends} setStatusWeekends={setStatusWeekends} />
      <RemoveInfo onClick={onClickRemoveTaskHandler}>Remove all tasks</RemoveInfo>
    </Wrapper>
  );
};
