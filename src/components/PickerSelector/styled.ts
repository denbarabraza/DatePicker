import styled from 'styled-components';

export const SelectorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.valueInPx.px30};
  width: ${({ theme }) => theme.valueInPercent.pr100};

  border-bottom: 1px solid ${({ theme }) => theme.usedColors.lightGray};
`;

export const SelectorDateItem = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: ${({ theme }) => theme.valueInPx.px10};
`;

export const LeftSelectorIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px25};
  height: ${({ theme }) => theme.valueInPx.px25};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }
`;

export const RightSelectorIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px25};
  height: ${({ theme }) => theme.valueInPx.px25};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.usedColors.lightGray};
  }

  transform: rotate(180deg);
`;
