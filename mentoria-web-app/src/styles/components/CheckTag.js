import styled from 'styled-components';

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
  position: relative;
  width: 100%;
`;
