import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.valueInPx.px20} ${({ theme }) => theme.valueInPx.px0};
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: ${({ theme }) => theme.valueInPx.px0};
  height: ${({ theme }) => theme.valueInPx.px0};
`;

export const ToggleSlider = styled.span`
  width: ${({ theme }) => theme.valueInPx.px50};
  height: ${({ theme }) => theme.valueInPx.px25};
  border-radius: ${({ theme }) => theme.valueInPx.px20};
  border: 1px solid ${({ theme }) => theme.usedColors.lightGray};
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.valueInPx.px20};
    height: ${({ theme }) => theme.valueInPx.px20};
    border-radius: ${({ theme }) => theme.valueInPercent.pr50};
    background-color: ${({ theme }) => theme.usedColors.lightGray};
    top: ${({ theme }) => theme.valueInPx.px2};
    left: ${({ theme }) => theme.valueInPx.px2};
    transition: transform 0.2s ease-in-out;
  }

  ${ToggleInput}:checked + & {
    background-color: ${({ theme }) => theme.usedColors.white};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(25px);
  }
`;
