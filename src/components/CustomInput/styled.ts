import styled from 'styled-components';

export const Container = styled.div<{ ruleDateInput: boolean }>`
  display: flex;
  width: ${({ theme }) => theme.valueInPercent.pr100};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  margin-top: ${({ ruleDateInput }) => (!ruleDateInput ? '20px' : 'none')};
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPx.px30};
  width: ${({ theme }) => theme.valueInPercent.pr100};
  position: relative;
`;
export const InputItem = styled.input`
  width: ${({ theme }) => theme.valueInPercent.pr100};
  height: ${({ theme }) => theme.valueInPx.px30};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-family: 'Dosis', 'sans-serif';
  line-height: ${({ theme }) => theme.valueInPx.px10};
  border: 1px solid ${({ theme }) => theme.usedColors.lightGray};
  border-radius: ${({ theme }) => theme.valueInPx.px5};

  &:focus {
    border: 1px solid ${({ theme }) => theme.usedColors.black};
  }
`;

export const DelIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px16};
  height: ${({ theme }) => theme.valueInPx.px16};
  position: absolute;
  top: ${({ theme }) => theme.valueInPercent.pr25};
  right: ${({ theme }) => theme.valueInPx.px5};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CalIcon = styled.div`
  width: ${({ theme }) => theme.valueInPx.px16};
  height: ${({ theme }) => theme.valueInPx.px16};
  position: absolute;
  top: ${({ theme }) => theme.valueInPercent.pr25};
  left: ${({ theme }) => theme.valueInPx.px10};
`;
