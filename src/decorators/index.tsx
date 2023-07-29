import React from 'react';

import { FilterIcon } from '@/assets/FilterIcon';
import { CustomInput } from '@/components/CustomInput';
import { DisplayFilter } from '@/components/DisplayFilter';
import { InputEnum } from '@/constants/enums';
import { IDecInputFilter, IGlobalStyle } from '@/decorators/interfaces';
import { FilterItemIcon, InputFilterBlock } from '@/pickers/DatePicker/styled';

export const widthInputFilter = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: IDecInputFilter & P) => {
    const {
      onChooseDate,
      datePicker,
      date,
      onClickShowFilter,
      children,
      showFilter,
      statusWeekends,
      setStatusWeekends,
      setTasksDate,
    } = props;

    if (datePicker) {
      return (
        <>
          <InputFilterBlock>
            <CustomInput
              type={InputEnum.Date}
              date={date}
              onChooseDate={onChooseDate}
              placeholder='Choose Date (yyyy-mm-dd)'
            />
            <FilterItemIcon data-testid='filterIconBlock' onClick={onClickShowFilter}>
              <FilterIcon data-testid='filterIcon' />
            </FilterItemIcon>
          </InputFilterBlock>
          {children}
          {showFilter && (
            <DisplayFilter
              statusWeekends={statusWeekends}
              setStatusWeekends={setStatusWeekends}
              setTasksDate={setTasksDate}
            />
          )}
        </>
      );
    }

    return <Component {...props} />;
  };
};

export const withGlobalStyle = <P extends object>(Component: React.ComponentType<P>) => {
  return (prop: IGlobalStyle & P) => <Component {...prop} />;
};
