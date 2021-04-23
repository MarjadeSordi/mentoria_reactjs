import styled from 'styled-components';
import { coresGlobais } from '../style';

export const CheckTagContato = styled.input`
  &:checked + label {
    background: ${props => `${props.labelB}`};
  }
`;

export const CheckLabelContato = styled.label`
  cursor: pointer;
  border: none;
  width: 50%;
  height: 10%;
  border-radius: 30px;
  margin: 30px;
  color: #fff;
  display: flex;
  align-itens: center;
  justify-content: center;
  background: #e0e0e0;
`;

export const InputContato = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${coresGlobais.primary};
  border: none;
  margin-left: 8%;
  color: #fff;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;
