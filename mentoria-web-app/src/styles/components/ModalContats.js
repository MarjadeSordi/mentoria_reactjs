import styled from 'styled-components';

export const DivModal = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  width: 80%;
  background-color: #f9f9f9;
  border: 2px solid #6225cc;
  border-radius: 20px;
  right: 15%;
  display: flex;
  flex-direction: column;
  align-items: right;
`;

export const ListaContatos = styled.div`
  list-style: none;
  padding: 2%;
  display: flex;
`;

export const ButtonX = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 90%;
  margin-top: 2%;
`;

export const DivInternaModal = styled.div`
  margin-left: 5%;
`;

export const ButtonContatos = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  color: #6225cc;
`;
