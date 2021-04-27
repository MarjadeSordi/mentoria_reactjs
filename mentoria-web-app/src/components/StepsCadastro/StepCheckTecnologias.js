import { useState } from 'react';
import {
  CheckCapsula,
  CheckLabel,
  CheckTag,
} from '../../styles/components/CheckTag';
import InputForm from '../Input/Input';

const StepCheckTecnologias = ({ type, tecnologia, name, tipo, label }) => {
  const [checkTecnologia, setCheckTecnologia] = useState();
  const [mostrarCheck, setMostrarCheck] = useState();
  const [showTechOptions, setTechOptions] = useState();

  const handleCheck = e => {
    let Checar = e.target.checked;
    setCheckTecnologia(Checar);
    let Show = e.target.value;
    setMostrarCheck(Show);
  };

  const ShowOptions = e => {
    let Options = e.target.value;
    setTechOptions(Options);
  };

  return (
    <>
      <>
        <CheckCapsula>
          {tecnologia.map(tecnologias => (
            <>
              <CheckTag
                type={type}
                onClick={handleCheck}
                name={tecnologias.label}
                id={tecnologias.label}
                value={tecnologias.label}
                labelB={'#47D163'}
              />
              <CheckLabel htmlFor={tecnologias.label} id={tecnologias.label}>
                <p>{tecnologias.label}</p>
              </CheckLabel>
            </>
          ))}
        </CheckCapsula>
      </>
      <>
        <label htmlFor={name}> {label} </label>
        <InputForm type={tipo} name={name} onChange={ShowOptions}></InputForm>
      </>
    </>
  );
};

export default StepCheckTecnologias;
