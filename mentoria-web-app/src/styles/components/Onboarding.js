import styled from 'styled-components';

export const ContainerOnbiarding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ImagemonBoarding = styled.img`
  margin-top: 3%;
  width: 308px;
  height: 229.5px;
`;

export const AlinhamentosButton = styled.div`
  margin-top: 20%;
  display: flex;
`;

export const IconesOnboarding = styled.img`
  width: 8px;
  margin-left: 5px;
  position: absolute;
  padding: -20px;
`;

export const IconesOnboardingVolta = styled.img`
  width: 8px;
  margin-left: -18px;
  position: absolute;
  padding: -20px;
`;

export const SpanDot = styled.span`
  height: 10px;
  margin: 5px;
  width: 10px;
  background-color: ${props => `${props.colorbg}`};
  border-radius: 50%;
  display: inline-block;
`;
