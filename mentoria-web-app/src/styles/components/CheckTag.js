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
  width: 40%;
  height: 25%;
  border-radius: 30px;
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
