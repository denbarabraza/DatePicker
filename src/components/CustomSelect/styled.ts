import styled from 'styled-components';

export const Container = styled.div`
  width: 150px;
  position: relative;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

export const ArrowIcon = styled.div<{ open: boolean }>`
  width: 0;
  height: 0;
  border-top: 5px solid gray;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.2s ease-in-out;

  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const OptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 5;
  max-height: 100px;
  overflow-y: auto;
  color: black;
  background-color: white;
  border: blue;
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e8e8e8;
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: gray;
  }
`;

export const Option = styled.div<{ selected?: boolean }>`
  padding: 10px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? '#eee' : 'none')};

  &:hover {
    background-color: #eee;
  }
`;
