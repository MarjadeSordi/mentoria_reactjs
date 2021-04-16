import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import { ImagemonBoarding } from '../../styles/components/Onboarding';
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
        <label> {props.label}</label>
        <ImagemonBoarding src={props.img} alt={props.img} />
        <ProgressBar displayBar={props.display} />
        <ProgressBarBlue widthBar={props.width} />
        <ButtonApp colorbgButton={'#1B5DFF'} type="submit">
          <TextButton>{props.textButton}</TextButton>
        </ButtonApp>
      </ContainerCadastro>
    </>
  );
}

export default StepCadastroVisual;
