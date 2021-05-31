import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { ButtonApp } from '../styles/components/Button';
import { auth } from '../firebaseConfig';
import Search, { SearchList } from '../components/Filters/Search';
import search from '../assets/icons/search.svg';
import reorder from '../assets/icons/reorder.svg';
import { DivCapsula, DivEffect, DivHeader } from '../styles/pages/PageIndex';
import JSONINFO from '../components/Filters/posts.json';
import {
  DivSearchData,
  DivsearchList,
  DivsearchText,
  FormatText,
} from '../styles/components/Search';
import { TextoBody, TextoBold } from '../styles/components/Typograph';
import SideBar from '../components/SideBar/SideBar';
import { useState } from 'react';
import { FaDoorClosed } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import FilterTag from '../components/Filters/FilterTag';

const PageIndex = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPesquisa, setShowPesquisa] = useState(false);

  const show = () => {
    setShowMenu(true);
  };

  const exit = () => {
    setShowMenu(false);
  };

  const showSearch = () => {
    setShowPesquisa(true);
  };

  const exitPesquisa = () => {
    setShowPesquisa(false);
  };

  console.log(showMenu);
  return (
    <>
      {' '}
      <DivEffect>
        <DivHeader>
          <ButtonApp
            colorbgButton={'transparent'}
            buttonBorder={'none'}
            onClick={show}
          >
            {' '}
            <img src={reorder} alt="menu" />{' '}
          </ButtonApp>{' '}
          <Logo />{' '}
          <ButtonApp
            type="button"
            colorbgButton={'transparent'}
            buttonBorder={'none'}
            onClick={showSearch}
          >
            {' '}
            <img src={search} alt="pesquisar" />{' '}
          </ButtonApp>
        </DivHeader>
        <DivCapsula>
          {JSONINFO.map(val => (
            <SearchList key={val.id}>
              <DivsearchList>
                <TextoBold>
                  {val.title}
                  <div>
                    {val.typeCard === 'opened' ? (
                      <FaDoorOpen size={24} color="#27AE60" />
                    ) : (
                      <FaDoorClosed size={24} color="#1B5DFF" />
                    )}{' '}
                  </div>
                </TextoBold>
                <TextoBody>
                  {' '}
                  <FormatText> {val.description}</FormatText>{' '}
                </TextoBody>
                <DivSearchData>
                  <TextoBold fsize={'10px'}> {val.creationDate} | </TextoBold>
                  <TextoBold fsize={'10px'}> {val.endDate} </TextoBold>
                </DivSearchData>
              </DivsearchList>
            </SearchList>
          ))}
        </DivCapsula>
        <SideBar show={showMenu} exit={exit} />
        <FilterTag show={showPesquisa} exit={exitPesquisa} />
      </DivEffect>
    </>
  );
};

export default PageIndex;
