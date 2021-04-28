import React, { useState } from 'react';
import usePassword from '../../hooks/usePassword';
import InputForm from '../Input/Input';
import {
  CapsulaPassword,
  PasswordToogle,
  PasswordToogleConfirmado,
} from '../../styles/components/Password';
import { MsgInputCheck, MsgInputError } from '../../styles/components/Input';

const StepCadastroSenha = ({ label, name, nameConfirma, labelConfirma }) => {
  const [passwordType, iconPassword] = usePassword();
  const [valueSenha, setValueSenha] = useState('');
  const [confirmValue, setConfirmValue] = useState('');
  const [error, setError] = useState('');
  const [errorconfirma, setErrorConfirma] = useState('');
  const [checkConfirma, setcheckConfirma] = useState('');

  const [check, setCheck] = useState();

  const regex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z!$*&@#]{8,}$/;

  const handleInput = e => {
    setValueSenha(e.target.value);
  };

  const handleConfirm = e => {
    setConfirmValue(e.target.value);
  };

  return (
    <>
      <CapsulaPassword>
        <label htmlFor={name}>{label}</label>
        <InputForm
          required
          name={name}
          type={passwordType}
          onChange={handleInput}
          id="senhacadastro"
          onBlur={e => {
            if (e.target.value) {
              const validar = new RegExp(regex).test(e.target.value);
              if (validar) {
                setCheck('Perfeito!');
                setError('');
              } else {
                setError('Sua senha não atingiu os critérios de segurança.');
                setCheck('');
              }
            }
          }}
          value={valueSenha}
          show={iconPassword}
          error={error}
          check={check}
        />

        <label htmlFor={nameConfirma}> {labelConfirma} </label>
        <InputForm
          required
          id="confirmasenha"
          name={nameConfirma}
          type={passwordType}
          onChange={handleConfirm}
          value={confirmValue}
          onBlur={() => {
            if (confirmValue === valueSenha) {
              setcheckConfirma('Campos corretos');
              setErrorConfirma('');
            } else {
              setErrorConfirma(' Os campos não condizem entre si');
              setcheckConfirma('');
            }
          }}
          show={iconPassword}
          error={errorconfirma}
          check={checkConfirma}
        />
      </CapsulaPassword>
    </>
  );
};

export default StepCadastroSenha;
