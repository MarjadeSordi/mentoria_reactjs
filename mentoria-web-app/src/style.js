import styled, { createGlobalStyle, ThemeProvider, css} from 'styled-components';
import warning from '../src/assets/icons/warning.svg';



export const GlobalStyle = createGlobalStyle `
html {
    margin: 0px;
    height: 100%;
}
  
body {
    font-family: Open Sans;
  
}

`;

export const coresGlobais = {  
    primary: '#1B5DFF',
    secondary: '#47D163',
    mediumShade: '#828282',
    lightestShade: 'F9F9F9',
    tertiary: '#6225CC',
    fullShade: '#090808',
    lightShade: '#E0E0E0'

}


export const ButtonApp = styled.button `
height: 48px;
width: 343px;
left: 255px;
top: 374px;
border-radius: 5px;

left: 39.23%;
right: 8%;
bottom: 20.53%;
cursor: pointer;

font-family: Roboto;

border-radius: 5px;

background-color: ${props => `${props.colorbgButton}`};
top: ${props => `${props.buttonTop}%`};
color: ${props => `${props.buttonColor}`};
border: ${props => `${props.buttonBorder}`};

`

export const Title = styled.h1`
width: 183px;
height: 38px;
left: 337px;
top: 109px;

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.3px;
`

export const TitleDois = styled.h2`
width: 173px;
height: 38px;
left: 337px;
top: 171px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 38px;
letter-spacing: -0.3px;
color: #23232E;
`

export const TitleTres = styled.h3`
width: 154px;
height: 34px;
left: 337px;
top: 228px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 34px;
/* identical to box height */
color: #23232E;
letter-spacing: -0.3px;
`

export const TitleQuatro = styled.h4`
width: 136px;
height: 30px;
left: 337px;
top: 282px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 30px;
/* identical to box height */

letter-spacing: -0.3px;
color: #23232E;

`

export const TextoBold = styled.span `
width: 102px;
height: 22px;
left: 337px;
top: 332px;

font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
/* identical to box height, or 122% */

display: flex;
align-items: center;
letter-spacing: -0.408px;

/* lead_itau */

color: #23232E;`

export const BodyLarge = styled.span `
width: 95px;
height: 25px;
left: 337px;
top: 376px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;

/* identical to box height */

display: flex;
align-items: center;

/* Gray 1 */

color: #333333;
`

export const TextoBody = styled.p`
width: 38px;
height: 22px;
left: 337px;
top: 421px;

font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 22px;
/* identical to box height */

display: flex;
align-items: center;

/* Gray 1 */

color: #333333;
`

export const StyleFormShared = css `
    background-color:${coresGlobais.lightShade};
    background-image: url (${warning}) no repeat;
    width: 340px;
    height: 48px;
    border-radius: 5px;
 
    margin-bottom: 5px;
    
  ;` 

export const StyledFormDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 20px;
    
` 

export const StyledForm = styled.form `
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
    border: ${(props) => props.error ? '3px solid #EB5757' : ''};
    ${StyleFormShared}
`

export const StyledInputforError = styled.input `
    display: block;
    border: ${props => `${props.borderColor}`};
    ${StyleFormShared}

`

export const StyledInputforCheck = styled.input `
    display: block;
    border: ${props => `${props.borderColor}`};
    ${StyleFormShared}

`

export const StyledError = styled.div `
    color: #EB5757;
    font-size: 14px;
    margin: 0px;

`
export const MsgInputError = styled.span `
    color: #EB5757;
    font-size: 12px;
`

export const MsgInputCheck = styled.span `
    color: ${coresGlobais.secondary};
    font-size: 12px;

`

export const ImagemError = styled.img `
    width: 15px;
    position: absolute;
    margin: 100px 300px;
`

export const ImagemCheck = styled.img `
    width: 15px;
    position: absolute;
    margin: 170px 300px;
`