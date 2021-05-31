import styled from 'styled-components';
import coresGlobais from '../style';

export const SearchList = styled.li`
  list-style: none;
  padding: 1%;
`;

export const DivsearchList = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
  width: 80%;
  height: 30%;
  border-radius: 20px;
  padding: 4%;
  box-shadow: 0 0 0.8em #828282;
  margin: 5%;
  -webkit-line-clamp: 3;
`;

export const DivSearchData = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const FormatText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const DivCapsulaSearch = styled.div`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  position: absolute;
  top: 5%;
  border-radius: 20px;
  width: 80%;
  background-color: #ffffff;
  left: 5%;
  border: 1ps solid #6225cc;
  box-shadow: 0 0 5px #828282;
  padding: 4%;
`;
export const ButtonFilter = styled.button`
  background-color: transparent;
  border: none;
`;

export const ButtonOut = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 90%;
  margin-bottom: 5%;
`;
