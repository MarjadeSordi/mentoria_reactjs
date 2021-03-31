import React, { useState } from 'react';
import Bomdia from '../components/Componenteum';
import BoaNoite from '../components/Componentedois';



function Teste() {

const Onboarding = () => {

    
    const mostradiv = '2' 

    if (mostradiv === '1'){
       return( <Bomdia />)
    } else if (mostradiv === '2') {
       return( <BoaNoite /> ) 
    } else { return ("Próximo passo")

    }}


    const [slide, setSlide] = useState('');

       
    if (slide ==='1') {
        return(<Bomdia />)
    } else if (slide ==='2') {
        return(<BoaNoite /> )
    }

    return (
        <div>
            {Onboarding()}
             
             <p>  </p>
             <button onClick={() => setSlide('1')}> Chamar Slides 1  </button>
             <button onClick={() => setSlide('2')}> Chamar Slides 2  </button>

        </div>
    );



}


export default Teste;