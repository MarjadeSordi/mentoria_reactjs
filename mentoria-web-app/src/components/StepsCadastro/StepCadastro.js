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
        width="20"
      />
    );
  } else if (step === '2') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('3')}
        textButton="Próximo"
        numero="2"
        width="40"
      />
    );
  } else if (step === '3') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('4')}
        textButton="Próximo"
        numero="3"
        width="60"
      />
    );
  } else if (step === '4') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('5')}
        textButton="Próximo"
        numero="4"
        width="80"
      />
    );
  } else if (step === '5') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('6')}
        textButton="Próximo"
        numero="5"
        display="none"
      />
    );
  } else if (step === '6') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('7')}
        textButton="Próximo"
        numero="6"
        width="100"
      />
    );
  } else if (step === '7') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('8')}
        textButton="Próximo"
        numero="7"
        display="none"
      />
    );
  } else if (step === '8') {
    return (
      <StepCadastroVisual
        onClick={() => setStep('9')}
        textButton="Próximo"
        numero="8"
        display="none"
      />
    );
  }
};
export default StepCadastro;
