import React from 'react';
import { ButtonApp } from '../../styles/components/Button';

import {
  ProgressBar,
  ProgressBarBlue,
  ContainerCadastro,
  ImagemCadastro,
  DivInternaCadastro,
  DivTelasFinais,
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
        {props.tituloAjuste && (
          <DivTelasFinais>
            {' '}
            <>
              {' '}
              <Title corTitulo={props.colorTitle || props.colorErro}>
                {' '}
                {props.titulotelas}{' '}
              </Title>
              <TextoBody> {props.descricaotelas}</TextoBody>{' '}
            </>{' '}
          </DivTelasFinais>
        )}

        <Title corTitulo={props.colorErro || props.colorTitle}>
          {' '}
          {props.titulo}{' '}
        </Title>
        <TextoBody> {props.descricao} </TextoBody>

        <label> {props.label}</label>
        <DivInternaCadastro>
          {props.img ? (
            <ImagemCadastro
              src={props.img}
              alt={props.img}
              widthImg={props.widthImg}
              paddingImg={props.paddingImg}
            />
          ) : (
            ''
          )}
        </DivInternaCadastro>
        <ProgressBar displayBar={props.display} />
        <ProgressBarBlue widthBar={props.width} />
        {props.botaocontador ? (
          <ButtonApp
            colorbgButton={'transparent'}
            buttonColor={'#1B5DFF'}
            buttonBorder={'1px solid #1B5DFF'}
            type="button"
            buttonSize={'100%'}
            {...props.botaocontadorprops}
          >
            {' '}
            {props.botaocontadorprops.value}{' '}
          </ButtonApp>
        ) : (
          ''
        )}
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
