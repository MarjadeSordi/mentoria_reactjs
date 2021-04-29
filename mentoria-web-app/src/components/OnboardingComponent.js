import React, { useState } from 'react';
import OnboardingElement from './OnboardingElement';
import rafiki from '../assets/illustration/rafiki.svg';
import amico from '../assets/illustration/amico.svg';
import pana from '../assets/illustration/pana.svg';
import telaquatro from '../assets/illustration/telaquatro.svg';
import caminho from '../assets/icons/caminho.svg';
import caminhovolta from '../assets/icons/caminhovolta.svg';
import { SpanDot } from '../styles/components/Onboarding';

const OnboardingComponent = () => {
  const [slide, setSlide] = useState('1');

  if (slide === '1') {
    return (
      <OnboardingElement
        img={rafiki}
        textTitle={'Bem-vindx ao [Nome do app]!'}
        textSubtitle={
          'Explore dicas, compartilhe projetos e troque conteúdos com seus colegas de trabalho!'
        }
        icon={caminho}
        onClickAnterior={() => (window.location = '/home')}
        textAnterior="Home"
        onClick={() => setSlide('2')}
        SpanUm={<SpanDot colorbg="#1B5DFF" />}
        SpanDois={<SpanDot colorbg="#bbb" />}
        SpanTres={<SpanDot colorbg="#bbb" />}
        SpanQuatro={<SpanDot colorbg="#bbb" />}
        text="Próximo"
      />
    );
  } else if (slide === '2') {
    return (
      <OnboardingElement
        img={amico}
        textTitle={'Tenha uma equipe multidisciplinar!'}
        textSubtitle={'Receba ajuda de forma ágil de todas as áreas do hub.'}
        icon={caminho}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('1')}
        textAnterior="Anterior"
        onClick={() => setSlide('3')}
        SpanUm={<SpanDot colorbg="#bbb" />}
        SpanDois={<SpanDot colorbg="#1B5DFF" />}
        SpanTres={<SpanDot colorbg="#bbb" />}
        SpanQuatro={<SpanDot colorbg="#bbb" />}
        text="Próximo"
      />
    );
  } else if (slide === '3') {
    return (
      <OnboardingElement
        img={pana}
        textTitle={'Solucione suas dúvidas em tempo real!'}
        textSubtitle={
          'Você também pode conversar por chat com seus colegas de área!'
        }
        icon={caminho}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('2')}
        textAnterior="Anterior"
        onClick={() => setSlide('4')}
        SpanUm={<SpanDot colorbg="#bbb" />}
        SpanDois={<SpanDot colorbg="#bbb" />}
        SpanTres={<SpanDot colorbg="#1B5DFF" />}
        SpanQuatro={<SpanDot colorbg="#bbb" />}
        text="Próximo"
      />
    );
  } else if (slide === '4') {
    return (
      <OnboardingElement
        img={telaquatro}
        textTitle={'Pronto!'}
        textSubtitle={'Bora trocar conhecimento?'}
        finaliza={localStorage.setItem('isAuth', 'true')}
        iconvolta={caminhovolta}
        onClickAnterior={() => setSlide('3')}
        textAnterior="Anterior"
        button={'Começar'}
        onClick={() => (window.location = '/cadastro')}
        SpanUm={<SpanDot colorbg="#bbb" />}
        SpanDois={<SpanDot colorbg="#bbb" />}
        SpanTres={<SpanDot colorbg="#bbb" />}
        SpanQuatro={<SpanDot colorbg="#1B5DFF" />}
        text="Cadastro"
      />
    );
  }

  return <div>{OnboardingComponent()}</div>;
};

export default OnboardingComponent;
