import React from 'react';
import Login from '../components/Login/Login';

const PagedeLogin = () => {
  return (
    <div>
      <Login
        textoPrincipal={'Que bom te ver de novo!'}
        nameemail={'email'}
        typeemail={'email'}
        labelemail={'E-mail'}
        namesenha={'senha'}
        labelsenha={'Senha'}
      />{' '}
    </div>
  );
};

export default PagedeLogin;
