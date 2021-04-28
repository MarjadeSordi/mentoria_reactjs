import React, { useState } from 'react';
import olho from '../assets/icons/olho.svg';
import olho_outline from '../assets/icons/olho_outline.svg';
import { ButtonTransparent } from '../styles/components/Password';

const usePassword = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = (
    <ButtonTransparent
      type="button"
      onClick={() => setVisibility(visibility => !visibility)}
    >
      <img src={visible ? olho : olho_outline} alt="Status Senha " />
    </ButtonTransparent>
  );

  const InputType = visible ? 'text' : 'password';

  return [InputType, Icon];
};

export default usePassword;
