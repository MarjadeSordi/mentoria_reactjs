import styled from 'styled-components';

export const ButtonApp = styled.button`
  height: 48px;
  border-radius: 5px;
  margin-top: 1%;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};;


  outline = ${props => `${props.outline}`};
  border-radius: 5px;
  width: ${props => `${props.buttonSize}`};
  background-color: ${props => `${props.colorbgButton}`};
  color: ${props => `${props.buttonColor}`};
  border: ${props => `${props.buttonBorder}`};
  
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
