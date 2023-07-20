import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  top: ${props => props.theme.valueInPercent.pr50};
  left: ${props => props.theme.valueInPercent.pr50};
  transform: translate(-50%, -50%);
  position: absolute;
  font-family: ${props => props.theme.fonts[0]};
  text-align: center;
`;

export const ErrorText = styled.h3`
  color: ${props => props.theme.usedColors.black};
  font-size: ${props => props.theme.fontSizes.xl};
  letter-spacing: 0.2px;
  margin-bottom: ${props => props.theme.indentation.i50};
`;
