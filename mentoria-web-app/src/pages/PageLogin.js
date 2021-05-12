import React from 'react';
import Login from '../components/Login/Login';
import { BoasVindas, Label } from '../text/textos';

const PagedeLogin = () => {
  return (
    <div>
      <Login
        textoPrincipal={BoasVindas.saudacao}
        nameemail={'email'}
        typeemail={'email'}
        labelemail={Label.labelemail}
        namesenha={'senha'}
        labelsenha={Label.labelSenha}
      />{' '}
    </div>
  );
};

export default PagedeLogin;
