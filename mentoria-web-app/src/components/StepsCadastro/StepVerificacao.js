import React, { useState } from 'react';
import { TextoBold } from '../../styles/components/Typograph';
import InputForm from '../Input/Input';

const StepVerificacao = ({ name, label }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
    if (value === '123456') {
      setError('');
      setCheck('Código verificado com sucesso');
    }
  };

  const ValidarInput = () => {
    if (value !== '123456') {
      setCheck('');
      setError('Código inválido');
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
    </>
  );
};
export default StepVerificacao;
