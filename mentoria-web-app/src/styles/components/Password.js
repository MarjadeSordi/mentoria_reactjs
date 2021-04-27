import styled, { css } from 'styled-components';

export const PasswordToogle = styled.span`
  position: absolute;
  top: 35%;
  right: 15%;
  z-index: 1000;
  cursor: pointer;
`;

export const ButtonTransparent = styled.button`
  border: none;
  background-color: transparent;
  > img {
    width: 25px;
    height: 25px;
  }
`;

export const PasswordToogleConfirmado = styled.span`
  position: absolute;
  top: 55%;
  right: 15%;
  z-index: 1000;
  cursor: pointer;
`;

export const CapsulaPassword = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 20%;
  > label {
    padding-top: 2%;
  }
`;
