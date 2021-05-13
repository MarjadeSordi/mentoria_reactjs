import React, { useState, useEffect } from 'react';
import { SelectLabel } from '../../styles/components/Input';
import { TextoBold } from '../../styles/components/Typograph';
import StepErro from './StepErro';

const StepDropdown = ({ name, label }) => {
  const [areas, setAreas] = useState([]);

  const SetarAreas = async () => {
    try {
      const responseArea = await fetch(
        'https://s3.amazonaws.com/doroteia.api/work-areas.json',
      );
      const jsonAreas = await responseArea.json();
      setAreas(jsonAreas);
    } catch (error) {
      <StepErro />;
    }
  };

  useEffect(() => {
    SetarAreas();
  }, []);

  return (
    <>
      <div>
        {' '}
        <label htmlFor={name}>
          <TextoBold fsize={'13px'} pbottom={'2'}>
            {label}
          </TextoBold>{' '}
        </label>
        <SelectLabel id={name} onChange={e => e.target.value}>
          {areas.map(area => (
            <option key={area.value} name={name} value={area.label}>
              {area.label}
            </option>
          ))}
        </SelectLabel>
      </div>
    </>
  );
};

export default StepDropdown;
