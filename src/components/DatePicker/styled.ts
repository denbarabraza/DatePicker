import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dosis';
    font-weight: 300;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7MV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 500;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: 600;
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJ6bQV3A.ttf') format('truetype');
  }

  body {
    font-family: "Dosis", sans-serif;
  }
`;

export const DatePickerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px;
  border-radius: 5px;

  max-width: 320px;
`;

export const InputFilterBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  width: 100%;
`;

export const FilterItemIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
