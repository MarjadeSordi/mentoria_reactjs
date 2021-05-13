import React, { useState, useEffect } from 'react';
import { SelectLabelDrop } from '../../styles/components/Input';
import { TextoBold } from '../../styles/components/Typograph';
import StepErro from './StepErro';

const StepDropdownHub = ({ name, label }) => {
  const [startUp, setStartUp] = useState([]);

  const SetarStarUp = async () => {
    try {
      const responseStartUp = await fetch(
        'https://s3.amazonaws.com/doroteia.api/startups.json',
      );
      const jsonStartUp = await responseStartUp.json();
      setStartUp(jsonStartUp);
    } catch (error) {
      <StepErro />;
    }
  };

  useEffect(() => {
    SetarStarUp();
  }, []);

  return (
    <div>
      <label htmlFor={name}>
        <TextoBold fsize={'13px'} pbottom={'2'}>
          {' '}
          {label}{' '}
        </TextoBold>
      </label>
      <SelectLabelDrop id={name} onChange={e => e.target.value}>
        {startUp.map(startup => (
          <option key={startup.idvalue} name={name} value={startup.label}>
            {startup.label}
          </option>
        ))}
      </SelectLabelDrop>
    </div>
  );
};

export default StepDropdownHub;
