import React, { useState } from 'react';
import OnboardingElement from './OnboardingElement';

const OnboardingComponent = () => {


    
    const [slide, setSlide] = useState('1');

       
    if (slide ==='1') {
        return(<OnboardingElement onClick={() => setSlide('2')} text ='Próximo' />)
    } 

    else if (slide ==='2')
     {
        return(<OnboardingElement
            onClickAnterior={() => setSlide('1')} 
            textAnterior='Anterior'
            onClick={() => setSlide('3')} 
            text='Próximo' /> )
    }
    else if (slide ==='3'){
     
        return(<OnboardingElement
                finaliza = {localStorage.setItem('isAuth', 'true')}
                onClickAnterior={() => setSlide('2')}
                textAnterior='Anterior'
                onClick={() => window.location =("/login")}
                text='Login' />) 
                
    }

    return (
        <div>
            {OnboardingComponent()}
        </div>
    );



}


export default OnboardingComponent;