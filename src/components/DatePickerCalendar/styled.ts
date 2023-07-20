import styled, { css } from 'styled-components';

export const CalendarHeader = styled.div`
  font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

export const CalendarCell = styled.div<{ isStartOfWeek: boolean }>`
  padding: 4px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: ${({ isStartOfWeek }) => (isStartOfWeek ? '1px solid #b3b3b3' : 'none')};
`;

export const CalendarRow = styled.div<{ withWeekends: boolean }>`
  width: 100%;
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
  height: 25px;
  padding: 1px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  width: 24px;

  &:hover {
    background-color: #e9e9e9;
  }

  &:active {
    background-color: #d1d1d1;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #6d9fe8;
      color: #fff;
    `}
  ${({ isCurrentMonth }) =>
    !isCurrentMonth &&
    css`
      opacity: 0.3;
    `}
  ${({ isWeekend }) =>
    isWeekend &&
    css`
      color: #ef4e4e;
    `}
  ${({ isToday }) =>
    isToday &&
    css`
      border: 1px dashed grey;
      border-radius: 50%;
    `}
  ${({ isHoliday }) =>
    isHoliday &&
    css`
      color: #39ea18;
    `}
`;

export const TooltipBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;
export const TooltipItem = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const CircleMarker = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 16px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #39ea18;
    border-radius: 50%;
    margin-right: 8px;
  }
`;
