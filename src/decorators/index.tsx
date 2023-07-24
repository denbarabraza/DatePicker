import React from 'react';

import { FilterIcon } from '@/assets/FilterIcon';
import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import { FilterItemIcon, InputFilterBlock } from '@/components/DatePicker/styled';
import { DisplayFilter } from '@/components/DisplayFilter';
import { IDecInputFilter, IGlobalStyle } from '@/decorators/interfaces';

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
              data-testid='inputDatePicker'
              type={InputEnum.Date}
              date={date}
              onChooseDate={onChooseDate}
              placeholder='Choose Date (yyyy-mm-dd)'
            />
            <FilterItemIcon onClick={onClickShowFilter}>
              <FilterIcon />
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
