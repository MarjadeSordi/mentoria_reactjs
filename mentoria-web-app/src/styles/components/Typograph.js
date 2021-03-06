import styled from 'styled-components';

export const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: #333333;
  color: ${props => `${props.corTitulo}`};
  font-size: ${props => `${props.fontSize}`};
`;

export const TitleDois = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.3px;
  color: #23232e;
`;

export const TitleTres = styled.h3`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  color: #23232e;
  letter-spacing: -0.3px;
`;

export const TitleQuatro = styled.h4`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  letter-spacing: -0.3px;
`;

export const TextoBold = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  color: #23232e;
  font-size: ${props => `${props.fsize}`};
  padding-bottom: ${props => `${props.pbottom}`}%;
  padding-top: ${props => `${props.ptop}`}%;
  color: ${props => `${props.colorText}`};
`;

export const BodyLarge = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #333333;
`;

export const TextoBody = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${props => `${props.fsize}`};
  color: ${props => `${props.colorText}`};
`;

export const TextButton = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
`;

export const CheckFont = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  color: #ffffff;
`;

export const TextP = styled.p`
    font-family: font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
`;
