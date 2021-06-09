import React, { useState, useEffect } from 'react';
import InputForm from '../components/Input/Input';
import { ButtonApp } from '../styles/components/Button';
import {
  CheckCapsula,
  CheckLabel,
  CheckTag,
} from '../styles/components/CheckTag';
import {
  TextButton,
  TextoBody,
  TextoBold,
} from '../styles/components/Typograph';
import { apiLink } from '../config';
import { SelectLabelDrop } from '../styles/components/Input';
import {
  ButtonBack,
  DivCapsulaPergunta,
  DivDescricao,
  DivHeaderPost,
  DivshowPergunta,
  InputText,
  LabelPergunta,
  PortaSpam,
  TagPerguntas,
} from '../styles/pages/PagePergunta';
import { FaDoorOpen } from 'react-icons/fa';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useHistory } from 'react-router';

const PagePergunta = () => {
  const [startUp, setStartUp] = useState([]);
  const [tec, setTec] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const SetarStarUp = async () => {
    try {
      const responseStartUp = await fetch(`${apiLink}companies.json?alt=media`);
      const jsonStartUp = await responseStartUp.json();
      setStartUp(jsonStartUp);
    } catch (error) {
      console.log(error);
    }
  };

  const SetarTecnologia = async () => {
    try {
      const responseTec = await fetch(`${apiLink}skills.json?alt=media`);
      const jsonTec = await responseTec.json();
      setTec(jsonTec);
    } catch (error) {
      console.log(error);
    }
  };

  const textoPergunta = e => {
    e.preventDefault();
    setTitulo(e.target.value);
  };

  const descricaoPergunta = e => {
    e.preventDefault();
    setDescricao(e.target.value);
  };

  const redirect = useHistory();

  const voltar = () => {
    redirect.push('/home');
  };

  console.log(titulo);

  useEffect(() => {
    SetarStarUp();
    SetarTecnologia();
  }, []);

  return (
    <DivCapsulaPergunta>
      <DivHeaderPost>
        <ButtonBack onClick={voltar}>
          {' '}
          <IoChevronBackSharp size={20} />{' '}
        </ButtonBack>
        <PortaSpam>
          {' '}
          <FaDoorOpen size={20} color="#1B5DFF" />{' '}
        </PortaSpam>
      </DivHeaderPost>
      <DivshowPergunta>
        <TextoBold fsize={'13px'}>{titulo}</TextoBold>{' '}
        <DivDescricao>
          <TextoBody>{descricao} </TextoBody>
        </DivDescricao>
      </DivshowPergunta>{' '}
      <LabelPergunta htmlFor="titulo">
        {' '}
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          Título{' '}
        </TextoBold>{' '}
      </LabelPergunta>
      <InputForm type="text" onChange={textoPergunta} />
      <LabelPergunta htmlFor="descricao">
        {' '}
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          Descrição{' '}
        </TextoBold>{' '}
      </LabelPergunta>
      <InputText rows={6} onChange={descricaoPergunta} />
      <LabelPergunta htmlFor="area">
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          Área{' '}
        </TextoBold>
      </LabelPergunta>
      <SelectLabelDrop id="area" onChange={e => e.target.value}>
        {startUp.map(startup => (
          <option key={startup.idvalue} name="area" value={startup.label}>
            {startup.label}
          </option>
        ))}
      </SelectLabelDrop>
      <TagPerguntas>
        {tec.map(tecnologia => (
          <>
            <CheckTag type="checkbox" />{' '}
            <CheckLabel
              labelWidth={'30%'}
              labelHeight={'30%'}
              labelRadius={'30px'}
              labelFsize={'14px'}
              labelPtop={'2%'}
              labelMargin={'5px'}
            >
              {tecnologia.label}
            </CheckLabel>
          </>
        ))}{' '}
      </TagPerguntas>
      <ButtonApp
        colorbgButton={'#1B5DFF'}
        buttonBorder={'none'}
        buttonColor={'#ffffff'}
      >
        {' '}
        <TextButton> Enviar Pergunta </TextButton>{' '}
      </ButtonApp>
    </DivCapsulaPergunta>
  );
};

export default PagePergunta;
