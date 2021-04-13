import styled from 'styled-components';
import { coresGlobais } from '../style';

export const ProgressBar = styled.div`
  flex: 1;
  margin-top: 20%;
  width: 100%;
  height: 4px;
  background-color: #e5e5ea;
  position: relative;
  display: ${props => props.displayBar};
`;

export const ProgressBarBlue = styled.div`
  width: ${props => props.widthBar}%;
  height: 4px;
  background-color: #007aff;
  position: absolute;
  margin-top: -4px;
`;
