import styled, { css } from 'styled-components';
import { coresGlobais } from '../style';

<coresGlobais />

export const StyleFormShared = css`
    background-color:${coresGlobais.lightShade};
    width: 340px;
    height: 48px;
    border-radius: 5px;
 
    margin-bottom: 5px;
    
  ;`

export const StyledFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 20px;
    
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    padding: 40px;
`

export const StyledInput = styled.input`
    display: block;   
    border:none;
    ${StyleFormShared}
`

export const StyledInputforError = styled.input`
    display: block;
    border: ${props => `${props.borderColor}`};
    ${StyleFormShared}

`

export const StyledInputforCheck = styled.input`
    display: block;
    border: ${props => `${props.borderColor}`};
  

`

export const StyledError = styled.div`
    color: #EB5757;
    font-size: 14px;
    margin: 0px;

`
export const MsgInputError = styled.span`
    color: #EB5757;
    font-size: 12px;
`

export const MsgInputCheck = styled.span`
    color: ${coresGlobais.secondary};
    font-size: 12px;

`

export const ImagemError = styled.img`
    width: 15px;
    position: absolute;
    margin: 100px 300px;
`

export const ImagemCheck = styled.img`
    width: 15px;
    position: absolute;
    margin: 170px 300px;
`

export const SelectLabel = styled.label`   
    ${StyleFormShared}
`