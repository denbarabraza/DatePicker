import React, { FC, memo, useCallback } from 'react';

import { IStatusWeekendsToggle } from '@/components/Toggle/interface';
import { WeekendStatusEnum } from '@/constants/enums';

import { ToggleContainer, ToggleInput, ToggleLabel, ToggleSlider } from './styled';

export const Toggle: FC<IStatusWeekendsToggle> = memo(
  ({ statusWeekends, setStatusWeekends }) => {
    const handleToggleChange = useCallback(() => {
      const currentStatus =
        statusWeekends === WeekendStatusEnum.WithWeekEnds
          ? WeekendStatusEnum.WithoutWeekEnds
          : WeekendStatusEnum.WithWeekEnds;

      setStatusWeekends(currentStatus);
    }, [statusWeekends]);

    return (
      <ToggleContainer>
        {statusWeekends === WeekendStatusEnum.WithWeekEnds
          ? 'Show the weekends'
          : 'Don`t Show...'}
        <ToggleLabel>
          <ToggleInput
            type='checkbox'
            checked={statusWeekends !== WeekendStatusEnum.WithWeekEnds}
            onChange={handleToggleChange}
          />
          <ToggleSlider />
        </ToggleLabel>
      </ToggleContainer>
    );
  },
);
