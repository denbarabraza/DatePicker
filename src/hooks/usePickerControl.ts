import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';

import {
  IHolidaysResponse,
  IRangeDateObj,
  ITaskInCalendar,
} from '@/components/DatePicker/types';
import { WeekendStatusEnum } from '@/components/Toggle/types';
import { FormatEnum } from '@/constants/formatDate';
import { getDayOfWeek } from '@/utils/utils';

const CALENDARAPI_KEY = process.env.CALENDAR_API_KEY;

interface IUsePickerControl {
  onClickShowFilter: () => void;
  rangeDays: IRangeDateObj;
  setFromDate: (date: Dayjs) => void;
  setToDate: (date: Dayjs) => void;
  showFilter: boolean;
  statusWeekends: WeekendStatusEnum;
  setStatusWeekends: (status: WeekendStatusEnum) => void;
  setTasksDate: (value: ITaskInCalendar) => void;
  onClickShowMonthYear: () => void;
  showMonthYear: boolean;
  setShowMonthYear: Dispatch<SetStateAction<boolean>>;
  startOfWeek: number;
  setNumberStartOfWeek: (dayValue: string) => void;
  holidays: IHolidaysResponse | undefined | null;
  tasksDate?: ITaskInCalendar;
  setRangeDays?: (date: IRangeDateObj) => void;
}

export interface IUsePickerControlProps {
  selectedDate: Dayjs;
  onChangeRange?: (date: IRangeDateObj) => void;
}

export const usePickerControl = ({
  selectedDate,
  onChangeRange,
}: IUsePickerControlProps): IUsePickerControl => {
  const [showMonthYear, setShowMonthYear] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [statusWeekends, setStatusWeekends] = useState<WeekendStatusEnum>(
    WeekendStatusEnum.WithWeekEnds,
  );
  const [startOfWeek, setStartOfWeek] = useState<number>(1);
  const [holidays, setHolidays] = useState<IHolidaysResponse | undefined | null>();
  const [tasksDate, setTasksDate] = useState<ITaskInCalendar>({});
  const [rangeDays, setRangeDays] = useState<IRangeDateObj>({
    from: '',
    to: '',
  });

  const year = selectedDate.format(FormatEnum.Year);

  const onClickShowMonthYear = useCallback(() => {
    setShowMonthYear(prev => !prev);
  }, [setShowMonthYear]);

  const onClickShowFilter = useCallback(() => {
    setShowFilter(prev => !prev);
  }, [setShowFilter]);

  const setNumberStartOfWeek = useCallback(
    (dayValue: string) => {
      setStartOfWeek(getDayOfWeek(dayValue));
    },
    [setStartOfWeek],
  );

  const setFromDate = useCallback(
    (date: Dayjs) => {
      setRangeDays({
        ...rangeDays,
        from: date.format(FormatEnum.YearMonthDayFormat),
      });
    },
    [rangeDays, setRangeDays],
  );

  const setToDate = useCallback(
    (date: Dayjs) => {
      setRangeDays({
        ...rangeDays,
        to: date.format(FormatEnum.YearMonthDayFormat),
      });
    },
    [rangeDays, setRangeDays],
  );

  useEffect(() => {
    async function fetchHolidays() {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=${CALENDARAPI_KEY}&country=BY&year=${year}`,
      );
      const data = await response.json();

      setHolidays(data);
    }

    fetchHolidays();
  }, [year]);

  useEffect(() => {
    if (onChangeRange) {
      onChangeRange(rangeDays);
    }
  }, [onChangeRange, rangeDays]);

  return {
    onClickShowFilter,
    rangeDays,
    setFromDate,
    setToDate,
    showFilter,
    statusWeekends,
    setStatusWeekends,
    setTasksDate,
    onClickShowMonthYear,
    showMonthYear,
    setShowMonthYear,
    startOfWeek,
    setNumberStartOfWeek,
    holidays,
    tasksDate,
    setRangeDays,
  };
};
