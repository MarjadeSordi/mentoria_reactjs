import React from 'react';
import Dropdown from './components/Input/Dropdown';


const DropdownList = () => {
    
    const listadevalores =[
        {
            value: 1,
            label: 'ChooseOne', 
        },
        {
            value: 2,
            label: 'ChooseTwo', 
        },
        {
            value: 3,
            label: 'ChooseThree', 
        },
        {
            value: 4,
            label: 'ChooseFour', 
        },


    ];

    return(

        <>
        

        <Dropdown listaValor={listadevalores}/>
        

        </>
    );


}

export default DropdownList;