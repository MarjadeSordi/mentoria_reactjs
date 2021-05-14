import React, { useState } from 'react';
import InputForm from '../Input/Input';
import { MsgInputCheck, MsgInputError } from '../../styles/components/Input';
import { TextoBody, TextoBold } from '../../styles/components/Typograph';
import { Feedback } from '../../text/textos';

const SetInput = ({ label, name, type }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
    if (value) {
      setCheck(Feedback.inputOk);
      setError('');
    }
  };

  const ValidarInput = () => {
    if (!value) {
      setError(Feedback.inputVazio);
      setCheck('');
    }
  };

  return (
    <>
      <label htmlFor={name}>
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          {label}{' '}
        </TextoBold>
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
