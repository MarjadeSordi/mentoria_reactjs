import React from 'react';
import {
  DivInternaCadastro,
  DivTelasFinais,
  ImagemCadastro,
} from '../../styles/components/StepCadastroVisual';
import {
  TextButton,
  TextoBody,
  Title,
} from '../../styles/components/Typograph';
import cuate from '../../assets/illustration/cuate.svg';
import Buttons from '../Buttons/Buttons';
import { ButtonApp } from '../../styles/components/Button';

const StepErro = () => {
  return (
    <div>
      <DivTelasFinais>
        <Title corTitulo={'#EB5757'}> Ops... parece que algo deu errado </Title>
        <TextoBody>
          {' '}
          Não foi possível realizar seu cadastro. Tente inserir seus dados
          novamente.{' '}
        </TextoBody>{' '}
      </DivTelasFinais>
      <DivInternaCadastro>
        <ImagemCadastro src={cuate} alt="imagem de erro" widthImg={70} />
        <ButtonApp
          colorbgButton={'transparent'}
          buttonColor={'#1B5DFF'}
          buttonBorder={'1px solid #1B5DFF'}
          type="button"
          buttonSize={'100%'}
          onClick={() => (window.location = '/cadastro')}
        >
          {' '}
          <TextButton> Voltar para o início</TextButton>
        </ButtonApp>
        <ButtonApp
          colorbgButton={'#1B5DFF'}
          type="button"
          buttonBorder={'none'}
          buttonSize={'100%'}
          buttonColor={'#fff'}
        >
          {' '}
          <TextButton> Tentar novamente </TextButton>{' '}
        </ButtonApp>
      </DivInternaCadastro>
    </div>
  );
};

export default StepErro;
