import React, { FC } from 'react';

import { Toggle } from '@/components/Toggle';
import { WeekendStatusEnum } from '@/components/Toggle/types';

import { Wrapper } from './styled';

export interface IDisplayFilter {
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
}

export const DisplayFilter: FC<IDisplayFilter> = ({
  statusWeekends,
  setStatusWeekends,
}) => {
  return (
    <Wrapper>
      <Toggle statusWeekends={statusWeekends} setStatusWeekends={setStatusWeekends} />
    </Wrapper>
  );
};
