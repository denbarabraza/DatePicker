import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 100%;
  position: relative;
`;
export const InputItem = styled.input`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  font-family: 'Dosis', sans-serif;
  line-height: 16px;
  border: 1px solid #939292;
  border-radius: 5px;

  &:focus {
    border: 1px solid #212121;
  }
`;

export const DelIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 25%;
  right: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CalIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 25%;
  left: 5px;
`;
