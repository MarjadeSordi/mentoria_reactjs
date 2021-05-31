import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { ButtonApp } from '../styles/components/Button';
import { auth } from '../firebaseConfig';
import Search, { SearchList } from '../components/Filters/Search';
import search from '../assets/icons/search.svg';
import reorder from '../assets/icons/reorder.svg';
import { DivHeader } from '../styles/pages/PageIndex';
import JSONINFO from '../components/Filters/posts.json';
import { DivsearchList } from '../styles/components/Search';
import { TextoBody, TextoBold } from '../styles/components/Typograph';

const PageIndex = () => {
  return (
    <>
      <DivHeader>
        <ButtonApp colorbgButton={'transparent'} buttonBorder={'none'}>
          {' '}
          <img src={reorder} alt="menu" />{' '}
        </ButtonApp>{' '}
        <Logo />{' '}
        <ButtonApp
          type="button"
          colorbgButton={'transparent'}
          buttonBorder={'none'}
        >
          {' '}
          <img src={search} alt="pesquisar" />{' '}
        </ButtonApp>
      </DivHeader>

      {JSONINFO.map(val => (
        <SearchList key={val.id}>
          <DivsearchList>
            <TextoBold>{val.title} </TextoBold>
            <TextoBody> {val.description} </TextoBody>
            <TextoBold fsize={'10px'}> {val.creationDate} </TextoBold>
          </DivsearchList>
        </SearchList>
      ))}

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
