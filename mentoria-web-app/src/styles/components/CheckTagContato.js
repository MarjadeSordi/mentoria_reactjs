import styled from 'styled-components';
import { coresGlobais } from '../style';

export const CheckTagContato = styled.input`
  width: 45%;
  height: 20%;
  position: absolute;
  margin-left: 10%;
  padding: 10%;
  -webkit-appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  &:checked + label {
    background: ${props => (props.onClick ? `${props.labelB}` : '')};
  }
`;

export const CheckLabelContato = styled.label`
  cursor: pointer;
  position: relative;
  z-index: -5;
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
  width: 40%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${coresGlobais.primary};
  border: none;
  margin-left: 22%;
  color: #fff;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

export const ListaContato = styled.ul`
  list-style: none;
  position: relative;
`;
