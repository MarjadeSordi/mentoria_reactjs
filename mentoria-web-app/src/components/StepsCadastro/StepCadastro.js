import React, { useState } from 'react';
import StepCadastroVisual from './StepCadastroVisual';

const StepCadastro = () => {
  const [step, setStep] = useState('1');

  if (step === '1') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('2')}
        textButton="Próximo"
        numero="1"
      />
    );
  } else if (step === '2') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('3')}
        textButton="Próximo"
        numero="2"
      />
    );
  } else if (step === '3') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('4')}
        textButton="Próximo"
        numero="3"
      />
    );
  } else if (step === '4') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('5')}
        textButton="Próximo"
        numero="4"
      />
    );
  } else if (step === '5') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('6')}
        textButton="Próximo"
        numero="5"
      />
    );
  } else if (step === '6') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('7')}
        textButton="Próximo"
        numero="6"
      />
    );
  } else if (step === '7') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('8')}
        textButton="Próximo"
        numero="7"
      />
    );
  } else if (step === '8') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('9')}
        textButton="Próximo"
        numero="8"
      />
    );
  }
};
export default StepCadastro;
