import React from 'react';
import '../../styles/components/Checkboxtag';
import { Checkbox, CheckboxBorder, CheckLabel } from '../../styles/components/Checkboxtag';
import { CheckFont } from '../../styles/components/Typograph';


const Checkboxtag = ({ checked, onChange, label }) => {
  return (
    <Checkbox >

      <CheckboxBorder

        onClick={() => onChange(!checked)}
        checked={checked}>


        <CheckLabel>  <CheckFont> {label} </CheckFont>  </CheckLabel>

      </CheckboxBorder>

    </Checkbox>
  )
}


export default Checkboxtag;