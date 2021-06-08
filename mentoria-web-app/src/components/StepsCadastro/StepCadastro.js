import React, { useState, useEffect } from 'react';
import StepCadastroVisual from './StepCadastroVisual';
import InputForm from './StepInput';
import { useSelector, useDispatch } from 'react-redux';
import primeiraTela from '../../assets/illustration/primeiraTela.svg';
import StepCheckTecnologias from './StepCheckTecnologias';
import StepCheckContatos from './StepCheckContatos';
import telanove from '../../assets/illustration/telanove.svg';
import telaoito from '../../assets/illustration/telaoito.svg';
import { FormCadastro } from '../../styles/components/StepCadastroVisual';
import StepCadastroSenha from './StepCadastroSenha';
import StepVerificacao from './StepVerificacao';
import StepCadastroEmail from './StepCadastroEmail';
import StepDropdown from './StepDropdown';
import StepDropdownHub from './StepCadastroDropdownHub';
import { Button } from '../../text/textos';
import { Label } from '../../text/textos';
import StepErro from './StepErro';
import { auth } from '../../firebaseConfig';
import firebase from 'firebase';
import { apiLink } from '../../config';

const StepCadastro = () => {
  const [textos, setTextos] = useState([]);
  const [tec, setTec] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [inputContato, setInputContato] = useState({});
  const [botao, setBotao] = useState(true);
  const [contador, setContador] = useState(60);
  const [intervalo, setIntervalo] = useState();

  const TextosParaCadastro = async () => {
    try {
      const response = await fetch(`${apiLink}signup-texts.json?alt=media`);
      const json = await response.json();
      setTextos(json);
    } catch (error) {
      <StepErro />;
      console.log(error);
    }
  };

  const SetarTecnologia = async () => {
    try {
      const responseTec = await fetch(`${apiLink}skills.json?alt=media`);
      const jsonTec = await responseTec.json();
      setTec(jsonTec);
    } catch (error) {
      <StepErro />;
      console.log(error);
    }
  };

  const SetarContatos = async () => {
    try {
      const responseCont = await fetch(`${apiLink}contacts.json?alt=media`);
      const jsonContato = await responseCont.json();
      setContatos(jsonContato);
      const chaveContato = jsonContato.reduce(
        (acc, contato) => ({ [contato.label.toLowerCase()]: '', ...acc }),
        {},
      );
      setInputContato(chaveContato);
    } catch (error) {
      <StepErro />;
      console.log(error);
    }
  };

  const contadorOnClick = () => {
    const time = setInterval(() => {
      setContador(cont => cont - 1);
    }, 1000);
    setIntervalo(time);
  };

  useEffect(() => {
    if (contador < 1) {
      clearInterval(intervalo);
      setContador(60);
    }
  }, [contador]);

  useEffect(() => {
    SetarTecnologia();
  }, []);

  useEffect(() => {
    SetarContatos();
  }, []);

  useEffect(() => {
    TextosParaCadastro();
    return () => {
      clearInterval(intervalo);
    };
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

  const RegistrarSenha = useSelector(state => state.senha);
  const dispachSenha = useDispatch();

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

  function checkSenhas(sen) {
    dispachSenha({ type: 'REGISTRA_SENHA', registrarSenha: sen });
  }

  const Login = () => {
    auth
      .createUserWithEmailAndPassword(RegistrarEmail, RegistrarSenha)
      .then(userCredential => {
        userCredential.user.sendEmailVerification();
        auth.signOut();
        alert('E-mail de confirmação enviado');
      })
      .catch(err => {
        console.log(alert(err));
      });
  };

  const [verificado, setVerificado] = useState(false);

  const verificaAutenticacao = () => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');
      setVerificado(true);
      if (!email) {
        email = alert('Por favor cadastre um e-mail correto para cadastro');
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(result => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch(error => {});
    }
  };

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
                setBotao(true);
              }}
              onChange={e => {
                const ValidarBotao = e.target.value;
                console.log(ValidarBotao);
                if (!ValidarBotao) return setBotao(true);
                else return setBotao(false);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="1"
                colorTitle={'#1B5DFF'}
                width="12"
                titulo={texto.title}
                descricao={texto.description}
                img={primeiraTela}
                botao={botao}
                label={
                  <InputForm
                    label={Label.labelnome}
                    name={'nome'}
                    type={'text'}
                  />
                }
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
              onChange={e => {
                const regex =
                  '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';
                const ValidarBotao = new RegExp(regex).test(e.target.value);
                if (!ValidarBotao) return setBotao(true);
                else return setBotao(false);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="2"
                colorTitle={'#1B5DFF'}
                width="24"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                botao={botao}
                label={
                  <StepCadastroEmail
                    label={Label.labelemail}
                    name={'email'}
                    type={'email'}
                  />
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
                textButton={Button.buttonAvancar}
                numero="3"
                colorTitle={'#1B5DFF'}
                width="36"
                onClick={() => setStep(3)}
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <StepDropdown name={'startup'} label={Label.labelStart} />
                }
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
                setBotao(true);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="4"
                colorTitle={'#1B5DFF'}
                width="48"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                label={
                  <StepDropdownHub name={'atuacao'} label={Label.labelArea} />
                }
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
                setBotao(true);
              }}
              onChange={e => {
                const ValidarBotao = e.target.value || e.target.checked;
                console.log(ValidarBotao);
                if (!ValidarBotao) return setBotao(true);
                else return setBotao(false);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="5"
                colorTitle={'#1B5DFF'}
                width="54"
                display="none"
                key={texto.id}
                titulo={texto.title}
                botao={botao}
                descricao={texto.description}
                label={
                  <StepCheckTecnologias
                    tecnologia={tec}
                    type={'checkbox'}
                    name={'tecnologias'}
                    tipo={'text'}
                    label={Label.labelOutros}
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
                setBotao(true);
              }}
              onChange={e => {
                const ValidarBotao = inputContato;
                if (!ValidarBotao) return setBotao(true);
                else return setBotao(false);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="6"
                colorTitle={'#1B5DFF'}
                width="66"
                key={texto.id}
                titulo={texto.title}
                descricao={texto.description}
                botao={botao}
                idSenha={'idsenha'}
                label={
                  <StepCheckContatos
                    contato={contatos}
                    inputcontato={inputContato}
                    setinputcontato={setInputContato}
                    name={'contatos'}
                    label={Label.labelOutros}
                    tipo={'text'}
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
                const confirmaSenha = e.target.confirmPassword.value;
                checkSenhas(confirmaSenha);
                Login();
                verificaAutenticacao();
                setBotao(true);
              }}
              onChange={e => {
                const regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z!$*&@#]{8,}$/;
                const ValidarBotao = new RegExp(regex).test(e.target.value);
                if (!ValidarBotao) return setBotao(true);
                else return setBotao(false);
              }}
            >
              {' '}
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="7"
                colorTitle={'#1B5DFF'}
                width="78"
                display="none"
                key={texto.id}
                titulo={texto.title}
                botao={botao}
                descricao={texto.description}
                label={
                  <StepCadastroSenha
                    type={'password'}
                    name={'password'}
                    nameConfirma={'confirmPassword'}
                    label={Label.labelSenha}
                    labelConfirma={Label.labelConfirmaSenha}
                  />
                }
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
              onChange={e => {
                if (verificado) return setBotao(true);
                else return setBotao(false);
              }}
            >
              <StepCadastroVisual
                textButton={Button.buttonAvancar}
                numero="8"
                colorTitle={'#1B5DFF'}
                display="none"
                img={telaoito}
                key={texto.id}
                botao={botao}
                titulo={texto.title}
                descricao={
                  'Um e-mail de valiação deve ter caido na sua caixa de entrada agora mesma. Clique no link e valide seus dados para avançar'
                }
                label={
                  <StepVerificacao
                    name={'verificacao'}
                    label={Label.labelCodigo}
                  />
                }
                botaocontador={true}
                botaocontadorprops={{
                  value: `${Button.buttonReenvia} ${
                    contador < 60 ? contador : ''
                  }`,
                  onClick: contadorOnClick,
                  disabled: contador < 60,
                }}
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
                textButton={Button.buttonAvancar}
                numero="9"
                width="92"
                colorTitle={'#1B5DFF'}
                img={telanove}
                key={texto.id}
                tituloAjuste={'tituloAjuste'}
                titulotelas={texto.title}
                descricaotelas={texto.description}
                widthImg={'100'}
                paddingImg={'20'}
              />
            </FormCadastro>
          );
        } else {
          <StepErro />;
        }
      })}
    </>
  );
};
export default StepCadastro;
