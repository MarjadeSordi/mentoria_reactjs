import { useState, useEffect, useRef } from 'react';
import {
  DivCapsulaContatos,
  ListaContato,
} from '../../styles/components/CheckTagContato';
import { TextoBold } from '../../styles/components/Typograph';
import InputForm from '../Input/Input';
import InputTag from '../Input/InputTag';

const StepCheckContatos = ({
  contato,
  inputcontato,
  setinputcontato,
  name,
  type,
  label,
}) => {
  const [checkContato, setContato] = useState();
  const [validInput, setValidInput] = useState({});

  const [value, setValue] = useState();

  const handleContato = e => {
    setValue(e.target.value);
  };

  const inputContatoRef = useRef();

  const componentContato = () => {
    inputContatoRef.current.focus();
  };

  return (
    <DivCapsulaContatos>
      <ListaContato>
        {contato.map(cont => (
          <>
            <li key={cont.id}>
              <InputTag
                ref={inputcontato}
                autocomplete="off"
                placeholder={cont.label}
                type={cont.type}
                name={cont.label}
                id={cont.id}
                onChange={e => {
                  setContato(e.target.value);
                  const validInputCopy = Object.assign({}, validInput);
                  if (e.target.value) {
                    const validar = new RegExp(cont.regex).test(e.target.value);
                    validInputCopy[cont.label] = validar;
                    document.getElementById(cont.id).style =
                      'background-color:#27AE60';
                  }
                  setValidInput(validInputCopy);
                }}
                onBlur={e => {
                  if (e.target.value === '') {
                    document.getElementById(cont.id).style =
                      'background-color:none';
                  } else if (!validInput[cont.label]) {
                    document.getElementById(cont.id).style =
                      'background-color:#EB5757';
                  }
                }}
                onClick={e => {
                  if (e.target.value !== '') {
                    document.getElementById(cont.id).style =
                      'background-color:none';
                  } else
                    document.getElementById(cont.id).style =
                      'background-color:#1B5DFF';
                }}
                check={validInput[cont.label]}
              />
            </li>
          </>
        ))}
      </ListaContato>
      <>
        <label htmlFor={name}>
          {' '}
          <TextoBold fsize={'13px'} pbottom={'2'}>
            {' '}
            {label}
          </TextoBold>{' '}
        </label>
        <InputForm type={type} name={name} onChange={handleContato}></InputForm>
      </>
    </DivCapsulaContatos>
  );
};

export default StepCheckContatos;
