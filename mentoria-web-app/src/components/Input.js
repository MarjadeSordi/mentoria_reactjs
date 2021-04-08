import { StyledInput, MsgInputError, MsgInputCheck, 
    ImagemCheck, ImagemError} from '../styles/components/Input';
import Vector from '../assets/icons/Vector.svg';

const InputForm = ({ name, type = "text", value, onChange, validateInput, checkInput, error = false, check=false ,img, ...props }) => {
    
return( 
    <>
        <StyledInput 
            type={type} 
            name ={name} 
            value={value} 
            onChange={onChange}
            onBlur={validateInput} 
            error={error}
            check={check}
            {...props}
        /> 

        {error?
        <> <MsgInputError> <p> {error} </p></MsgInputError> <ImagemError src={Vector} /> </> : <> <MsgInputCheck> <p> {check}  </p> </MsgInputCheck> <ImagemCheck src={img} />  </> }

         

       </>
    )
}

export default InputForm;