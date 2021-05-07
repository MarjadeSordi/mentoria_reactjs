import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DivCapsulaLogin,
  DivCentralizar,
  DivForm,
  DivLogin,
  ImgIcone,
  ImgLoader,
} from '../../styles/pages/PageLogin';
import logo1 from '../../assets/logo/logo1.svg';
import login2 from '../../assets/icons/login2.svg';
import loader from '../../assets/icons/loader.svg';
import {
  BodyLarge,
  TextButton,
  TextoBold,
} from '../../styles/components/Typograph';
import InputForm from '../Input/Input';
import usePassword from '../../hooks/usePassword';
import { Link } from 'react-router-dom';
import { ButtonApp } from '../../styles/components/Button';

export default function Login({
  textoPrincipal,
  nameemail,
  typeemail,
  labelemail,
  namesenha,
  typesenha,
  labelsenha,
}) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState(false);
  const [passwordType, iconPassword] = usePassword();
  const [valueSenha, setValueSenha] = useState('');
  const [errorsenha, setErrorSenha] = useState('');
  const [loading, isLoading] = useState(false);
  const [botao, setBotao] = useState(true);
  const history = useHistory();

  const regex =
    '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

  const regexSenha = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z!$*&@#]{8,}$/;

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
  };

  const ValidarInput = () => {
    const Validaremail = new RegExp(regex).test(value);
    if (!Validaremail) {
      setError('Por favor, digite um e-mail válido');
    } else setError('');
  };

  const handleInputSenha = e => {
    const valueSenha = e.target.value;
    setValueSenha(valueSenha);
  };

  const handleSenha = e => {
    if (!valueSenha) {
      setErrorSenha('Por favor, digite uma senha');
    } else setErrorSenha('');
  };

  function Login() {
    if (value === 'marjadesordi@gmail.com' && valueSenha === '1234567p') {
      return setLogin(true);
    } else
      return setErrorSenha(
        'E-mail ou senha incorretos. Por favor, tente novamente',
      );
  }

  const Botao = () => {
    if (value && valueSenha) {
      return setBotao(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    Login();
    if (login) {
      return history.push('/home');
    }
    isLoading(false);
  };

  return (
    <>
      <DivCapsulaLogin>
        <img src={logo1} alt="Logotipo" />
        <TextoBold fsize={'14px'} ptop={'4'}>
          {' '}
          {textoPrincipal}{' '}
        </TextoBold>
      </DivCapsulaLogin>
      <DivLogin>
        <ImgIcone src={login2} alt="login" /> <BodyLarge> Login </BodyLarge>
        <hr />
      </DivLogin>

      <DivForm>
        <form onSubmit={onSubmit} onChange={Botao}>
          <label htmlFor={nameemail}>
            {' '}
            <TextoBold fsize={'13px'}> {labelemail}</TextoBold>
          </label>
          <InputForm
            autoComplete="off"
            required
            name={nameemail}
            type={typeemail}
            onChange={handleInput}
            onBlur={ValidarInput}
            error={error}
            imgerror={error}
            value={value}
          />

          <label htmlFor={namesenha}>
            {' '}
            <TextoBold fsize={'13px'}> {labelsenha}</TextoBold>{' '}
          </label>
          <InputForm
            required
            autoComplete="off"
            name={namesenha}
            type={passwordType}
            onChange={handleInputSenha}
            error={errorsenha}
            onBlur={handleSenha}
            show={iconPassword}
            value={valueSenha}
          />
          <DivCentralizar>
            <Link to="">
              {' '}
              <TextoBold fsize={'13px'} colorText={'#1B5DFF'}>
                {' '}
                ESQUECI MINHA SENHA{' '}
              </TextoBold>{' '}
            </Link>
          </DivCentralizar>
          <DivForm>
            <ButtonApp
              type="button"
              colorbgButton={'transparent'}
              buttonColor={'#1B5DFF'}
              buttonTop={45}
              buttonBorder={'1px solid #1B5DFF'}
              onClick={() => (window.location = '/cadastro')}
              buttonSize={'100%'}
            >
              <TextButton> Ainda não tenho cadastro </TextButton>
            </ButtonApp>

            <ButtonApp
              type="submit"
              colorbgButton={botao ? '#D3D3D3' : '#1B5DFF'}
              buttonColor={'#fff'}
              buttonSize={'100%'}
              buttonBorder={'none'}
              onSubmit={() => isLoading(true)}
              disabled={botao}
            >
              <TextButton>
                {' '}
                {loading ? (
                  <ImgLoader src={loader} alt="carregando" />
                ) : (
                  'Entrar'
                )}{' '}
              </TextButton>
            </ButtonApp>
          </DivForm>
        </form>
      </DivForm>
    </>
  );
}
