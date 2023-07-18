import styled from 'styled-components';

export const SelectorItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 42px;

  border-bottom: 1px solid #b3b3b3;
  margin-bottom: 8px;
`;

export const SelectorDateItem = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
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
