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
                document.getElementById('senhacadastro').style =
                  'border: 2px solid #47D163';
                setCheck('Perfeito!');
                setError('');
              } else {
                document.getElementById('senhacadastro').style =
                  'border: 2px solid #EB5757';
                setError('Essa senha não é apropriada');
                setCheck('');
              }
            }
          }}
          value={valueSenha}
        />
        <PasswordToogle>{iconPassword}</PasswordToogle>
        {check ? <MsgInputCheck> {check} </MsgInputCheck> : ' '}
        {error ? <MsgInputError> {error} </MsgInputError> : ' '}
        <label htmlFor={nameConfirma}> {labelConfirma} </label>
        <InputForm
          required
          id="confirmasenha"
          name={nameConfirma}
          type={passwordType}
          onChange={handleConfirm}
          value={confirmValue}
          onFocus={() => {
            if (confirmValue === valueSenha) {
              document.getElementById('confirmasenha').style =
                'border: 2px solid #47D163';
              setcheckConfirma('Campos corretos');
              setErrorConfirma('');
            } else {
              document.getElementById('confirmasenha').style =
                'border: 2px solid #EB5757';
              setErrorConfirma(' Os campos não condizem entre si');
              setcheckConfirma('');
            }
          }}
        />
        <PasswordToogleConfirmado>{iconPassword}</PasswordToogleConfirmado>
        {checkConfirma ? <MsgInputCheck> {checkConfirma} </MsgInputCheck> : ' '}
        {errorconfirma ? <MsgInputError> {errorconfirma} </MsgInputError> : ' '}
      </CapsulaPassword>
    </>
  );
};

export default StepCadastroSenha;
