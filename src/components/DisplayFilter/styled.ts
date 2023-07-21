import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ theme }) => theme.valueInPercent.px125};
  background-color: ${({ theme }) => theme.usedColors.white};
  border: 1px solid ${({ theme }) => theme.usedColors.lightGray};
  border-radius: ${({ theme }) => theme.valueInPx.px10};
  width: ${({ theme }) => theme.valueInPx.px320};
  max-height: ${({ theme }) => theme.valueInPx.px200};
  padding-bottom: ${({ theme }) => theme.valueInPx.px10};
`;

export const RemoveInfo = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.usedColors.lightGray};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
