import React, { FC, memo } from 'react';

import { Toggle } from '@/components/Toggle';

import { IDisplayFilter } from './interface';
import { RemoveInfo, Wrapper } from './styled';

export const DisplayFilter: FC<IDisplayFilter> = memo(
  ({ statusWeekends, setStatusWeekends, setTasksDate }) => {
    const onClickRemoveTaskHandler = () => {
      setTasksDate({});
      localStorage.removeItem('tasks');
    };

    return (
      <Wrapper data-testid='displayFilter'>
        <Toggle statusWeekends={statusWeekends} setStatusWeekends={setStatusWeekends} />
        <RemoveInfo onClick={onClickRemoveTaskHandler}>Remove all tasks</RemoveInfo>
      </Wrapper>
    );
  },
);
