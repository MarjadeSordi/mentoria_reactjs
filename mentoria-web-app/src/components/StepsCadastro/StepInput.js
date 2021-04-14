import React from 'react';
import InputForm from '../Input/Input';

const SetInput = ({ label, name }) => {
  return (
    <>
      <label htmlFor={name}> {label} </label>

      <InputForm name={name} />
    </>
  );
};

export default SetInput;
