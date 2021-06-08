import React, { useState } from 'react';
import {
  DivCapsulaCard,
  DivDescription,
  DivTabela,
  LinhaHr,
  DivSolution,
  DivDoor,
} from '../../styles/components/CardCompleted';
import {
  TextButton,
  TextoBody,
  TextoBold,
} from '../../styles/components/Typograph';
import { FaDoorClosed } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import { ButtonApp } from '../../styles/components/Button';
import ModalContats from './ModalContats';
import { ButtonX } from '../../styles/components/ModalContats';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const CardCompleted = props => {
  const [showModal, setShowModal] = useState(false);

  const show = () => {
    setShowModal(true);
  };

  const exit = () => {
    setShowModal(false);
  };

  return (
    <DivCapsulaCard visible={props.show}>
      <ButtonX type="button" onClick={props.exit}>
        {' '}
        <AiOutlineCloseCircle />{' '}
      </ButtonX>
      <ModalContats
        show={showModal}
        name={props.creator}
        startup={props.startup}
        exit={exit}
      />
      <TextoBold fontSize={'16px'}>
        {props.title}{' '}
        <DivDoor>
          {props.type === 'opened' ? (
            <FaDoorOpen size={28} color="#1B5DFF" />
          ) : (
            <FaDoorClosed size={28} color="#47D163" />
          )}{' '}
        </DivDoor>
      </TextoBold>{' '}
      <DivTabela>
        <td>
          {' '}
          <TextoBody fsize={'12px'}>
            <tr> Autor: {props.creator}</tr>
            <tr> Startup: {props.startup}</tr>
            <tr> Área: {props.area} </tr>
            <tr> Tecnologia: {props.technology}</tr>
          </TextoBody>{' '}
        </td>
        <td>
          {' '}
          <TextoBody fsize={'12px'}>
            <tr> Data: {props.creationDate}</tr>
            <tr> Encerramento: {props.endDate}</tr>
            <tr>
              {' '}
              <ButtonApp
                type="button"
                colorbgButton={'#6225CC'}
                buttonSize={'100%'}
                buttonColor={' #ffffff'}
                buttonBorder={'none'}
                onClick={show}
              >
                {' '}
                <TextButton> CONTATOS </TextButton>
              </ButtonApp>
            </tr>
          </TextoBody>{' '}
        </td>{' '}
      </DivTabela>
      {props.type === 'opened' ? (
        <LinhaHr bColor={'#1B5DFF'} />
      ) : (
        <LinhaHr bColor={'#47D163'} />
      )}
      <DivDescription>
        <TextoBold fsize={'16px'}> Descrição: </TextoBold>
        <TextoBody>{props.description} </TextoBody>
      </DivDescription>
      {props.type === 'opened' ? (
        <LinhaHr bColor={'#1B5DFF'} />
      ) : (
        <LinhaHr bColor={'#47D163'} />
      )}
      <DivSolution>
        <TextoBold fsize={'16px'}> Solução: </TextoBold>
        <TextoBody fsize={'12px'}>{props.solutioncreator} </TextoBody>
        <TextoBody>{props.solutiondescription}</TextoBody>
      </DivSolution>
      {props.type === 'opened' ? (
        <LinhaHr bColor={'#1B5DFF'} />
      ) : (
        <LinhaHr bColor={'#47D163'} />
      )}
      <DivSolution>
        <TextoBold fsize={'16px'}> Contribuidores: </TextoBold>
        <TextoBody fsize={'12px'}>{props.contributionscreator} </TextoBody>
      </DivSolution>
    </DivCapsulaCard>
  );
};

export default CardCompleted;
