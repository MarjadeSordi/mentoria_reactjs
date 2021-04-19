import React, { useState } from 'react';
import InputForm from '../Input/Input';
import {
  ImagemCheck,
  ImagemError,
  MsgInputCheck,
  MsgInputError,
} from '../../styles/components/input';
import correct from '../../assets/icons/correct.svg';
import Vector from '../../assets/icons/Vector.svg';

const SetInput = ({ label, name, type }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const handleInput = e => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const ValidarInput = () => {
    if (!value) {
      setError('Não pode deixar campos em branco');
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
              <ImagemError src={Vector} />
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
              <ImagemCheck src={correct} />
            </>
          ) : (
            ''
          )
        }
        required
      />
    </>
  );
};

export default SetInput;
