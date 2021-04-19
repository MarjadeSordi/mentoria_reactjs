import { createStore } from 'redux';

const INITIAL_STATE = {
  usuario: ['usuario'],
  senha: ['senha'],
};

function fazerLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FAZER_LOGIN':
      return {
        ...state,
        usuario: [...state.usuario, action.logar],
        senha: [...state.senha, action.senha],
      };
    default:
      return state;
  }
}

const store = createStore(fazerLogin);

export default store;
