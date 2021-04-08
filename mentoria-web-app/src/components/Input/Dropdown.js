import React from 'react';
import { SelectLabel } from '../../styles/components/Input';



const Dropdown = ({listaValor}) => {


return (

<div>


<SelectLabel>
{listaValor.map((valores) =>
  <option value={valores.value}> {valores.label} </option>

)}
</SelectLabel>


</div>
    )

}

export default Dropdown;