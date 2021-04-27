import React from 'react';
import { ButtonApp } from '../../styles/components/Button';

import {
  ProgressBar,
  ProgressBarBlue,
  ContainerCadastro,
  ImagemCadastro,
  DivInternaCadastro,
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
        <DivInternaCadastro>
          {props.img ? <ImagemCadastro src={props.img} alt={props.img} /> : ''}
        </DivInternaCadastro>
        <ProgressBar displayBar={props.display} />
        <ProgressBarBlue widthBar={props.width} />
        <ButtonApp
          colorbgButton={props.botao ? '#D3D3D3' : '#1B5DFF'}
          type="submit"
          buttonBorder={'none'}
          buttonSize={'100%'}
          buttonColor={'#fff'}
          disabled={props.botao}
        >
          <TextButton>{props.textButton}</TextButton>
        </ButtonApp>
      </ContainerCadastro>
    </>
  );
}

export default StepCadastroVisual;
