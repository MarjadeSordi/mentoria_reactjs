import Logo from './components/Logo';
import Typografia from '../src/components/Typografia';

const PageIndex = () => {
  return (
    <>
      <Logo />
      <p> Bem vindo {process.env.REACT_APP_NAME}</p>
      <Typografia />
    </>
  );
};

export default PageIndex;
