import styled from 'styled-components';

export const ButtonApp = styled.button`
  height: 48px;
  width: 200px;
  border-radius: 5px;
  margin-top: 1%;
  cursor: pointer;

  font-family: Roboto;

  border-radius: 5px;

  background-color: ${props => `${props.colorbgButton}`};
  color: ${props => `${props.buttonColor}`};
  border: ${props => `${props.buttonBorder}`};
`;
