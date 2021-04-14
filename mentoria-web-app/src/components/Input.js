import {
  StyledForm,
  StyledFormDiv,
  StyledInput,
  StyledInputforCheck,
  StyledInputforError,
  MsgInputError,
  MsgInputCheck,
  ImagemCheck,
  ImagemError,
} from '../styles/components/input';
import { useState } from 'react';
import correct from '../assets/icons/correct.svg';
import Vector from '../assets/icons/Vector.svg';

const InicialState = {
  field: '',
  error: '',
  check: '',
  disabled: '',
};

const InputForm = () => {
  const [state, setState] = useState(InicialState);
  const [error, setError] = useState('');
  const [check, setCheck] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setState(prev => ({ ...prev, [inputName]: value }));
  };

  const ValidarInput = () => {
    if (state.error === '') {
      setError('Não é permitido campos vazios');
    }
  };

  const ChecarInput = () => {
    if (state.check.length > 1) {
      setCheck('Pode prosseguir');
    }
  };

  return (
    <>
      <StyledFormDiv>
        <StyledForm onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <StyledInput
            type="text"
            name="field"
            value={state.field}
            onChange={handleInput}
          />
          <label htmlFor="error"></label>

          <StyledInputforError
            type="text"
            name="error"
            value={state.error}
            onChange={handleInput}
            onFocus={ValidarInput}
            borderColor={state.error === '' ? 'none' : '3px solid #EB5757'}
          />
          {error && (
            <>
              {' '}
              <MsgInputError> {error} </MsgInputError>{' '}
              <ImagemError src={Vector} />{' '}
            </>
          )}

          <label htmlFor="check"></label>
          <StyledInputforCheck
            type="text"
            name="check"
            value={state.check}
            onChange={handleInput}
            onFocus={ChecarInput}
            borderColor={state.check === '' ? 'none' : '3px solid #27AE60'}
          />

          {check && (
            <>
              {' '}
              <MsgInputCheck>
                {' '}
                <p> {check} </p>{' '}
              </MsgInputCheck>{' '}
              <ImagemCheck src={correct} />{' '}
            </>
          )}

          <label htmlFor="disable"></label>

          <StyledInput
            type="disabled"
            name="disabled"
            value={state.disabled}
            onChange={handleInput}
          />
        </StyledForm>
      </StyledFormDiv>
    </>
  );
};

export default InputForm;
