import React, { useState, useEffect } from 'react';
import { SelectLabel } from '../../styles/components/input';

const StepDropdown = ({ name }) => {
  const [areas, setAreas] = useState([]);

  const SetarAreas = async () => {
    try {
      const responseArea = await fetch('http://localhost:5000/Area4all');
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
