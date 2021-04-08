import { StyledInput, StyledInputforCheck, StyledInputforError, TextoBold, MsgInputError, MsgInputCheck, 
    ImagemCheck, ImagemError} from '../style';



const InputForm = ({ name, type = "text", value, onChange, validateInput, checkInput, error = false, ...props }) => {
    
return(
        <StyledInput 
            type={type} 
            name ={name} 
            value={value} 
            onChange={onChange}
            onBlur={validateInput} 
            error={error}
            {...props}
        /> 
    )
}

export default InputForm;