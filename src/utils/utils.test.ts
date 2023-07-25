import { IHolidays } from '../components/DatePicker/types';
import { WeekendStatusEnum } from '../components/Toggle/types';

import {
  changeDateMonth,
  forwardPropGuard,
  getCalendarRows,
  getDayOfWeek,
} from './utils';

const dayjs = require('dayjs');

describe('getDayOfWeek', () => {
  it('should return the correct index for a valid day of the week', () => {
    expect(getDayOfWeek('Mo')).toBe(1);
    expect(getDayOfWeek('Tu')).toBe(2);
    expect(getDayOfWeek('We')).toBe(3);
    expect(getDayOfWeek('Th')).toBe(4);
    expect(getDayOfWeek('Fr')).toBe(5);
    expect(getDayOfWeek('Sa')).toBe(6);
    expect(getDayOfWeek('Su')).toBe(0);
  });

  it('should return -1 for an invalid day of the week', () => {
    expect(getDayOfWeek('foo')).toBe(-1);
    expect(getDayOfWeek('bar')).toBe(-1);
    expect(getDayOfWeek('baz')).toBe(-1);
  });
});

describe('getCalendarRows', () => {
  const date = dayjs('2023-07-01');
  const startOfWeek = 1;
  const holidays: IHolidays[] = [
    {
      canonical_url: 'string',
      country: { id: 'string', name: 'string' },
      date: { iso: '2023-07-04', datetime: { year: 2023, month: 7, day: 4 } },
      description: 'string',
      locations: 'string',
      name: 'Independence Day',
      primary_type: 'string',
      states: 'string',
      type: [],
      urlid: 'string',
    },
    {
      canonical_url: 'string',
      country: { id: 'string', name: 'string' },
      date: { iso: '2023-07-07', datetime: { year: 2023, month: 7, day: 7 } },
      description: 'string',
      locations: 'string',
      name: 'Labor Day',
      primary_type: 'string',
      states: 'string',
      type: [],
      urlid: 'string',
    },
  ];
  const statusWeekends = WeekendStatusEnum.WithWeekEnds;

  test('returns the calendar rows for July 2023', () => {
    const rows = getCalendarRows(date, startOfWeek, holidays, statusWeekends);

    expect(rows.length).toBe(6);
    expect(rows[0].length).toBe(7);
    expect(rows[1].length).toBe(7);

    expect(rows[0][6].text).toBe('2');
    expect(rows[0][6].isCurrentMonth).toBe(true);
    expect(rows[0][6].isWeekend).toBe(true);

    expect(rows[1][0].text).toBe('3');
    expect(rows[1][0].isCurrentMonth).toBe(true);
    expect(rows[1][0].isWeekend).toBe(false);
    expect(rows[1][0].isHoliday).toBe(false);
    expect(rows[1][0].holidayName).toBeUndefined();
  });
});

describe('changeDateMonth', () => {
  test('returns the next month for January 2023', () => {
    const date = dayjs('2023-01-01');
    const isNextMonth = true;

    const newDate = changeDateMonth(date, isNextMonth);

    expect(newDate.format('YYYY-MM-DD')).toBe('2023-02-01');
  });

  test('returns the previous month for January 2023', () => {
    const date = dayjs('2023-01-01');
    const isNextMonth = false;

    const newDate = changeDateMonth(date, isNextMonth);

    expect(newDate.format('YYYY-MM-DD')).toBe('2022-12-01');
  });

  test('returns the next month for December 2023', () => {
    const date = dayjs('2023-12-01');
    const isNextMonth = true;

    const newDate = changeDateMonth(date, isNextMonth);

    expect(newDate.format('YYYY-MM-DD')).toBe('2024-01-01');
  });

  test('returns the previous month for December 2023', () => {
    const date = dayjs('2023-12-01');
    const isNextMonth = false;

    const newDate = changeDateMonth(date, isNextMonth);

    expect(newDate.format('YYYY-MM-DD')).toBe('2023-11-01');
  });

  test('returns the same date for February 2023', () => {
    const date = dayjs('2023-02-15');
    const isNextMonth = true;

    const newDate = changeDateMonth(date, isNextMonth);

    expect(newDate.format('YYYY-MM-DD')).toBe('2023-03-15');
  });
});

describe('forwardPropGuard', () => {
  it('should return true for allowed props and false for disallowed props', () => {
    const propKeys = ['allowedProp1', 'allowedProp2'];
    const filter = forwardPropGuard(propKeys);

    expect(filter('allowedProp1')).toBe(false);
    expect(filter('allowedProp2')).toBe(false);
    expect(filter('disallowedProp')).toBe(true);
  });
});
