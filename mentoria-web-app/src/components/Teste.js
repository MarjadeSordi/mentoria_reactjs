import React, { useState } from 'react';
import Bomdia from '../components/Componenteum';
import BoaNoite from '../components/Componentedois';
import Adeus from './Componentetres';



const Teste = () => {

const Onboarding = () => {
}
    
    const [slide, setSlide] = useState('1');

       
    if (slide ==='1') {
        return(<Bomdia onClick={() => setSlide('2')} />)
    } else if (slide ==='2') {
        return(<BoaNoite onClick={() => setSlide('3')} /> )
    }
    else if (slide ==='3'){
        return(<Adeus />)
    }

    return (
        <div>
            {Onboarding()}
             
             <p>  </p>
            
          

        </div>
    );



}


export default Teste;