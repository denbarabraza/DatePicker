import styled, { css } from 'styled-components';

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
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPx.px25};
  padding: ${({ theme }) => theme.valueInPx.px1};
  border-radius: ${({ theme }) => theme.valueInPercent.pr50};
  cursor: pointer;
  position: relative;
  transition: background-color 0.2s ease-in-out;
  width: ${({ theme }) => theme.valueInPx.px25};

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.gray};
  }

  &:active {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${({ theme }) => theme.usedColors.blueOpacity};
      color: ${({ theme }) => theme.usedColors.white};
    `}
  ${({ isCurrentMonth }) =>
    !isCurrentMonth &&
    css`
      opacity: 0.3;
    `}
  ${({ isWeekend }) =>
    isWeekend &&
    css`
      color: ${({ theme }) => theme.usedColors.redOpacity};
    `}
  ${({ isToday }) =>
    isToday &&
    css`
      border: 1px dashed ${({ theme }) => theme.usedColors.lightGray};
      border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    `}
  ${({ isHoliday }) =>
    isHoliday &&
    css`
      color: ${({ theme }) => theme.usedColors.greenOpacity};
    `}
`;

export const TooltipBlock = styled.div`
  width: ${({ theme }) => theme.valueInPercent.pr100};
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
  margin: ${({ theme }) => theme.valueInPx.px20} ${({ theme }) => theme.valueInPx.px0};
`;

export const Task = styled.div`
  padding-left: ${({ theme }) => theme.valueInPx.px10};
  margin: ${({ theme }) => theme.valueInPx.px0} ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  background-color: ${({ theme }) => theme.usedColors.lightGrayOpacity};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  font-size: ${({ theme }) => theme.fontSizes.l}
  line-height: 1.4;
  color: ${({ theme }) => theme.usedColors.black};
`;

export const CircleTaskMarker = styled.div`
  &::before {
    content: '';
    position: absolute;
    top: ${({ theme }) => theme.valueInPercent.pr25};
    left: ${({ theme }) => theme.valueInPx.px22};
    width: ${({ theme }) => theme.valueInPx.px8};
    height: ${({ theme }) => theme.valueInPx.px8};
    background-color: ${({ theme }) => theme.usedColors.blueOpacity};
    border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    margin-right: ${({ theme }) => theme.valueInPx.px10};
  }
`;
