import styled, { keyframes } from 'styled-components';
import { coresGlobais } from '../style';

export const DivCapsulaLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-top: 10%;
  width: 95%;
`;

export const DivLogin = styled.div`
  width: 95%;
  display: flex;
  margin-top: 10%;
  margin-bottom: 20%;
  > hr {
    height: 2px;
    background-color: ${coresGlobais.lightShade};
    border-top-width: 1px;
    position: absolute;
    width: 95%;
    top: 35%;
    border: none;
  }
`;

export const DivCentralizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ImgLoader = styled.img`
  transform: rotate(360g) 1s infinite;
};

`;

export const ImgIcone = styled.img`
  margin: 2%;
`;

/*const loaderRotation = styled.keyframes`
  to {
    transform: rotate(360deg);
  }
`;*/
