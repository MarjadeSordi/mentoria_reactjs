import styled from 'styled-components';

export const DivCapsulaCard = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  background-color: #ffffff;
  height: 200vh;
  position: absolute;
  top: 0;
  right: 4%;
  width: 80%;
  border: 2px solid #828282;
  border-radius: 10px;
  box-shadow: 0 0 5px #828282;
  padding: 5%;
  z-index: 2;
`;

export const DivTabela = styled.div`
  display: flex;
  padding: 2%;
  > td {
    margin-right: 8%;
  }
`;

export const LinhaHr = styled.hr`
  height: 1px;
  border: 0;
  box-shadow: 0 0 5px #828282;
  margin: 0;
  width: 95%;
  background-color: ${props => `${props.bColor}`};
`;

export const DivDescription = styled.div`
  padding: 4%;
`;

export const DivSolution = styled.div`
  padding: 4%;
`;

export const DivDoor = styled.div`
  margin: 1%;
`;
