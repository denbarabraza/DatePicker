import { useCallback, useEffect, useMemo, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { IPickerCalendar } from '@/components/PickerCalendar/interface';
import { FormatEnum } from '@/constants/formatDate';
import { IUsePickerCalendarControl } from '@/interfaces/interfaces';
import { IRangeDateObj } from '@/pickers/DatePicker/interfaces';
import { getCalendarRows } from '@/utils/utils';

export const usePickerCalendarControl = ({
  selectedDate,
  onChangeDate,
  startOfWeek,
  setStartOfWeek,
  holidays,
  shownDate,
  statusWeekends,
  setTasksDate,
  tasksDate,
  rangeDays,
  setRangeDays,
}: IPickerCalendar): IUsePickerCalendarControl => {
  const [holiday, setHoliday] = useState<null | string>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTaskControl, setShowTaskControl] = useState(false);
  const [taskValue, setTaskValue] = useState('');

  const rangeNoEmpty = rangeDays?.from && rangeDays?.to;

  const handleMouseEnter = useCallback(
    (tooltip: string | undefined) => () => {
      if (tooltip) {
        setHoliday(tooltip);
        setShowTooltip(true);
      }
    },
    [setHoliday, setShowTooltip],
  );

  const handleMouseLeave = useCallback(() => {
    setHoliday(null);
    setShowTooltip(false);
  }, [setHoliday, setShowTooltip]);

  const isInRange = (date: Dayjs, startDate: string, endDate: string) => {
    return date.isAfter(startDate, 'day') && date.isBefore(endDate, 'day');
  };
  const handleSelectDate = useCallback(
    (value: Dayjs) => () => {
      if (onChangeDate && !rangeDays) {
        setShowTaskControl(true);
        onChangeDate(value);
      }

      if (setRangeDays) {
        const getDayFormat = (day: Dayjs) => {
          return dayjs(day).format(FormatEnum.YearMonthDayFormat);
        };

        const dateFormat = getDayFormat(value);

        if (!rangeDays?.from && !rangeDays?.to.length) {
          setRangeDays({ from: dateFormat, to: '' });
        }
        if (!rangeDays?.to && rangeDays?.from) {
          handleChangeState(rangeDays?.from, dateFormat);
        } else if (!rangeDays?.to.length && rangeDays?.from) {
          handleChangeState(rangeDays?.from, dateFormat);
        } else if (rangeNoEmpty) {
          setRangeDays({ from: dateFormat, to: '' });
        }
      }
    },
    [onChangeDate, setRangeDays, rangeDays, setShowTaskControl],
  );

  const handleChangeState = useCallback(
    (from: string, to: string) => {
      if (setRangeDays) {
        if (dayjs(from).isBefore(to)) {
          setRangeDays({
            from,
            to,
          });
        } else {
          setRangeDays({
            from: to,
            to: from,
          });
        }
      }
    },
    [setRangeDays],
  );

  const onClearRangeDays = useCallback(() => {
    if (setRangeDays) {
      setRangeDays({
        from: '',
        to: '',
      });
    }
  }, [setRangeDays]);

  const changeStartWeekDay = useCallback(
    (value: string) => () => {
      setStartOfWeek(value);
    },
    [setStartOfWeek],
  );

  const setTaskInCalendar = useCallback(() => {
    if (selectedDate) {
      const dateKey = selectedDate?.format(FormatEnum.YearMonthDayFormat);
      const tasksForDate = tasksDate ? tasksDate[dateKey] || [] : [];

      if (taskValue && setTasksDate) {
        const updatedTasks = { ...tasksDate, [dateKey]: [...tasksForDate, taskValue] };

        setTasksDate(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
    }
  }, [setTasksDate, taskValue, tasksDate]);

  const removeTaskFromCalendar = useCallback(
    (taskToRemove: string) => () => {
      if (selectedDate) {
        const dateKey = selectedDate?.format(FormatEnum.YearMonthDayFormat);
        const tasksForDate = tasksDate ? tasksDate[dateKey] || [] : [];

        if (setTasksDate) {
          const updatedTasks = {
            ...tasksDate,
            [dateKey]: tasksForDate.filter(task => task !== taskToRemove),
          };

          setTasksDate(updatedTasks);
          localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
      }
    },
    [selectedDate, setTasksDate, tasksDate],
  );

  const rows = useMemo(() => {
    return getCalendarRows(
      shownDate,
      startOfWeek,
      holidays?.response.holidays,
      statusWeekends,
    );
  }, [shownDate, startOfWeek, holidays, statusWeekends]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks && setTasksDate) {
      setTasksDate(JSON.parse(storedTasks));
    }
  }, [setTasksDate]);

  const getEndDateForClasses = useCallback((rangeDays: IRangeDateObj | undefined) => {
    if (rangeDays) {
      if (rangeDays.to) return rangeDays.to;

      return rangeDays.from;
    }

    return '';
  }, []);

  const isStartDate = (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => {
    if (rangeDays) {
      return (
        dateKey ===
        (dayjs(rangeDays.from).isBefore(endDate) ? rangeDays.from : rangeDays.to)
      );
    }

    return false;
  };

  const isEndDate = (
    rangeDays: IRangeDateObj | undefined,
    dateKey: string,
    endDate: string,
  ) => {
    if (rangeDays) {
      return (
        dateKey ===
        (dayjs(rangeDays.from).isBefore(endDate) ? rangeDays.to : rangeDays.from)
      );
    }

    return false;
  };

  return {
    rows,
    rangeNoEmpty,
    holiday,
    taskValue,
    showTooltip,
    showTaskControl,
    handleMouseEnter,
    handleMouseLeave,
    setTaskInCalendar,
    setTaskValue,
    changeStartWeekDay,
    onClearRangeDays,
    getEndDateForClasses,
    isStartDate,
    isEndDate,
    handleSelectDate,
    isInRange,
    removeTaskFromCalendar,
  };
};
