import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';


const coresGlobais = {
    primary: '#1B5DFF',
    secondary: '#47D163',
    mediumShade: '#828282',
    lightestShade: 'F9F9F9',
    tertiary: '#6225CC',
    fullShade: '090808',
    lightShade: 'E0E0E0'
};

export const ButtonApp = styled.button `
height: 48px;
width: 343px;
left: 255px;
top: 374px;
border-radius: 5px;

position: absolute;
left: 39.23%;
right: 8%;
bottom: 20.53%;

/* MediumShade */


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