import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dosis';
    font-weight: ${({ theme }) => theme.fontWeight.light};
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJabMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJN7MV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    src: url('https://fonts.gstatic.com/s/dosis/v27/HhyJU5sn9vOmLxNkIwRSjTVNWLEJBbMV3A.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
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
  gap: ${({ theme }) => theme.valueInPx.px5};
  box-shadow: ${({ theme }) => theme.usedColors.blackOpacity} 0px 3px 8px;
  padding: ${({ theme }) => theme.valueInPx.px10};
  border-radius: ${({ theme }) => theme.valueInPx.px5};

  max-width: ${({ theme }) => theme.valueInPx.px320};
`;

export const InputFilterBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: ${({ theme }) => theme.valueInPx.px5};
  width: ${({ theme }) => theme.valueInPercent.pr100};
`;

export const FilterItemIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.valueInPercent.pr100};
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
