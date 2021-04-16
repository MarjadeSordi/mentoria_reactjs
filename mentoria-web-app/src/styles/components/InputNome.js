import styled, { css } from 'styled-components';
import { coresGlobais } from '../style';

<coresGlobais />;

export const StyleFormShared = css`
  background-color: ${coresGlobais.lightShade};
  width: 340px;
  height: 48px;
  border-radius: 5px;
  margin-bottom: 5px;
  border: none;
`;

export const StyledInputName = styled.input`
  ${StyleFormShared};
  &:invalid {
    border: #eb5757;
  }
`;
