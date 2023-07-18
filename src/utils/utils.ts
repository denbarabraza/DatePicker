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

  const previousMonthDays = startOfMonth.day() - startOfWeek;
  const previousMonthDate = startOfMonth.subtract(previousMonthDays, 'day');

  for (let i = 0; i < previousMonthDays; i++) {
    const day = previousMonthDate.add(i, 'day');

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth: false,
    });
  }

  for (let i = 0; i < days; i++) {
    const day = startOfMonth.add(i, 'day');
    const isCurrentMonth = day.isSame(date, 'month');

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth,
    });
  }

  const nextMonthDays = 42 - calendarDays.length;
  const nextMonthDate = endOfMonth.add(1, 'day');

  for (let i = 0; i < nextMonthDays; i++) {
    const day = nextMonthDate.add(i, 'day');

    calendarDays.push({
      text: day.format('D'),
      value: day,
      isCurrentMonth: false,
    });
  }

  const rows: Array<ICalendarCell[]> = [];

  for (let i = 0; i < calendarDays.length; i += 7) {
    rows.push(calendarDays.slice(i, i + 7));
  }

  return rows;
}

export const dayjsLocalized = (date: string): Dayjs => {
  return dayjs(date);
};
