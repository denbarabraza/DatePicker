import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { FilterIcon } from '@/assets/FilterIcon';
import { CustomInput } from '@/components/CustomInput';
import { InputEnum } from '@/components/CustomInput/interface';
import {
  IDatePicker,
  IHolidaysResponse,
  IObj,
  ITaskInCalendar,
} from '@/components/DatePicker/interfaces';
import { DatePickerCalendar } from '@/components/DatePickerCalendar';
import { DatePickerSelector } from '@/components/DatePickerSelector';
import { DisplayFilter } from '@/components/DisplayFilter/DisplayFilter';
import { DisplayYearMonths } from '@/components/DisplayMonths/DisplayYearMonths';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorFallback } from '@/components/ErrorBoundary/ErrorFallback';
import { Theme } from '@/components/Theme';
import { WeekendStatusEnum } from '@/components/Toggle/types';
import { FormatEnum } from '@/constants/formatDate';
import { getDayOfWeek } from '@/utils/utils';

import { DatePickerBlock, FilterItemIcon, GlobalStyle, InputFilterBlock } from './styled';

export const DatePicker: React.FC<IDatePicker> = ({ selectedDate, onChangeDate }) => {
  const [showMonthYear, setShowMonthYear] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [statusWeekends, setStatusWeekends] = useState<WeekendStatusEnum>(
    WeekendStatusEnum.WithWeekEnds,
  );
  const [startOfWeek, setStartOfWeek] = useState<number>(1);
  const [holidays, setHolidays] = useState<IHolidaysResponse | undefined | null>();
  const [tasksDate, setTasksDate] = useState<ITaskInCalendar>({});
  const [rangeDays, setRangeDays] = useState<IObj>({
    from: '',
    to: '',
  });

  const year = selectedDate.format(FormatEnum.Year);

  const onClickShowMonthYear = () => {
    setShowMonthYear(prev => !prev);
  };

  const onClickShowFilter = () => {
    setShowFilter(prev => !prev);
  };

  const setNumberStartOfWeek = (dayValue: string) => {
    setStartOfWeek(getDayOfWeek(dayValue));
  };

  const setFromDate = (date: Dayjs) => {
    setRangeDays({
      ...rangeDays,
      from: date.format(FormatEnum.YearMonthDayFormat),
    });
  };

  const setToDate = (date: Dayjs) => {
    setRangeDays({
      ...rangeDays,
      to: date.format(FormatEnum.YearMonthDayFormat),
    });
  };

  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=022eade2bfd82f139588f89b56a5be9d0f0d648e&country=BY&year=${year}`,
      );
      const data = await response.json();

      setHolidays(data);
    }

    fetchHolidays();
  }, [year]);

  return (
    <Theme>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <DatePickerBlock>
          <GlobalStyle />
          <InputFilterBlock>
            <CustomInput
              type={InputEnum.Date}
              date={selectedDate}
              onChooseDate={onChangeDate}
              placeholder='Choose Date (yyyy-mm-dd)'
            />
            <FilterItemIcon onClick={onClickShowFilter}>
              <FilterIcon />
            </FilterItemIcon>
          </InputFilterBlock>
          <CustomInput
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

          <DatePickerSelector
            shownDate={selectedDate}
            onChangeDate={onChangeDate}
            setShowMonthYear={onClickShowMonthYear}
          />
          {showMonthYear && (
            <DisplayYearMonths
              shownDate={selectedDate}
              onChangeDate={onChangeDate}
              setShowMonthYear={setShowMonthYear}
            />
          )}
          <DatePickerCalendar
            selectedDate={selectedDate}
            shownDate={selectedDate}
            onChangeDate={onChangeDate}
            startOfWeek={startOfWeek}
            setStartOfWeek={setNumberStartOfWeek}
            holidays={holidays}
            statusWeekends={statusWeekends}
            setTasksDate={setTasksDate}
            tasksDate={tasksDate}
            rangeDays={rangeDays}
            setRangeDays={setRangeDays}
          />
          {showFilter && (
            <DisplayFilter
              statusWeekends={statusWeekends}
              setStatusWeekends={setStatusWeekends}
              setTasksDate={setTasksDate}
            />
          )}
        </DatePickerBlock>
      </ErrorBoundary>
    </Theme>
  );
};
