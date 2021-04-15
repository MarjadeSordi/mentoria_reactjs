import React from 'react';
import InputForm from '../Input/Input';

const SetInputEmail = ({ label, email }) => {
  return (
    <>
      <label htmlFor={email}> {label} </label>
      <InputForm email={email} />
    </>
  );
};

export default SetInputEmail;
