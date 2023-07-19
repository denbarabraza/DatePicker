import styled from 'styled-components';

export const SelectorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 30px;
  width: 100%;

  border-bottom: 1px solid #b3b3b3;
`;

export const SelectorDateItem = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 10px;
`;

export const LeftSelectorIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const RightSelectorIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }
  transform: rotate(180deg);
`;
