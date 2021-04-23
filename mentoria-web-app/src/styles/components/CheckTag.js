import styled from 'styled-components';
import { coresGlobais } from '../style';

<coresGlobais />;

export const CheckTag = styled.input`
  position: absolute;
  opacity: 0;
  &:checked + label {
    background: ${props => `${props.labelB}`};
  }
`;

export const CheckLabel = styled.label`
  position: relative;
  cursor: pointer;
  border: none;
  width: 134px;
  height: 48px;
  border-radius: 30px;
  margin: 30px;
  color: #fff;
  display: flex;
  align-itens: center;
  justify-content: center;
  background: #e0e0e0;
`;

export const CheckCapsula = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  position: relative;
`;
export const CheckTagContato = styled.input`
  position: absolute;

  &:checked + label {
    background: ${props => `${props.labelB}`};
  }
`;

export const CheckLabelContato = styled.label`
  cursor: pointer;
  border: none;
  width: 300px;
  height: 48px;
  border-radius: 30px;
  margin: 30px;
  color: #fff;
  display: flex;
  align-itens: center;
  justify-content: center;
  background: #e0e0e0;
  margin-top: 10px;
  position: relative;
`;

export const InputContato = styled.input`
  width: 15%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: ${coresGlobais.primary};
  border: none;
  margin-left: 35px;
  color: #fff;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;
