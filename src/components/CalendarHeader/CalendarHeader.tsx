import React from 'react';
import styled from 'styled-components';

type Props = {
  view: 'week' | 'month' | 'year';
  onPrev: () => void;
  onNext: () => void;
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  background-color: #f7f7f7;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  color: #999;

  &:hover {
    color: #333;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

const CalendarHeader: React.FC<Props> = ({ view, onPrev, onNext }) => {
  return (
    <Header>
      <Button onClick={onPrev}>Prev</Button>
      <Title>{view}</Title>
      <Button onClick={onNext}>Next</Button>
    </Header>
  );
};

export default CalendarHeader;
