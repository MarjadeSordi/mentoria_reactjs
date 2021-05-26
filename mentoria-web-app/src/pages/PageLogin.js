import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { BoasVindas, Label } from '../text/textos';
import firebase from '../firebaseConfig';

const PagedeLogin = () => {
  useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission().then(() => {
      msg.getToken().then(data => {
        console.warn('token usuário', data);
      });
    });
  });

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
