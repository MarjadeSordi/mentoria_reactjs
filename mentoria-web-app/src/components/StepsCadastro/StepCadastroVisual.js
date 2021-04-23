import React from 'react';
import { ButtonApp } from '../../styles/components/Button';
import { ImagemonBoarding } from '../../styles/components/Onboarding';
import {
  ProgressBar,
  ProgressBarBlue,
  ContainerCadastro,
  ImagemCadastro,
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
        <Title corTitulo={props.colorErro || props.colorTitle}>
          {' '}
          {props.titulo}{' '}
        </Title>
        <TextoBody> {props.descricao} </TextoBody>
        <label> {props.label}</label>
        {props.img ? <ImagemCadastro src={props.img} alt={props.img} /> : ''}

        <ProgressBar displayBar={props.display} />
        <ProgressBarBlue widthBar={props.width} />
        <ButtonApp
          colorbgButton={'#1B5DFF'}
          type="submit"
          buttonBorder={'none'}
        >
          <TextButton>{props.textButton}</TextButton>
        </ButtonApp>
      </ContainerCadastro>
    </>
  );
}

export default StepCadastroVisual;
