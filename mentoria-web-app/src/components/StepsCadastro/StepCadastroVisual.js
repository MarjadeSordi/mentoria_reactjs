import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import {
  ProgressBar,
  ProgressBarBlue,
} from '../../styles/components/StepCadastroVisual';
import { TextButton } from '../../styles/components/Typograph';

function StepCadastroVisual(props) {
  return (
    <>
      <ProgressBar displayBar={props.display} />
      <ProgressBarBlue widthBar={props.width} />
      <p> </p>
      <ButtonApp colorbgButton={'#1B5DFF'} onClick={props.onClick}>
        <TextButton>
          {props.textButton} {props.numero}
        </TextButton>
      </ButtonApp>
    </>
  );
}

export default StepCadastroVisual;
