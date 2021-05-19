import React, { useState } from 'react';
import OnboardingElement from './OnboardingElement';
import rafiki from '../assets/illustration/rafiki.svg';
import amico from '../assets/illustration/amico.svg';
import pana from '../assets/illustration/pana.svg';
import telaquatro from '../assets/illustration/telaquatro.svg';
import caminho from '../assets/icons/caminho.svg';
import caminhovolta from '../assets/icons/caminhovolta.svg';
import { SpanDot } from '../styles/components/Onboarding';
import { OnboardingTextos } from '../text/textos';

const OnboardingComponent = () => {
  const [slide, setSlide] = useState('1');

  return (
    <>
      {OnboardingTextos.map(text => {
        if (slide === '1' && text.id === 1) {
          return (
            <OnboardingElement
              img={rafiki}
              textTitle={text.titulo}
              textSubtitle={text.texto}
              icon={caminho}
              onClick={() => setSlide('2')}
              SpanUm={<SpanDot colorbg="#1B5DFF" />}
              SpanDois={<SpanDot colorbg="#bbb" />}
              SpanTres={<SpanDot colorbg="#bbb" />}
              SpanQuatro={<SpanDot colorbg="#bbb" />}
              text={text.buttonAvancar}
            />
          );
        } else if (slide === '2' && text.id === 2) {
          return (
            <OnboardingElement
              img={amico}
              textTitle={text.titulo}
              textSubtitle={text.texto}
              icon={caminho}
              iconvolta={caminhovolta}
              onClickAnterior={() => setSlide('1')}
              textAnterior={text.buttonRetornar}
              onClick={() => setSlide('3')}
              SpanUm={<SpanDot colorbg="#bbb" />}
              SpanDois={<SpanDot colorbg="#1B5DFF" />}
              SpanTres={<SpanDot colorbg="#bbb" />}
              SpanQuatro={<SpanDot colorbg="#bbb" />}
              text={text.buttonAvancar}
            />
          );
        } else if (slide === '3' && text.id === 3) {
          return (
            <OnboardingElement
              img={pana}
              textTitle={text.titulo}
              textSubtitle={text.texto}
              icon={caminho}
              iconvolta={caminhovolta}
              onClickAnterior={() => setSlide('2')}
              textAnterior={text.buttonRetornar}
              onClick={() => setSlide('4')}
              SpanUm={<SpanDot colorbg="#bbb" />}
              SpanDois={<SpanDot colorbg="#bbb" />}
              SpanTres={<SpanDot colorbg="#1B5DFF" />}
              SpanQuatro={<SpanDot colorbg="#bbb" />}
              text={text.buttonAvancar}
            />
          );
        } else if (slide === '4' && text.id === 4) {
          return (
            <OnboardingElement
              img={telaquatro}
              textTitle={text.titulo}
              textSubtitle={text.texto}
              finaliza={localStorage.setItem('isAuth', 'true')}
              iconvolta={caminhovolta}
              onClickAnterior={() => setSlide('3')}
              textAnterior={text.buttonRetornar}
              button={text.button}
              SpanUm={<SpanDot colorbg="#bbb" />}
              SpanDois={<SpanDot colorbg="#bbb" />}
              SpanTres={<SpanDot colorbg="#bbb" />}
              SpanQuatro={<SpanDot colorbg="#1B5DFF" />}
            />
          );
        }
      })}
    </>
  );
};

export default OnboardingComponent;
