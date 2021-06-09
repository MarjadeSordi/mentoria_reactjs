import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import {
  ButtonContatos,
  ButtonX,
  DivInternaModal,
  DivModal,
  ListaContatos,
} from '../../styles/components/ModalContats';
import { TextButton, TextoBold } from '../../styles/components/Typograph';
import { apiLink } from '../../config';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { SiMicrosoftteams } from 'react-icons/si';
import { SiTelegram } from 'react-icons/si';
import { SiDiscord } from 'react-icons/si';
import { LinhaHr } from '../../styles/components/CardCompleted';

const ModalContats = props => {
  const [contatos, setContatos] = useState([]);
  const whatsApp = 51980587892;
  const linkwhatsApp = `https://api.whatsapp.com/send?phone=55${whatsApp}&text=Texto`;
  const linkTeams = 'https://teams.microsoft.com/';
  const telegram = '@Marja';
  const linkTelegram = `https://t.me/${telegram}`;
  const linkDiscord = 'https://discord.com/';

  const SetarContatos = async () => {
    try {
      const responseCont = await fetch(`${apiLink}contacts.json?alt=media`);
      const jsonContato = await responseCont.json();
      setContatos(jsonContato);
    } catch (error) {
      console.log(error);
    }
  };

  function Linkpara() {
    window.location.href = linkwhatsApp;
  }

  useEffect(() => {
    SetarContatos();
  }, []);

  return (
    <DivModal visible={props.show}>
      <ButtonX onClick={props.exit}>
        {' '}
        <AiOutlineCloseCircle />{' '}
      </ButtonX>
      <DivInternaModal>
        <TextoBold fsize={'20px'}>
          {' '}
          {props.name} | {props.startup}{' '}
        </TextoBold>{' '}
        <LinhaHr bColor={' #6225cc'} />
        {contatos.map(item => (
          <ListaContatos key={item.id}>
            {' '}
            {item.label}{' '}
            {item.label === 'Whatsapp' ? (
              <ButtonContatos tipe="button" onClick={Linkpara}>
                {' '}
                <AiOutlineWhatsApp size={20} />
              </ButtonContatos>
            ) : (
              ''
            )}
            {item.label === 'Teams' ? (
              <ButtonContatos tipe="button">
                {' '}
                <SiMicrosoftteams size={20} />
              </ButtonContatos>
            ) : (
              ''
            )}
            {item.label === 'Telegram' ? (
              <ButtonContatos>
                {' '}
                <SiTelegram size={20} />{' '}
              </ButtonContatos>
            ) : (
              ''
            )}
            {item.label === 'Discord' ? (
              <ButtonContatos>
                {' '}
                <SiDiscord size={20} />{' '}
              </ButtonContatos>
            ) : (
              ''
            )}
          </ListaContatos>
        ))}{' '}
      </DivInternaModal>
    </DivModal>
  );
};

export default ModalContats;
