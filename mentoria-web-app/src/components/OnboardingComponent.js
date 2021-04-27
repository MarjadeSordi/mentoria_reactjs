import React, { useState } from 'react';
import OnboardingElement from './OnboardingElement';
import rafiki from '../assets/illustration/rafiki.svg';
import amico from '../assets/illustration/amico.svg';
import pana from '../assets/illustration/pana.svg';
import caminho from '../assets/icons/caminho.svg';
import caminhovolta from '../assets/icons/caminhovolta.svg';
import { SpanBlue, SpanDot } from '../styles/components/Onboarding';

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
        SpanUm={<SpanDot colorbg="#1B5DFF" />}
        SpanDois={<SpanDot colorbg="#bbb" />}
        SpanTres={<SpanDot colorbg="#bbb" />}
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
        SpanUm={<SpanDot colorbg="#bbb" />}
        SpanDois={<SpanDot colorbg="#1B5DFF" />}
        SpanTres={<SpanDot colorbg="#bbb" />}
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
        finaliza={localStorage.setItem('isAuth', 'true')}
        icon={caminho}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('2')}
        textAnterior="Anterior"
        onClick={() => (window.location = '/cadastro')}
        SpanUm={<SpanDot colorbg="#bbb" />}
        SpanDois={<SpanDot colorbg="#bbb" />}
        SpanTres={<SpanDot colorbg="#1B5DFF" />}
        text="Cadastro"
      />
    );
  }

  return <div>{OnboardingComponent()}</div>;
};

export default OnboardingComponent;
