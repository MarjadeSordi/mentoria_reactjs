import { useState, useEffect } from 'react';
import Checkboxtag from '../Checkbox/Checkboxtag';

const StepCheckTecnologias = ({ type, name }) => {
  const [tec, setTec] = useState([]);
  const [checkTecnologia, setCheckTecnologia] = useState();
  const [valordocheck, setValordocheck] = useState([]);

  const SetarTecnologia = async () => {
    try {
      const responseTec = await fetch('http://localhost:5000/Tecnologias');
      const jsonTec = await responseTec.json();
      setTec(jsonTec);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = e => {
    setCheckTecnologia(e.target.checked);
    if (checkTecnologia) {
      let checkV = e.target.value;
      return setValordocheck({ tecnologias: e.target.value });
    }
  };

  console.log(checkTecnologia);
  console.log(valordocheck);

  useEffect(() => {
    SetarTecnologia();
  }, []);

  return (
    <>
      {tec.map(tecnologias => (
        <>
          <input
            type={type}
            onChange={handleCheck}
            id={name}
            name={name}
            value={tecnologias.label}
          ></input>
          <label htmlFor={name}>{tecnologias.label}</label>
        </>
      ))}
    </>
  );
};

export default StepCheckTecnologias;
