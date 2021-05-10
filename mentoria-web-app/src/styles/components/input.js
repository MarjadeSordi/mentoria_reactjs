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
  border: ${props => (props.error ? '2px solid #EB5757' : '')};
  border: ${props => (props.check ? '2px solid #27AE60' : '')};
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
  background-color: transparent;
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

export const StyledDivBack = styled.div`
  background-color: ${coresGlobais.lightShade};
  width: 90%;
  height: 40px;
  border-radius: 30px;
  margin-bottom: 5px;
  display: flex;
  color: #fff;
  background-color: ${props => (props.color ? `${coresGlobais.primary}` : '')};
  background-color: ${props => (props.check ? '#27AE60' : '')};
  background-color: ${props => (props.error ? '#EB5757' : '')};
`;

export const StyledInputTag = styled.input`
  background-color: transparent;
  border: transparent;
  color: #fff;
  margin-left: 10%;
  outline: none;
  height: 50%;
  width: 70%;
  margin-top: 5%;

  :: placeholder {
    color: #fff;
    font-size: 14px;
    padding-left: 15%;
    font-weight: bold;
    text-align: center;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px
      ${props => (props.check ? '#27AE60' : '#EB5757')} inset;
    -webkit-text-fill-color: #fff;
  }

  @-webkit-keyframes autofill {
    0%,
    100% {
      color: #666;
      background: transparent;
    }
  }

  &:-webkit-autofill {
    -webkit-animation-delay: 1s;
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;
