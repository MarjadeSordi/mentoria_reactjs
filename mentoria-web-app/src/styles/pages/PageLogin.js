import styled, { keyframes } from 'styled-components';
import { coresGlobais } from '../style';

const inputAnimation = keyframes`
to {
  transform: rotate(360deg)
}`;

export const DivCapsulaLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  margin-top: 10%;
  width: 95%;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
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

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-bottom: 2%;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivCentralizar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 1024px) {
 
 align-items: flex-start;
  justify-content: flex-start;
  text-align: flex-start;
`;

export const ImgLoader = styled.img`
  animation: ${inputAnimation} .6s linear infinite;
  margin-bottom: 1%;
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
