import React, { useState, useEffect } from 'react';
import { SelectLabelDrop } from '../../styles/components/Input';

const StepDropdownHub = ({ name }) => {
  const [startUp, setStartUp] = useState([]);

  const SetarStarUp = async () => {
    try {
      const responseStartUp = await fetch('http://localhost:5000/StartUps');
      const jsonStartUp = await responseStartUp.json();
      setStartUp(jsonStartUp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SetarStarUp();
  }, []);

  return (
    <div>
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
