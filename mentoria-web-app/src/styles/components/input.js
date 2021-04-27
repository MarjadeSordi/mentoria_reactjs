import styled, { css } from 'styled-components';
import { coresGlobais } from '../style';

export const StyleFormShared = css`
  background-color: ${coresGlobais.lightShade};
  width: 90%;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 5px; ;
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
  width: 100%;
  display: block;
  border: none;
  padding: 0 1rem;
  border: none;
  border: ${props => (props.error ? '2px solid #EB5757' : '')};
  border: ${props => (props.check ? '2px solid #27AE60' : '')};
  ${StyleFormShared}
`;

export const MsgInputError = styled.div`
  color: #eb5757;
  font-size: 1 rem;
  font-family: Open Sans;
  margin-top: 0px;
`;

export const MsgInputCheck = styled.div`
  color: #27ae60;
  font-size: 1 rem;
  font-family: Open Sans;
  margin-top: 0px;
`;

export const ImagemError = styled.img`
  position: absolute;
  margin: -20% 80%;
`;

export const ImagemCheck = styled.img`
  position: absolute;
  margin: -25% 80%;
`;

export const SelectLabel = styled.select`
  ${StyleFormShared}
  padding: 0 1rem 0 1rem;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const SelectLabelDrop = styled.select`
  ${StyleFormShared}
  padding: 0 1rem 0 1rem;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
`;
