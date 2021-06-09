import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import {
  SideBarDiv,
  SideBarList,
  SideBarUl,
  SideBarIcon,
  SideBarDivInterna,
  SideBarText,
  SideBarPerfil,
  SideBarPerfilImg,
  SideBarPerfilScore,
  SideBarPerfilText,
  SideBarButtonX,
  SideBarHr,
  SideBarAlignButton,
} from '../../styles/components/SideBarMenu';
import { TextButton, TextoBold } from '../../styles/components/Typograph';
import { SideBarData } from './SideBarData';
import menina from '../../assets/icons/menina.png';
import Line from '../../assets/icons/Line.svg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ButtonApp } from '../../styles/components/Button';

function SideBar(props) {
  console.log(props.show);
  return (
    <SideBarDiv visible={props.show}>
      <SideBarButtonX onClick={props.exit}>
        <AiOutlineCloseCircle size={22} color={'#828282'} />
      </SideBarButtonX>
      <SideBarPerfil>
        <SideBarPerfilImg src={menina} alt="foto de perfil feminino" />
        <SideBarPerfilText>
          {' '}
          <TextoBold fsize={'14px'} colorText={'#ffffff'}>
            {' '}
            Fulana{' '}
          </TextoBold>
        </SideBarPerfilText>
      </SideBarPerfil>{' '}
      <SideBarPerfilScore src={Line} alt="score" />
      <SideBarHr />
      <SideBarUl>
        {SideBarData.map((val, key) => {
          return (
            <SideBarList key={key}>
              <Link
                to={val.link}
                style={{
                  textDecoration: 'none',
                  color: ' #828282',
                  fontSize: '14px',
                }}
              >
                {' '}
                <SideBarDivInterna>
                  <SideBarIcon>
                    {' '}
                    {val.icon} <SideBarText> {val.title} </SideBarText>
                  </SideBarIcon>
                </SideBarDivInterna>{' '}
              </Link>
            </SideBarList>
          );
        })}{' '}
      </SideBarUl>
      <SideBarAlignButton>
        <ButtonApp
          colorbgButton={'transparent'}
          buttonColor={'#ffffff'}
          buttonBorder={'1px solid #ffffff'}
          buttonSize={'80%'}
          onClick={() => auth.signOut()}
        >
          <TextButton> Sair </TextButton>
        </ButtonApp>
      </SideBarAlignButton>
    </SideBarDiv>
  );
}

export default SideBar;
