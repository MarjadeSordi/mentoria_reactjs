import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import {
  ProgressBar,
  ProgressBarBlue,
  ContainerCadastro,
} from '../../styles/components/StepCadastroVisual';
import {
  TextButton,
  TextoBody,
  Title,
} from '../../styles/components/Typograph';

function StepCadastroVisual(props) {
  return (
    <>
      <ContainerCadastro>
        <Title> {props.titulo} </Title>
        <TextoBody> {props.descricao} </TextoBody>
        <ProgressBar displayBar={props.display} />
        <ProgressBarBlue widthBar={props.width} />
        <p> </p>
        <ButtonApp colorbgButton={'#1B5DFF'} onClick={props.onClick}>
          <TextButton>
            {props.textButton} {props.numero}
          </TextButton>
        </ButtonApp>
      </ContainerCadastro>
    </>
  );
}

export default StepCadastroVisual;
