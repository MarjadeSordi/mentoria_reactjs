import styled from 'styled-components';

export const ContainerOnbiarding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6%;
`;

export const DivImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 5% 5% 5%;
  width: 80%;
  @media (min-width: 1024px) {
    width: 30%;
    margin: 0;
  }
`;

export const ImagemonBoarding = styled.img`
  width: 90%;
`;

export const AlinhamentosButton = styled.div`
  margin-top: 10%;
  display: flex;

  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 2%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-left: 5%;
  }
`;

export const IconesOnboarding = styled.img`
  width: 3%;
  position: absolute;
  @media (min-width: 1024px) {
    width: 1%;
    margin-left: 2%;
  }
`;

export const IconesOnboardingVolta = styled.img`
  width: 3%;
  margin-left: -3%;
  position: absolute;

  @media (min-width: 1024px) {
    width: 1%;
  }
`;

export const SpanDot = styled.span`
  height: 8px;
  margin: 10px;
  width: 8px;
  background-color: ${props => `${props.colorbg}`};
  border-radius: 50%;
  display: inline-block;

  @media (min-width: 1024px) {
    width: 1%;
  }
`;
