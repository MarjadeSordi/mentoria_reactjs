import styled from 'styled-components';


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

