function OnboardingElement(props) {
 console.log(props)    
    return( 

   <div>
 
        <button onClick={props.onClickAnterior} > {props.textAnterior} </button>

        <button onClick={(props.onClick)}> {props.text}  </button>

        {props.finaliza}
      
   </div>
    );

}

export default OnboardingElement;