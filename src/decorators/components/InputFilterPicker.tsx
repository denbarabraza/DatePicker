import React, { FC } from 'react';
import dayjs from 'dayjs';

import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
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
        placeholder='Choose a date from'
      />
      <CustomInput
        type={InputEnum.Date}
        date={rangeDays.to.length > 0 && dayjs(rangeDays.to)}
        onChooseDate={setToDate}
        placeholder='Choose a date to'
      />
      {children}
    </>
  );
};

export default widthInputFilter(InputFilterPicker);
