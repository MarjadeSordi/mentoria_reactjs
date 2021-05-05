import styled, { css } from 'styled-components';
import { coresGlobais } from '../style';

export const StyleFormShared = css`
  background-color: ${coresGlobais.lightShade};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px; ;
`;

export const StyledDivGrey = styled.div`
  background-color: ${coresGlobais.lightShade};
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px;
  display: flex;
  border: ${props => (props.erro ? '2px solid #EB5757' : '')};
  border: ${props => (props.checkar ? '2px solid #27AE60' : '')};
  & :focus-within {
    border: ${props => `${props.focus}`};
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  padding: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  width: 80%;
  margin: 0 10px;
  background: none;
  color: #1c1c1c;
  outline: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }

}
`;

export const MsgInputError = styled.div`
  color: #eb5757;
  font-size: 12px;
  font-family: Open Sans;
  margin-top: 1%;
`;

export const MsgInputCheck = styled.div`
  color: #27ae60;
  font-size: 12px;
  font-family: Open Sans;
  margin-top: 1%;
`;

export const ImagemError = styled.img`
  width: 5%;
  margin-left: 3%;
`;

export const ImagemCheck = styled.img`
  width: 5%;
  margin-left: 3%;
`;

export const SelectLabel = styled.select`
  ${StyleFormShared}
  padding: 0 1rem 0 1rem;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const SelectLabelDrop = styled.select`
  ${StyleFormShared}
  padding: 0 1rem 0 1rem;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
