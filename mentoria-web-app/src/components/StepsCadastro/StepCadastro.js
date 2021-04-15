import React, { useState, useEffect } from 'react';
import StepCadastroVisual from './StepCadastroVisual';
import InputForm from './StepInput';
import { useSelector, useDispatch } from 'react-redux';
import primeira_tela from '../../assets/illustration/primeira_tela.svg';

const StepCadastro = () => {
  const [textos, setTextos] = useState([]);

  const TextosParaCadastro = async () => {
    try {
      const response = await fetch('http://localhost:5000/TextosCadastro');
      const json = await response.json();
      setTextos(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    TextosParaCadastro();
  }, []);

  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(true);
  console.log(disabled);

  const RegistrarNome = useSelector(state => state.nome);
  const dispach = useDispatch();
  const RegistrarEmail = useSelector(state => state.email);
  const dispachEmail = useDispatch();

  function checkName(text) {
    dispach({ type: 'REGISTRA_NOME', registrarNome: text });
  }

  function checkEmail(texto) {
    dispachEmail({ type: 'REGISTRA_EMAIL', registrarEmail: texto });
  }

  console.log(RegistrarNome);

  console.log(RegistrarEmail);

  return (
    <>
      {textos.map(texto => {
        if (step === 1 && texto.id == '1') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Name = e.target.nome.value;
                checkName(Name);
                if (Name) {
                  return setDisabled(false);
                }
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="1"
                width="20"
                titulo={texto.title}
                descricao={texto.description}
                img={primeira_tela}
                label={<InputForm label={'Nome'} name={'nome'} />}
              />
            </form>
          );
        } else if (step === 2 && texto.id == '2') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                checkEmail(e.target.email.value);
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="2"
                width="40"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={<InputForm label={'email'} name={'email'} />}
              />
            </form>
          );
        } else if (step === 3 && texto.id == '3') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="3"
              width="60"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        } else if (step === 4 && texto.id == '4') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="4"
              width="80"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        } else if (step === 5 && texto.id == '5') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="5"
              display="none"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        } else if (step === 6 && texto.id == '6') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="6"
              width="99"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        } else if (step === 7 && texto.id == '7') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="7"
              display="none"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        } else if (step === 8 && texto.id == '8') {
          return (
            <StepCadastroVisual
              textButton="Próximo"
              numero="8"
              display="none"
              key={texto.id}
              titulo={texto.title}
              descricao={texto.description}
            />
          );
        }
      })}
    </>
  );
};
export default StepCadastro;
