import e from 'cors';
import { useRef, useState, useEffect } from 'react';
import { connectAdvanced } from 'react-redux';
import {
  DivCapsulaContatos,
  ListaContato,
} from '../../styles/components/CheckTagContato';
import InputTag from '../Input/InputTag';

const StepCheckContatos = ({ contato, inputcontato, setinputcontato }) => {
  const [checkContato, setContato] = useState();
  const [onfocus, setonFocus] = useState(false);
  const [saveContato, setSaveContato] = useState();
  const [typeInput, setTypeInput] = useState();
  const [validInput, setValidInput] = useState({});
  const [error, setError] = useState(false);

  const handleContato = e => {
    setContato(e.target.value);
  };

  return (
    <DivCapsulaContatos>
      <ListaContato>
        {contato.map(cont => (
          <>
            <li key={cont.id}>
              <InputTag
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
                  }
                  setValidInput(validInputCopy);
                  setError(false);
                }}
                onBlur={() => {
                  if (
                    validInput[cont.label] === undefined &&
                    validInput[cont.label] !== null
                  ) {
                    setError(false);
                  } else setError(!validInput[cont.label]);
                }}
                check={validInput[cont.label]}
                error={error}
              />
            </li>
          </>
        ))}
      </ListaContato>
    </DivCapsulaContatos>
  );
};

export default StepCheckContatos;
