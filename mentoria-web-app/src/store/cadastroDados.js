/* eslint-disable prettier/prettier */
import { createStore } from 'redux';

const INITIAL_STATE = {
  nome: '',
  email: '',
  startup: '',
  atuacao: '',
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
    default:
      return state;
  }
}

const storeCadastro = createStore(RegistraDados);

export default storeCadastro;
