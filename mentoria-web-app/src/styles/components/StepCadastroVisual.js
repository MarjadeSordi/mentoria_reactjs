import styled from 'styled-components';

export const ProgressBar = styled.div`
  flex: 1;
  margin-top: 10%;
  width: 100%;
  height: 4px;
  background-color: #e5e5ea;
  position: relative;
  display: ${props => props.displayBar};
  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const ProgressBarBlue = styled.div`
  width: ${props => props.widthBar}%;
  height: 4px;
  background-color: #007aff;
  position: absolute;
  margin-top: -4px;
`;

export const ContainerCadastro = styled.div`
  width: 100%;
`;

export const FormCadastro = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImagemCadastro = styled.img`
  margin: 0 auto;
  width: 65%;
  height: 60%;
  padding-bottom: 10%;
  padding-top: 10%;
  width: ${props => props.widthImg}%;
  padding-left: ${props => props.paddingImg}%;
  @media (min-width: 1024px) {
    width: 20%;
    paddind-bottom: 0;
    padding-top: 0;
  }
`;

export const DivInternaCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DivTelasFinais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 10%;
`;
