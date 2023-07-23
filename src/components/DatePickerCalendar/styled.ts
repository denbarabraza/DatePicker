import styled from 'styled-components';

import { usedColors } from '@/theme/theme';

export const CalendarBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const CalendarHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  display: flex;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  justify-content: space-around;
  align-items: center;
  height: ${({ theme }) => theme.valueInPx.px50};
`;

export const CalendarCell = styled.div<{ isStartOfWeek: boolean }>`
  padding: ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPx.px20};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${({ isStartOfWeek }) =>
    isStartOfWeek ? `1px solid ${usedColors.lightGray}` : 'none'};
`;

export const CalendarRow = styled.div<{ withWeekends: boolean }>`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(${({ withWeekends }) => (withWeekends ? 7 : 5)}, 1fr);
`;

export const DayCell = styled.div<{
  isActive: boolean;
  isCurrentMonth: boolean;
  isWeekend: boolean;
  isToday: boolean;
  isHoliday: boolean;
  isInRange: boolean;
  isStartDate: boolean | undefined;
  isEndDate: boolean | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPx.px25};
  padding: ${({ theme }) => theme.valueInPx.px1};
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-in-out;
  width: ${({ theme }) => theme.valueInPx.px34};

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.gray};
  }

  &:active {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }

  background-color: ${({ isInRange, isStartDate, isActive, isEndDate }) => {
    if (isInRange) {
      return usedColors.blueMoreOpacity;
    }
    if (isStartDate || isActive) {
      return usedColors.blueOpacity;
    }
    if (isEndDate) {
      return usedColors.blue;
    }

    return 'none';
  }};

  color: ${({ isEndDate, isStartDate, isActive, isWeekend }) => {
    if (isEndDate || isStartDate || isActive) {
      return usedColors.white;
    }
    if (isWeekend) {
      return usedColors.redOpacity;
    }

    return '';
  }};

  color: ${({ isHoliday }) => {
    if (isHoliday) {
      return usedColors.greenOpacity;
    }

    return '';
  }};

  opacity: ${({ isCurrentMonth }) => {
    if (!isCurrentMonth) {
      return 0.3;
    }

    return 'none';
  }};

  border-radius: ${({ isInRange, isStartDate, isEndDate, theme }) => {
    if (isInRange || isStartDate || isEndDate) {
      return 0;
    }

    return theme.valueInPercent.pr50;
  }};

  border-bottom-left-radius: ${({ isStartDate, theme }) => {
    if (isStartDate) {
      return theme.valueInPercent.pr50;
    }
  }};

  border-bottom-right-radius: ${({ isEndDate, theme }) => {
    if (isEndDate) {
      return theme.valueInPercent.pr50;
    }
  }};

  border-top-left-radius: ${({ isStartDate, theme }) => {
    if (isStartDate) {
      return theme.valueInPercent.pr50;
    }
  }};

  border-top-right-radius: ${({ isEndDate, theme }) => {
    if (isEndDate) {
      return theme.valueInPercent.pr50;
    }
  }};

  outline: ${({ isToday }) => {
    if (isToday) {
      return `1px dashed ${usedColors.lightGray}`;
    }

    return 'none';
  }};
`;

export const TooltipBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr70};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.valueInPx.px10};
`;
export const TooltipItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const CircleMarker = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${({ theme }) => theme.valueInPx.px16};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: ${({ theme }) => theme.valueInPercent.pr50};
    left: ${({ theme }) => theme.valueInPx.px0};
    transform: translateY(-50%);
    width: ${({ theme }) => theme.valueInPx.px10};
    height: ${({ theme }) => theme.valueInPx.px10};
    background-color: ${({ theme }) => theme.usedColors.greenOpacity};
    border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    margin-right: ${({ theme }) => theme.valueInPx.px10};
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px5};
  justify-content: flex-start;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  margin: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px0};
`;

export const Task = styled.div`
  padding-left: ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  background-color: ${({ theme }) => theme.usedColors.lightGrayOpacity};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 1.4;
  color: ${({ theme }) => theme.usedColors.black};
`;

export const CircleTaskMarker = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.valueInPercent.pr10};
    left: ${({ theme }) => theme.valueInPx.px25};
    width: ${({ theme }) => theme.valueInPx.px8};
    height: ${({ theme }) => theme.valueInPx.px8};
    background-color: ${({ theme }) => theme.usedColors.greenOpacity};
    border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    margin-right: ${({ theme }) => theme.valueInPx.px10};
  }
`;

export const ClearRangeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const ClearRangeItem = styled.div`
  text-align: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.usedColors.lightGray}`};
  margin: ${({ theme }) => theme.valueInPx.px10} ${({ theme }) => theme.valueInPx.px0};

  &:hover {
    transform: scale(1.1);
  }
`;
