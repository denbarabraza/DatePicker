import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isoWeek);

export function changeDateMonth(date: Dayjs, isNextMonth: boolean): Dayjs {
  if (date.month() === 0 && !isNextMonth) {
    return date.set('year', date.year() - 1).set('month', 11);
  }

  if (date.month() === 11 && isNextMonth) {
    return date.set('year', date.year() + 1).set('month', 0);
  }

  return date.add(isNextMonth ? 1 : -1, 'month');
}

export interface ICalendarCell {
  text: string;
  value: Dayjs;
  isCurrentMonth?: boolean;
  isWeekend?: boolean;
  isToday?: boolean;
}

export function getCalendarRows(
  date: Dayjs,
  startOfWeek: number,
): Array<ICalendarCell[]> {
  let startOfMonth = date.startOf('month').day(startOfWeek).startOf('day');

  if (startOfWeek === 7) {
    startOfMonth = date
      .startOf('month')
      .day(startOfWeek)
      .subtract(7, 'day')
      .startOf('day');
  }

  const endOfMonth = date
    .endOf('month')
    .endOf('week')
    .day(startOfWeek + 6)
    .endOf('day');

  const days = endOfMonth.diff(startOfMonth, 'days') + 1;
  const calendarDays: ICalendarCell[] = [];

  const previousMonthDays = Math.min(startOfMonth.day() - startOfWeek);
  const previousMonthDate = startOfMonth.subtract(previousMonthDays, 'day');

  for (let i = 0; i < previousMonthDays; i++) {
    const day = previousMonthDate.add(i, 'day');
    const isWeekend = day.day() === 0 || day.day() === 6;

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth: false,
      isWeekend,
    });
  }

  for (let i = 0; i < days; i++) {
    const day = startOfMonth.add(i, 'day');
    const isCurrentMonth = day.isSame(date, 'month');
    const isWeekend = day.day() === 0 || day.day() === 6;
    const isToday = day.isSame(dayjs(), 'day');

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth,
      isWeekend,
      isToday,
    });
  }

  const nextMonthDays = Math.min(42 - calendarDays.length, 0);
  const nextMonthDate = endOfMonth.add(1, 'day');

  for (let i = 0; i < nextMonthDays; i++) {
    const day = nextMonthDate.add(i, 'day');
    const isWeekend = day.day() === 0 || day.day() === 6;

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth: false,
      isWeekend,
    });
  }

  const rows: Array<ICalendarCell[]> = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    rows.push(calendarDays.slice(i, i + 7));
  }

  return rows;
}

export const range = (start: number, end: number) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};
