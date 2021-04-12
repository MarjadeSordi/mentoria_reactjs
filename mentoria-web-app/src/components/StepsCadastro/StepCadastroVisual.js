import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import { TextButton } from '../../styles/components/Typograph';

function StepCadastroVisual(props) {
  return (
    <div>
      <ButtonApp colorbgButton={'#1B5DFF'} onClick={props.onClick}>
        <TextButton> {props.textButton} </TextButton>
      </ButtonApp>
    </div>
  );
}

export default StepCadastroVisual;
