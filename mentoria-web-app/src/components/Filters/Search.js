import React, { useState } from 'react';
import {
  DivCapsulaContatos,
  SearchList,
  DivsearchList,
} from '../../styles/components/Search';
import { TextoBody, TextoBold, Title } from '../../styles/components/Typograph';
import InputForm from '../Input/Input';
import JSONINFO from './posts.json';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <InputForm
        type="text"
        placeholder={'Pesquisar...'}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
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
export { SearchList };
export default Search;
