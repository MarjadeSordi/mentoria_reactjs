import Logo from './components/Logo';
import Typografia from '../src/components/Typografia';
import { ButtonApp } from './styles/components/Button';

const PageIndex = () => {
  return (
    <>
      <Logo />

      <ButtonApp type="button" onClick={() => (window.location = '/cadastro')}>
        Cadastro
      </ButtonApp>
      <ButtonApp type="button" onClick={() => (window.location = '/login')}>
        Login
      </ButtonApp>
    </>
  );
};

export default PageIndex;
