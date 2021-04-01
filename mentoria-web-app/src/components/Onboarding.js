import React, { useState } from 'react';
import OnboardingUm from './OnboardingUm';
import OnboardingDois from './OnboardingDois';
import OnboardingTres  from './OnboardingTres';



const OnboardingFunction = () => {


    
    const [slide, setSlide] = useState('1');

       
    if (slide ==='1') {
        return(<OnboardingUm onClick={() => setSlide('2')} />)
    } 
    else if (slide ==='2')
     {
        return(<OnboardingDois onClick={() => setSlide('3')} /> )
    }

    else if (slide ==='3'){
      
        return(<OnboardingTres />)
    }

    return (
        <div>
            {OnboardingFunction()}
             
             <p>  </p>
            
          

        </div>
    );



}


export default OnboardingFunction;