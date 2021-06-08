import React from 'react';
import { DivCapsulaCard } from '../../styles/components/CardCompleted';

const CardTest = props => {
  return <DivCapsulaCard visible={props.show}>{props.title}</DivCapsulaCard>;
};

export default CardTest;
