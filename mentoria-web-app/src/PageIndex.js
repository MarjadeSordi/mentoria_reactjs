import Logo from './components/Logo';
import { Link } from 'react-router-dom';
import Typografia from '../src/components/Typografia';
import { ButtonApp } from './styles/components/Button';
import { auth } from './firebaseConfig';

const PageIndex = () => {
  return (
    <>
      <Logo />
      Olá! {process.env.REACT_APP_DOROTEIA}
      <ButtonApp onClick={() => auth.signOut()}> Sair </ButtonApp>
      <Link to="/cadastro">
        <ButtonApp type="button">Cadastro</ButtonApp>
      </Link>
      <Link to="/login">
        <ButtonApp type="button">Login</ButtonApp>{' '}
      </Link>
    </>
  );
};

export default PageIndex;
