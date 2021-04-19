import { useState } from 'react';
import Checkboxtag from './components/Checkbox/Checkboxtag';

const PageCheckBoxTag = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkboxtag
      checked={checked}
      onChange={val => setChecked(val)}
      label={'Green!'}
    />
  );
};

export default PageCheckBoxTag;
