import React, { useState } from 'react';
import InputForm from '../Input/Input';
import { MsgInputCheck, MsgInputError } from '../../styles/components/Input';
import { TextoBold } from '../../styles/components/Typograph';

const SetInput = ({ label, name, type }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const regex =
    '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

  const handleInput = e => {
    const value = e.target.value;
    const Validaremail = new RegExp(regex).test(value);
    setValue(value);
    if (Validaremail) {
      setCheck('Pode prosseguir');
      setError('');
    }
  };

  const ValidarInput = () => {
    const Validaremail = new RegExp(regex).test(value);
    if (!Validaremail) {
      setError('Digite um e-mail válido');
      setCheck('');
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
