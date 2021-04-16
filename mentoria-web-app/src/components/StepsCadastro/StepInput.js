import React from 'react';
import InputForm from '../Input/Input';

const SetInput = ({ label, name, type, error }) => {
  return (
    <>
      <label htmlFor={name}> {label} </label>

      <InputForm name={name} required type={type} />
    </>
  );
};

export default SetInput;
