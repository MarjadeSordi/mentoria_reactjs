import styled from 'styled-components';
import { coresGlobais } from '../style';

export const SideBarDiv = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  height: 100vh;
  width: 50%;
  background-color: #f9f9f9;
  position: absolute;
  z-index: 1000;
  top: 0;
  -webkit-transition: visibility 2s, -webkit-transform 2s;
`;

export const SideBarUl = styled.ul`
  height: auto;
  padding: 0;
  width: 100%;
`;

export const SideBarList = styled.li`
  width: 100%;
  height: 8vh;
  list-style-type: none;
  display: flex;
  flex-direction: row;
`;

export const SideBarIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 5px;

  & hover: {
    background-color: #ffffff;
  }
`;

export const SideBarText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-left: 10px;
`;

export const SideBarDivInterna = styled.div`
  display: inline;
  &:hover {
    backgroud-color: #23232e;
  }
`;

export const SideBarPerfil = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
`;

export const SideBarPerfilImg = styled.img`
  padding-top: 20%;
  margin-left: 10%;
  margin-right: 10%;
  width: 30%;
  height: 35%;
`;

export const SideBarPerfilText = styled.p`
  margin-top: 25%;
`;

export const SideBarPerfilScore = styled.img`
  margin-left: 25%;
`;

export const SideBarButtonX = styled.button`
  padding-top: 10%;
  margin-left: 75%;
  background: none;
  border: none;
`;

export const SideBarHr = styled.hr`
  height: 1px;
  border: 0;
  box-shadow: 0 0 5px #828282;
  margin: 0;
`;

export const SideBarAlignButton = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
`;
