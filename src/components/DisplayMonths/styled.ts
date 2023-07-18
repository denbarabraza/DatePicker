import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
`;

export const SelectorDropdown = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: white;
  border: 1px solid #ccc;
`;

export const SelectorDropdownItem = styled.div<{ selected?: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#eee' : 'none')};

  &:hover {
    background: #eee;
  }
`;
