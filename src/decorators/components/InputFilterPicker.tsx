import React, { FC } from 'react';
import dayjs from 'dayjs';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/constants/enums';
import { widthInputFilter } from '@/decorators';
import { IDecInputFilter } from '@/decorators/interfaces';

const InputFilterPicker: FC<IDecInputFilter> = ({
  rangeDays,
  setToDate,
  setFromDate,
  children,
}) => {
  return (
    <>
      <CustomInput
        data-cy='inputFrom'
        type={InputEnum.Date}
        date={rangeDays.from.length > 0 && dayjs(rangeDays.from)}
        onChooseDate={setFromDate}
        placeholder='Date from (yyyy-mm-dd)'
      />
      <CustomInput
        type={InputEnum.Date}
        date={rangeDays.to.length > 0 && dayjs(rangeDays.to)}
        onChooseDate={setToDate}
        placeholder='Date to (yyyy-mm-dd)'
      />
      {children}
    </>
  );
};

export default widthInputFilter(InputFilterPicker);
