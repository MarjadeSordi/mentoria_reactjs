import React, { useState, useEffect } from 'react';
import StepCadastroVisual from './StepCadastroVisual';
import InputForm from './StepInput';
import SelectLabel from './StepDropdown';
import SelectLabelDrop from './StepCadastroDropdownHub';
import { useSelector, useDispatch } from 'react-redux';
import primeiraTela from '../../assets/illustration/primeiraTela.svg';
import StepCheckTecnologias from './StepCheckTecnologias';

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

  const RegistrarNome = useSelector(state => state.nome);
  const dispach = useDispatch();

  const RegistrarEmail = useSelector(state => state.email);
  const dispachEmail = useDispatch();

  const RegistrarStartUp = useSelector(state => state.startup);
  const dispachstartUp = useDispatch();

  const RegistrarAtuacao = useSelector(state => state.atuacao);
  const dispachAtuacao = useDispatch();

  const RegistrarTecnologias = useSelector(state => state.tecnologia);
  const dispachTec = useDispatch();

  function checkName(text) {
    dispach({ type: 'REGISTRA_NOME', registrarNome: text });
  }

  function checkEmail(texto) {
    dispachEmail({ type: 'REGISTRA_EMAIL', registrarEmail: texto });
  }

  function checkStartUp(startup) {
    dispachstartUp({ type: 'REGISTRA_STARTUP', registrarStartUp: startup });
  }

  function checkAtuacao(areaAtuacao) {
    dispachAtuacao({ type: 'REGISTRA_ATUACAO', registrarAtuacao: areaAtuacao });
  }

  function checkTecnologia(tech) {
    dispachTec({ type: 'REGISTRA_TECNOLOGIA', registrarTecnologia: tech });
  }

  console.log(RegistrarNome);

  console.log(RegistrarEmail);

  console.log(RegistrarStartUp);

  console.log(RegistrarAtuacao);

  console.log(RegistrarTecnologias);

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
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="1"
                width="20"
                titulo={texto.title}
                descricao={texto.description}
                img={primeiraTela}
                label={<InputForm label={'Nome'} name={'nome'} type={'text'} />}
              />
            </form>
          );
        } else if (step === 2 && texto.id == '2') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Email = e.target.email.value;
                checkEmail(Email);
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="2"
                width="40"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <InputForm label={'Email'} name={'email'} type={'email'} />
                }
              />
            </form>
          );
        } else if (step === 3 && texto.id == '3') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const StarUp = e.target.startup.value;
                checkStartUp(StarUp);
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="3"
                width="60"
                onClick={() => setStep(3)}
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={<SelectLabelDrop name={'startup'} />}
              />
            </form>
          );
        } else if (step === 4 && texto.id == '4') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Atuacao = e.target.atuacao.value;
                checkAtuacao(Atuacao);
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="4"
                width="80"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={<SelectLabel name={'atuacao'} />}
              />
            </form>
          );
        } else if (step === 5 && texto.id == '5') {
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const tech = e.target.tecnologia.value;
                checkTecnologia.concat([tech]);
              }}
            >
              <StepCadastroVisual
                textButton="Próximo"
                numero="5"
                display="none"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <StepCheckTecnologias
                    type={'checkbox'}
                    name={'tecnologias'}
                  />
                }
              />
            </form>
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
