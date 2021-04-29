import React, { useState, useEffect } from 'react';
import { SelectLabel } from '../../styles/components/Input';

const StepDropdown = ({ name }) => {
  const [areas, setAreas] = useState([]);

  const SetarAreas = async () => {
    try {
      const responseArea = await fetch(
        'https://s3.amazonaws.com/doroteia.api/work-areas.json',
      );
      const jsonAreas = await responseArea.json();
      setAreas(jsonAreas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SetarAreas();
  }, []);

  console.log(areas);

  return (
    <div>
      <SelectLabel id={name} onChange={e => e.target.value}>
        {areas.map(area => (
          <option key={area.value} name={name} value={area.label}>
            {area.label}
          </option>
        ))}
      </SelectLabel>
    </div>
  );
};

export default StepDropdown;
