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
  margin: 15% 5% 5% 5%;
  width: 80%;
`;
export const ImagemonBoarding = styled.img`
  width: 90%;
`;

export const AlinhamentosButton = styled.div`
  margin-top: 20%;
  display: flex;
`;

export const IconesOnboarding = styled.img`
  width: 3%;
  position: absolute;
`;

export const IconesOnboardingVolta = styled.img`
  width: 3%;
  margin-left: -3%;
  position: absolute;
`;

export const SpanDot = styled.span`
  height: 8px;
  margin: 5px;
  width: 2%;
  background-color: ${props => `${props.colorbg}`};
  border-radius: 50%;
  display: inline-block;
`;
