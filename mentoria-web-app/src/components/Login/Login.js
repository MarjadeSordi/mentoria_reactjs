import React, { useRef, useState } from 'react';
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
import { Button, Titulos, Navegar, Feedback } from '../../text/textos';
import { auth } from '../../firebaseConfig';

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
  const [user, setUser] = useState(false);

  const regex =
    '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';

  const regexSenha = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z!$*&@#]{8,}$/;

  const handleInput = e => {
    const value = e.target.value;
    setValue(value);
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const ValidarInput = () => {
    const Validaremail = new RegExp(regex).test(value);
    if (!Validaremail) {
      setError(Feedback.inputErroEmail);
    } else setError('');
  };

  const handleInputSenha = e => {
    const valueSenha = e.target.value;
    setValueSenha(valueSenha);
  };

  const handleSenha = e => {
    if (!valueSenha) {
      setErrorSenha(Feedback.inputSenhaVazio);
    } else setErrorSenha('');
  };

  const Login = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(value, valueSenha)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const Logar = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(value, valueSenha)
      .then(user => {
        setUser(true);
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
    if (user === true) {
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
        <ImgIcone src={login2} alt="login" />{' '}
        <BodyLarge> {Titulos.login} </BodyLarge>
        <hr />
      </DivLogin>

      <DivForm>
        <form>
          <label htmlFor={nameemail}>
            {' '}
            <TextoBold fsize={'13px'}> {labelemail}</TextoBold>
          </label>
          <InputForm
            ref={emailRef}
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
            ref={passwordRef}
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
                {Navegar.navSenha}{' '}
              </TextoBold>{' '}
            </Link>
          </DivCentralizar>
          <DivForm>
            {' '}
            <Link to="/cadastro">
              <ButtonApp
                type="button"
                colorbgButton={'transparent'}
                buttonColor={'#1B5DFF'}
                buttonTop={45}
                buttonBorder={'1px solid #1B5DFF'}
                buttonSize={'100%'}
                onClick={Login}
              >
                <TextButton>{Button.buttonCadastrar}</TextButton>
              </ButtonApp>
            </Link>{' '}
            <ButtonApp
              type="submit"
              colorbgButton={botao ? '#D3D3D3' : '#1B5DFF'}
              buttonColor={'#fff'}
              buttonSize={'100%'}
              buttonBorder={'none'}
              onClick={Logar}
            >
              <TextButton>
                {' '}
                {loading ? (
                  <ImgLoader src={loader} alt="carregando" />
                ) : (
                  `${Button.buttonEntrar}`
                )}{' '}
              </TextButton>
            </ButtonApp>
          </DivForm>
        </form>
      </DivForm>
    </>
  );
}
