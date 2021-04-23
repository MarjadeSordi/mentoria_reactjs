import React, { useState, useEffect } from 'react';
import StepCadastroVisual from './StepCadastroVisual';
import InputForm from './StepInput';
import SelectLabel from './StepDropdown';
import SelectLabelDrop from './StepCadastroDropdownHub';
import { useSelector, useDispatch } from 'react-redux';
import primeiraTela from '../../assets/illustration/primeiraTela.svg';
import StepCheckTecnologias from './StepCheckTecnologias';
import StepCheckContatos from './StepCheckContatos';
import cuate from '../../assets/illustration/cuate.svg';
import telanove from '../../assets/illustration/telanove.svg';
import telaoito from '../../assets/illustration/telaoito.svg';
import { FormCadastro } from '../../styles/components/StepCadastroVisual';

const StepCadastro = () => {
  const [textos, setTextos] = useState([]);
  const [tec, setTec] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [inputContato, setInputContato] = useState({});

  const TextosParaCadastro = async () => {
    try {
      const response = await fetch('http://localhost:5000/TextosCadastro');
      const json = await response.json();
      setTextos(json);
    } catch (error) {
      console.log(error);
    }
  };

  const SetarTecnologia = async () => {
    try {
      const responseTec = await fetch('http://localhost:5000/Tecnologias');
      const jsonTec = await responseTec.json();
      setTec(jsonTec);
    } catch (error) {
      console.log(error);
    }
  };

  const SetarContatos = async () => {
    try {
      const responseCont = await fetch('http://localhost:5000/Contatos');
      const jsonContato = await responseCont.json();
      setContatos(jsonContato);
      const chaveContato = jsonContato.reduce(
        (acc, contato) => ({ [contato.label.toLowerCase()]: '', ...acc }),
        {},
      );
      setInputContato(chaveContato);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SetarTecnologia();
  }, []);

  useEffect(() => {
    SetarContatos();
  }, []);

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

  const RegistrarOutras = useSelector(state => state.tecnologiaOutros);
  const dispachTechOutros = useDispatch();

  const RegistrarContatos = useSelector(state => state.contatos);
  const dispachContatos = useDispatch();

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

  function checkTecnologiaOutros(techOutros) {
    dispachTechOutros({
      type: 'REGISTRA_TECNOLOGIA',
      registrarTecnologiaOutros: techOutros,
    });
  }

  function checkContatos(cont) {
    dispachTec({ type: 'REGISTRA_CONTATOS', registrarContatos: cont });
  }

  console.log({ inputContato });
  console.log(RegistrarNome);

  console.log(RegistrarEmail);

  console.log(RegistrarStartUp);

  console.log(RegistrarAtuacao);

  console.log(RegistrarTecnologias);

  console.log(RegistrarOutras);

  return (
    <>
      {textos.map(texto => {
        if (step === 1 && texto.id == '1') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Name = e.target.nome.value;
                checkName(Name);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="1"
                colorTitle={'#1B5DFF'}
                width="20"
                titulo={texto.title}
                descricao={texto.description}
                img={primeiraTela}
                label={<InputForm label={'Nome'} name={'nome'} type={'text'} />}
              />
            </FormCadastro>
          );
        } else if (step === 2 && texto.id == '2') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Email = e.target.email.value;
                checkEmail(Email);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="2"
                colorTitle={'#1B5DFF'}
                width="40"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <InputForm label={'Email'} name={'email'} type={'email'} />
                }
              />
            </FormCadastro>
          );
        } else if (step === 3 && texto.id == '3') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const StarUp = e.target.startup.value;
                checkStartUp(StarUp);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="3"
                colorTitle={'#1B5DFF'}
                width="60"
                onClick={() => setStep(3)}
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={<SelectLabelDrop name={'startup'} />}
              />
            </FormCadastro>
          );
        } else if (step === 4 && texto.id == '4') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                const Atuacao = e.target.atuacao.value;
                checkAtuacao(Atuacao);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="4"
                colorTitle={'#1B5DFF'}
                width="80"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={<SelectLabel name={'atuacao'} />}
              />
            </FormCadastro>
          );
        } else if (step === 5 && texto.id == '5') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                let acumulador = tec.reduce((acc, tech) => {
                  let techno = e.target[tech.label].checked;
                  if (techno) {
                    return [...acc, tech.label];
                  }

                  return acc;
                }, []);
                checkTecnologia({ tecnologias: acumulador });

                let OutrasTech = e.target.tecnologias.value;
                checkTecnologiaOutros({ tecnologias: OutrasTech });
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="5"
                colorTitle={'#1B5DFF'}
                display="none"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <StepCheckTecnologias
                    tecnologia={tec}
                    type={'checkbox'}
                    name={'tecnologias'}
                    tipo={'text'}
                    label={'Outra(s)?'}
                  />
                }
              />
            </FormCadastro>
          );
        } else if (step === 6 && texto.id == '6') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
                checkContatos(inputContato);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="6"
                colorTitle={'#1B5DFF'}
                width="99"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <StepCheckContatos
                    contato={contatos}
                    type={'checkbox'}
                    inputcontato={inputContato}
                    setinputcontato={setInputContato}
                  />
                }
              />
            </FormCadastro>
          );
        } else if (step === 7 && texto.id == '7') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              {' '}
              <StepCadastroVisual
                textButton="Avançar"
                numero="7"
                colorTitle={'#1B5DFF'}
                display="none"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
              />
            </FormCadastro>
          );
        } else if (step === 8 && texto.id == '8') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="8"
                colorTitle={'#1B5DFF'}
                display="none"
                img={telaoito}
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
              />
            </FormCadastro>
          );
        } else if (step === 9 && texto.id == '9') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                numero="9"
                colorTitle={'#1B5DFF'}
                img={telanove}
                width="99"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
              />
            </FormCadastro>
          );
        } else if (step === 10 && texto.id == '10') {
          return (
            <FormCadastro
              onSubmit={e => {
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              <StepCadastroVisual
                textButton="Avançar"
                colorErro={'#EB5757'}
                numero="10"
                display="none"
                key={texto.id}
                img={cuate}
                titulo={texto.title}
                descricao={texto.description}
              />
            </FormCadastro>
          );
        }
      })}
    </>
  );
};
export default StepCadastro;
