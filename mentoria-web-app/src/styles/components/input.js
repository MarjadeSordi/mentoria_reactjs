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
    padding: 0 1rem;
    border: none;
    border: ${(props) => props.error ? '3px solid #EB5757' : ''};
    border: ${(props) => props.check ? '3px solid #27AE60' : ''};

    ${StyleFormShared}
`


export const MsgInputError = styled.div`
    color: #EB5757;
    font-size: 12px;
    font-family: Open Sans;
    margin-top: 0px;
`

export const MsgInputCheck = styled.div`
    color: #27AE60;
    font-size: 12px;
    font-family: Open Sans;
   
`

export const ImagemError = styled.img`
    width: 15px;
    position: absolute;
    margin: -74px 330px;
`

export const ImagemCheck = styled.img`
    width: 15px;
    position: absolute;
    margin: -74px 330px;
`

export const SelectLabel = styled.select`
    ${StyleFormShared}
    padding: 0 1rem 0 1rem;
    border: none;
    font-family: 'Source Sans Pro', sans-serif;
`