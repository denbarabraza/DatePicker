import React, { FC, useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';

import { MonthSelector } from '@/components/DisplayMonths/MonthSelector/MonthSelector';
import { YearSelector } from '@/components/DisplayMonths/YearSelector/YearSelector';

import { Wrapper } from './styled';

interface IDisplayYearMonths {
  shownDate: Dayjs;
  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  setShowMonthYear: (value: boolean) => void;
}

interface IYearMonthData {
  year?: number;
  month?: number;
}

export const DisplayYearMonths: FC<IDisplayYearMonths> = ({
  shownDate,
  setShownDate,
  setShowMonthYear,
}) => {
  const [yearMonthData, setYearMonthData] = useState<IYearMonthData | null>(null);
  const handleMonthSelect = (month: number) => {
    if (month) {
      setYearMonthData(prev => ({
        ...prev,
        month,
      }));
    }
  };

  const handleYearSelect = (year: number) => {
    if (year) {
      setYearMonthData(prev => ({
        ...prev,
        year,
      }));
    }
  };

  useEffect(() => {
    if (yearMonthData?.year && yearMonthData.month) {
      setShownDate(shownDate?.month(yearMonthData.month));
      setShownDate(shownDate?.year(yearMonthData?.year));
      setShowMonthYear(false);
    }
  }, [yearMonthData]);

  useEffect(() => {
    setYearMonthData(null);
  }, []);

  return (
    <Wrapper>
      <MonthSelector selectedMonth={shownDate?.month()} onSelect={handleMonthSelect} />
      <YearSelector selectedYear={shownDate?.year()} onSelect={handleYearSelect} />
    </Wrapper>
  );
};
