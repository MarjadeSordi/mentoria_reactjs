import React, { useState } from 'react';
import InputForm from '../Input/Input';
import { MsgInputCheck, MsgInputError } from '../../styles/components/Input';

const SetInput = ({ label, name, type }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
  };

  const ValidarInput = () => {
    if (!value) {
      setError('Não pode deixar esse campo em branco');
      setCheck('');
    } else if (value) {
      setCheck('Pode prosseguir');
      setError('');
    }
  };

  return (
    <>
      <label htmlFor={name}> {label} </label>

      <InputForm
        required
        imgerror={error}
        imgcheck={check}
        value={value}
        name={name}
        type={type}
        onChange={handleInput}
        onBlur={ValidarInput}
        error={
          error ? (
            <>
              {' '}
              <MsgInputError>
                {' '}
                <p> {error} </p>
              </MsgInputError>{' '}
            </>
          ) : (
            ''
          )
        }
        check={
          check ? (
            <>
              {' '}
              <MsgInputCheck> {check}</MsgInputCheck>{' '}
            </>
          ) : (
            ''
          )
        }
      />
    </>
  );
};

export default SetInput;
