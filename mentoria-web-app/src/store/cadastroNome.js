import { createStore } from 'redux';

const INITIAL_STATE = {
  nome: ' ',
};

function RegistraNome(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REGISTRA_NOME':
      return { ...state, nome: action.registrar };
    default:
      return state;
  }
}

const storeNome = createStore(RegistraNome);

export default storeNome;
