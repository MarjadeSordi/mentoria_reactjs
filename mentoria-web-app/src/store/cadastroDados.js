/* eslint-disable prettier/prettier */
import { createStore } from 'redux';

const INITIAL_STATE = {
  nome: '',
  email: '',
  startup: '',
  atuacao: '',
  tecnologia: '',
  tecnologiaOutros: '',
  contatos: '',
};

function RegistraDados(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REGISTRA_NOME':
      return { ...state, nome: action.registrarNome };
    case 'REGISTRA_EMAIL':
      return { ...state, email: action.registrarEmail };
    case 'REGISTRA_STARTUP':
      return { ...state, startup: action.registrarStartUp };
    case 'REGISTRA_ATUACAO':
      return { ...state, atuacao: action.registrarAtuacao };
    case 'REGISTRA_TECNOLOGIA':
      return {
        ...state,
        tecnologia: [...state.tecnologia, action.registrarTecnologia],
        tecnologiaOutros: [
          ...state.tecnologiaOutros,
          action.registrarTecnologiaOutros,
        ],
      };
    case 'REGISTRA_CONTATOS':
      return {
        ...state,
        contatos: [...state.contatos, action.registrarContatos],
      };
    default:
      return state;
  }
}

const storeCadastro = createStore(RegistraDados);

export default storeCadastro;
