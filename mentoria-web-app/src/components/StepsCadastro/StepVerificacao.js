import React, { useState } from 'react';
import { TextButton, TextoBold } from '../../styles/components/Typograph';
import InputForm from '../Input/Input';
import { Feedback } from '../../text/textos';
import { auth } from '../../firebaseConfig';
import { useSelector } from 'react-redux';
import { ButtonApp } from '../../styles/components/Button';
import { ImgLoader } from '../../styles/pages/PageLogin';
import loader from '../../assets/icons/loader.svg';

const StepVerificacao = ({ name, label }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');
  const [loading, isLoading] = useState(false);
  const email = useSelector(state => state.email);
  const senha = useSelector(state => state.senha);

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
    if (value === '123456') {
      setError('');
      setCheck(Feedback.inputCodigo);
    }
  };

  const Login = e => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then(userCredential => {
        // envia e-mail de confirmação.
        userCredential.user.sendEmailVerification();
        auth.signOut();
        alert('E-mail de confirmação enviado');
        isLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const ValidarInput = () => {
    if (value !== '123456') {
      setCheck('');
      setError(Feedback.inputErroCodigo);
    }
  };

  return (
    <>
      <label htmlFor={name}>
        {' '}
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          {label}
        </TextoBold>{' '}
      </label>
      <InputForm
        name={name}
        placeholder={'__ __ __ . __ __ __'}
        onChange={handleInput}
        onBlur={ValidarInput}
        error={error}
        check={check}
        imgcheck={check}
        imgerror={error}
      />
      <ButtonApp type="button" onClick={Login}>
        {' '}
        <TextButton>
          Enviar email de confirmação{' '}
          {loading ? (
            <ImgLoader src={loader} alt="carregando">
              {' '}
            </ImgLoader>
          ) : (
            ''
          )}{' '}
        </TextButton>{' '}
      </ButtonApp>
    </>
  );
};
export default StepVerificacao;
