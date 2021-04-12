import styled from 'styled-components';
import { coresGlobais } from '../style';

<coresGlobais />

export const Checkbox = styled.div`
  display: flex;
  align-item: center;
  padding: 1px;

`


export const CheckboxBorder = styled.div`
  border: none;
  border-radius: 30px;
  width: 134px;
  height: 48px;
  margin-right: 9px;
  background: ${(props) => props.checked ? '#E0E0E0' : '#47D163'}
`


export const CheckIndicator = styled.div`
`

export const CheckLabel = styled.div`
  position: relative;
  top: -2px;
  left: 38px;

  `