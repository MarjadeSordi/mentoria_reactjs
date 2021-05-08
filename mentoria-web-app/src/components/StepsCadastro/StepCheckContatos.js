import { useState, useEffect } from 'react';
import {
  DivCapsulaContatos,
  ListaContato,
} from '../../styles/components/CheckTagContato';
import InputTag from '../Input/InputTag';

const StepCheckContatos = ({ contato, inputcontato, setinputcontato }) => {
  const [checkContato, setContato] = useState();
  const [validInput, setValidInput] = useState({});
  const [color, setColor] = useState(false);

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
                color={color}
                onBlur={() => {
                  if (!validInput[cont.label]) {
                    document.getElementById(cont.id).style =
                      'background-color:#EB5757';
                  }
                }}
                check={validInput[cont.label]}
              />
            </li>
          </>
        ))}
      </ListaContato>
    </DivCapsulaContatos>
  );
};

export default StepCheckContatos;
