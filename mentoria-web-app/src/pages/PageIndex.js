import Logo from '../components/Logo';
import { ButtonApp } from '../styles/components/Button';

import Search, { SearchList } from '../components/Filters/Search';
import search from '../assets/icons/search.svg';
import reorder from '../assets/icons/reorder.svg';
import {
  ButtonPergunta,
  DivCapsula,
  DivEffect,
  DivHeader,
} from '../styles/pages/PageIndex';
import JSONINFO from '../components/Filters/posts.json';
import {
  DivSearchData,
  DivsearchList,
  FormatText,
} from '../styles/components/Search';
import {
  TextButton,
  TextoBody,
  TextoBold,
} from '../styles/components/Typograph';
import SideBar from '../components/SideBar/SideBar';
import { useState } from 'react';
import { FaDoorClosed } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import FilterTag from '../components/Filters/FilterTag';
import CardCompleted from '../components/Filters/CardCompleted';
import { DivDoor } from '../styles/components/CardCompleted';
import { useHistory } from 'react-router';

const PageIndex = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPesquisa, setShowPesquisa] = useState(false);
  const [card, setCard] = useState(false);
  const [id, setid] = useState();

  const showC = () => {
    setCard(true);
  };

  const fechar = () => {
    setCard(false);
  };

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

  const redirect = useHistory();

  const perguntar = () => {
    redirect.push('/question');
  };

  console.log(card);

  return (
    <>
      {' '}
      <DivEffect>
        <DivHeader>
          <ButtonApp
            type="button"
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
            <>
              <SearchList key={val.id}>
                <DivsearchList
                  onClick={() => {
                    const ide = val.id;
                    setid(ide);
                    showC();
                  }}
                >
                  {id === val.id ? (
                    <CardCompleted
                      key={val.id}
                      show={card}
                      exit={fechar}
                      title={val.title}
                      name={val.creator}
                      type={val.typeCard}
                      creator={val.creator}
                      startuo={val.startup}
                      area={val.area}
                      technology={val.technology}
                      creationDate={val.creationDate}
                      endDate={val.creationDate}
                      description={val.description}
                      solutioncreator={val.solution.creator}
                      solutiondescription={val.solution.description}
                      contributionscreator={val.contributions.creator}
                    />
                  ) : (
                    ''
                  )}

                  <TextoBold>
                    {val.title}
                    <DivDoor>
                      {val.typeCard === 'opened' ? (
                        <FaDoorOpen size={24} color="#1B5DFF" />
                      ) : (
                        <FaDoorClosed size={24} color="#47D163" />
                      )}{' '}
                    </DivDoor>
                  </TextoBold>
                  <TextButton>{val.creator} </TextButton>
                  <TextoBody>
                    {' '}
                    <FormatText> {val.description}</FormatText>{' '}
                  </TextoBody>
                  <DivSearchData>
                    <TextoBold fsize={'10px'}> {val.creationDate} | </TextoBold>
                    <TextoBold fsize={'10px'}> {val.endDate} </TextoBold>
                  </DivSearchData>
                </DivsearchList>{' '}
              </SearchList>
            </>
          ))}
          <ButtonPergunta onClick={perguntar}>
            {' '}
            <TextButton>
              Faça uma <br></br> pergunta <FaPen size={12} />
            </TextButton>{' '}
          </ButtonPergunta>
        </DivCapsula>

        <SideBar show={showMenu} exit={exit} />
        <FilterTag show={showPesquisa} exit={exitPesquisa} />
      </DivEffect>
    </>
  );
};

export default PageIndex;
