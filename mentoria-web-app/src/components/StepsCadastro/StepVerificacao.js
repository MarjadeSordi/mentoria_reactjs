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

  const ValidarInput = () => {
    if (value !== '123456') {
      setCheck('');
      setError(Feedback.inputErroCodigo);
    }
  };

  return <></>;
};
export default StepVerificacao;
