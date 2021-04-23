import { useRef, useState, useEffect } from 'react';
import {
  CheckLabelContato,
  CheckTagContato,
  InputContato,
  ListaContato,
} from '../../styles/components/CheckTag';

const StepCheckContatos = ({
  contato,
  type,
  inputcontato,
  setinputcontato,
}) => {
  const [checkContato, setContato] = useState();
  const [saveContato, setSaveContato] = useState();
  const [typeInput, setTypeInput] = useState();
  const [contatoOptions, setContatoOptions] = useState();

  const handleContato = e => {
    setContato(e.target.checked);
    setSaveContato(e.target.name.toLowerCase());
  };

  const inputRef = useRef();

  useEffect(() => {
    if (inputRef && checkContato) {
      inputRef.current.focus();
    }
    if (checkContato) {
      const tipoInput = contato.find(
        tipo => tipo.label.toLowerCase() === saveContato,
      );
      setTypeInput(tipoInput);
    }
  }, [checkContato]);

  return (
    <div>
      {contato.map(cont => (
        <>
          <CheckTagContato
            type={type}
            name={cont.label}
            labelBack={'#47D163'}
            value={cont.label}
            onClick={handleContato}
            labelB={'#1B5DFF'}
          />
          <CheckLabelContato htmlFor={cont.label} id={cont.label.toLowerCase()}>
            <p> {cont.label} </p>
          </CheckLabelContato>
        </>
      ))}

      <InputContato
        ref={inputRef}
        type={typeInput?.type}
        show={checkContato}
        value={inputcontato[saveContato]}
        onBlur={e => {
          if (e.target.value) {
            const validar = new RegExp(typeInput.regex).test(e.target.value);
            if (validar) {
              document.getElementById(saveContato).style =
                'background: #47D163';
            } else {
              document.getElementById(saveContato).style = 'background:#EB5757';
            }
          }
        }}
        onChange={e => {
          const newContatos = {
            ...inputcontato,
            [saveContato]: e.target.value,
          };
          setinputcontato(newContatos);
          setContatoOptions(e.target.value);
        }}
      />

      <div>
        {' '}
        <p> {contatoOptions} </p>
      </div>
    </div>
  );
};

export default StepCheckContatos;
