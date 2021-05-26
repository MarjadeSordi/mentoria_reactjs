import React, { useState, useEffect } from 'react';
import {
  CheckCapsula,
  CheckTag,
  CheckLabel,
} from '../../styles/components/CheckTag';
import { SearchList, DivsearchList } from '../../styles/components/Search';
import { TextoBody, TextoBold, Title } from '../../styles/components/Typograph';
import {
  DivList,
  ListFilter,
  UlListFilter,
} from '../../styles/pages/PageIndex';
import InputForm from '../Input/Input';
import JSONINFO from './posts.json';

const FilterTag = () => {
  const [contato, setContato] = useState([]);
  const [check, setCheck] = useState();
  const [value, setValue] = useState([]);
  const [valor, setValor] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const SetarContato = async () => {
    try {
      const responseTec = await fetch(
        `${process.env.REACT_APP_LINK_DOROTEIA}contacts.json`,
      );
      const jsonTec = await responseTec.json();
      setContato(jsonTec);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = e => {
    let checar = e.target.checked;
    setCheck(checar);
    const validar = e.target.value;
    if (value.includes(validar)) {
      return '';
    } else {
      setValue([...value, validar]);
    }
  };

  console.log(check);
  console.log(valor);

  const state = {
    list: [],
  };

  const SetList = (valores = state) => {
    valores = {
      list: [...value],
    };
    setValor(valores);
    if (!check) {
      setValor('');
    }
  };

  const OnClick = () => {
    const setarpesquisa = JSON.parse(JSON.stringify(value));
    const transformar = setarpesquisa.toString();
    setSearchTerm(transformar);
    console.log(searchTerm);
  };

  useEffect(() => {
    SetarContato();
  }, []);

  return (
    <>
      <InputForm
        type="text"
        placeholder={'Pesquisar...'}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      <p>
        {' '}
        <TextoBold> Contatos </TextoBold>{' '}
      </p>
      {contato.map(contato => (
        <>
          <ListFilter key={contato.id}>
            <CheckTag
              type="checkbox"
              onChange={handleCheck}
              OnClick={SetList}
              name={contato.label}
              id={contato.id}
              labelB={'#47D163'}
              value={[contato.label]}
            />
            <CheckLabel
              htmlFor={contato.name}
              id={contato.id}
              labelWidth={'80%'}
              labelHeight={'20px'}
              labelRadius={'15px'}
              labelFsize={'12px'}
              labelPtop={'10%'}
              labelTransform={'2.5'}
              labelMargin={'10px'}
            >
              {contato.label}
            </CheckLabel>{' '}
          </ListFilter>
        </>
      ))}
      <button type="button" onClick={OnClick}>
        {' '}
        pesquisar{' '}
      </button>

      {JSONINFO.filter(val => {
        if (searchTerm === '') {
          return val;
        } else if (
          val.creator
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        } else if (
          val.description
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        } else if (
          val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map(val => (
        <SearchList key={val.id}>
          <DivsearchList>
            <TextoBold> {val.title} </TextoBold>
            <TextoBody> {val.description} </TextoBody>
            <p> {val.creator}</p>
          </DivsearchList>
        </SearchList>
      ))}
    </>
  );
};

export default FilterTag;
