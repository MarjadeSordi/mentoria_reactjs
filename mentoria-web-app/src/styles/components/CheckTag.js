import styled from 'styled-components';

export const CheckTag = styled.input`
  transform: scale(2);
  margin-left: 20px;
  margin-top: 5px;
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:checked + label {
    background: ${props => `${props.labelB}`};
  }
`;

export const CheckLabel = styled.label`
  position: relative;
  cursor: pointer;
  border: none;
  width: ${props => `${props.labelWidth}`};
  height: ${props => `${props.labelHeight}`};
  border-radius: ${props => `${props.labelRadius}`};
  font-size: ${props => `${props.labelFsize}`};
  padding-top: ${props => `${props.labelPtop}`};
  margin: 5%;
  color: #fff;
  display: flex;
  align-itens: center;
  justify-content: center;
  background: #e0e0e0;
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const CheckCapsula = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  @media (min-width: 1024px) {
    width: 80%;
  }
`;
