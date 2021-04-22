import styled from 'styled-components';
import { coresGlobais } from '../style';

<coresGlobais />;

export const Checkbox = styled.input`
  display: flex;
  align-item: center;
  padding: 1px;
  color: #fff;
`;

export const CheckboxBorder = styled.div`
  border: none;
  border-radius: 30px;
  width: 134px;
  height: 48px;
  margin-right: 9px;
  background: ${props => (props.onClick ? '#E0E0E0' : '#47D163')};
`;

export const CheckLabel = styled.div`
  position: relative;
  top: -2px;
  left: 38px;
`;
