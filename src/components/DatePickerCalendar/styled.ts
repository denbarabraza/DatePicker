import styled, { css } from 'styled-components';

export const CalendarHeader = styled.div`
  font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`;

export const CalendarCell = styled.div`
  padding: 4px;
  width: 38px;
  height: 38px;
  margin: 0 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarRow = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-around;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
`;

export const DayCell = styled.div<{
  isActive: boolean;
  isCurrentMonth: boolean;
  isWeekend: boolean;
  isToday: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 1px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #e9e9e9;
  }

  &:active {
    background-color: #d1d1d1;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #007bff;
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
`;
