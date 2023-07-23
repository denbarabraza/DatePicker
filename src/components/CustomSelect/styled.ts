import styled from 'styled-components';

import { usedColors } from '@/theme/theme';

export const Container = styled.div`
  width: ${({ theme }) => theme.valueInPx.px100};
  position: relative;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.valueInPx.px10};
  border: ${({ theme }) => theme.valueInPx.px1} solid
    ${({ theme }) => theme.usedColors.lightGray};
  border-radius: ${({ theme }) => theme.valueInPx.px5};
  cursor: pointer;
`;

export const ArrowIcon = styled.div<{ open: boolean }>`
  width: ${({ theme }) => theme.valueInPx.px0};
  height: ${({ theme }) => theme.valueInPx.px0};
  border-top: ${({ theme }) => theme.valueInPx.px5} solid
    ${({ theme }) => theme.usedColors.lightGray};
  border-left: ${({ theme }) => theme.valueInPx.px5} solid transparent;
  border-right: ${({ theme }) => theme.valueInPx.px5} solid transparent;
  transition: transform 0.2s ease-in-out;

  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const OptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.valueInPx.px50};
  left: ${({ theme }) => theme.valueInPx.px0};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  z-index: 5;
  max-height: ${({ theme }) => theme.valueInPx.px250};
  overflow-y: auto;
  color: ${({ theme }) => theme.usedColors.black};
  background-color: ${({ theme }) => theme.usedColors.white};
  border-top: none;
  border-radius: ${({ theme }) => theme.valueInPx.px5};
  box-shadow: 0 2px 4px ${({ theme }) => theme.usedColors.blackOpacity};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.valueInPx.px2};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.usedColors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.usedColors.gray};
  }
`;

export const Option = styled.div<{ selected?: boolean }>`
  padding: ${({ theme }) => theme.valueInPx.px10};
  cursor: pointer;
  background: ${({ selected }) => (selected ? usedColors.white : 'none')};

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }
`;
