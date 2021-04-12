import React, { useState } from 'react';
import OnboardingElement from './OnboardingElement';
import rafiki from '../assets/illustration/rafiki.svg';
import amico from '../assets/illustration/amico.svg';
import pana from '../assets/illustration/pana.svg';
import caminho from '../assets/icons/caminho.svg';
import caminhovolta from '../assets/icons/caminhovolta.svg';

const OnboardingComponent = () => {
  const [slide, setSlide] = useState('1');

  if (slide === '1') {
    return (
      <OnboardingElement
        img={rafiki}
        textTitle={'H1 - Headline'}
        textSubtitle={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        icon={caminho}
        onClickAnterior={() => (window.location = '/home')}
        textAnterior="Home"
        onClick={() => setSlide('2')}
        text="Próximo"
      />
    );
  } else if (slide === '2') {
    return (
      <OnboardingElement
        img={amico}
        textTitle={'H1 - Headline'}
        textSubtitle={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        icon={caminho}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('1')}
        textAnterior="Anterior"
        onClick={() => setSlide('3')}
        text="Próximo"
      />
    );
  } else if (slide === '3') {
    return (
      <OnboardingElement
        img={pana}
        textTitle={'H1 - Headline'}
        textSubtitle={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
        //finaliza={localStorage.setItem('isAuth', 'true')}
        icon={caminho}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('2')}
        textAnterior="Anterior"
        onClick={() => (window.location = '/login')}
        text="Login"
      />
    );
  }

  return <div>{OnboardingComponent()}</div>;
};

export default OnboardingComponent;
