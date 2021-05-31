import React from 'react';
import Perfil from '../../assets/icons/perm_identity.js';
import Heart from '../../assets/icons/heart.js';
import { SideBarSvg } from '../../styles/components/SideBarMenu';
import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlinePlusCircle,
  AiOutlineSetting,
  AiFillDatabase,
} from 'react-icons/ai';
import { FaDoorClosed } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';

export const SideBarData = [
  {
    title: 'Perfil',
    icon: <AiOutlineUser size={20} />,
    link: '/home',
  },
  {
    title: 'Postar',
    icon: <AiOutlinePlusCircle size={20} />,
    link: '/testando',
  },
  {
    title: 'Preferências',
    icon: <AiOutlineHeart size={20} />,
    link: '/testando',
  },
  {
    title: 'Todos',
    icon: <AiFillDatabase size={20} />,
    link: '/testando',
  },
  {
    title: 'Abertas',
    icon: <FaDoorOpen size={20} />,
    link: '/testando',
  },
  {
    title: 'Fechadas',
    icon: <FaDoorClosed size={20} />,
    link: '/testando',
  },
  {
    title: 'Configurações',
    icon: <AiOutlineSetting size={20} />,
    link: '/testando',
  },
];
