import React, { useState, useEffect } from 'react';
import { apiLink } from '../../config';
import { CheckTag, CheckLabel } from '../../styles/components/CheckTag';
import {
  SearchList,
  DivsearchList,
  DivCapsulaSearch,
  FormatText,
  ButtonFilter,
  ButtonOut,
} from '../../styles/components/Search';
import {
  TextButton,
  TextoBody,
  TextoBold,
} from '../../styles/components/Typograph';
import {
  DivList,
  ListFilter,
  UlListFilter,
} from '../../styles/pages/PageIndex';
import InputForm from '../Input/Input';
import JSONINFO from './posts.json';
import { FaDoorClosed } from 'react-icons/fa';
import { FaDoorOpen } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useHistory } from 'react-router';
import CardCompleted from './CardCompleted';

const FilterTag = props => {
  const [skills, setSkills] = useState([]);
  const [workareas, setWorkareas] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [check, setCheck] = useState();
  const [value, setValue] = useState([]);
  const [valor, setValor] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  const [card, setCard] = useState(false);

  const cardActive = () => {
    setCard(true);
  };

  const cardExit = () => {
    setCard(false);
  };

  const SetarSkills = async () => {
    try {
      const responseTec = await fetch(`${apiLink}skills.json?alt=media`);
      const jsonTec = await responseTec.json();
      setSkills(jsonTec);
    } catch (error) {
      console.log(error);
    }
  };

  const SetarAreas = async () => {
    try {
      const responseAreas = await fetch(`${apiLink}work-areas.json?alt=media`);
      const jsonAreas = await responseAreas.json();
      setWorkareas(jsonAreas);
    } catch (error) {
      console.log(error);
    }
  };

  const SetarCompanies = async () => {
    try {
      const responseCompanies = await fetch(
        `${apiLink}companies.json?alt=media`,
      );
      const jsonCompanies = await responseCompanies.json();
      setCompanies(jsonCompanies);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = e => {
    let checar = e.target.checked;
    setCheck(checar);
    const validar = e.target.value;
    if (value.includes(validar)) {
      const validacao = value.filter(val => val !== validar);
      setValue(validacao);
    } else {
      setValue([...value, validar]);
    }
  };

  const state = {
    list: [],
  };

  const SetList = (valores = state) => {
    valores = {
      list: [...value],
    };
    setValor(valores);
  };

  const OnClick = () => {
    const transformar = value.toString();
    console.log(transformar);
    setSearch(transformar);
  };

  useEffect(() => {
    SetarSkills();
    SetarAreas();
    SetarCompanies();
  }, []);

  return (
    <DivCapsulaSearch show={props.show}>
      <ButtonOut onClick={props.exit}>
        {' '}
        <AiOutlineCloseCircle size={18} color={'#828282'} />{' '}
      </ButtonOut>
      <InputForm
        type="text"
        placeholder={'Pesquisar...'}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      <p>
        {' '}
        <TextoBold fsize={'14px'}> Competências: </TextoBold>{' '}
      </p>
      {skills.map(skill => (
        <>
          <ListFilter key={skill.id}>
            <CheckTag
              type="checkbox"
              onChange={handleCheck}
              onClick={SetList}
              name={skill.label}
              id={skill.id}
              labelB={'#47D163'}
              value={[skill.label]}
            />
            <CheckLabel
              htmlFor={skill.name}
              id={skill.id}
              labelWidth={'90%'}
              labelHeight={'20px'}
              labelRadius={'15px'}
              labelFsize={'12px'}
              labelPtop={'10%'}
              labelTransform={'2.5'}
              labelMargin={'10px'}
            >
              {skill.label}
            </CheckLabel>{' '}
          </ListFilter>
        </>
      ))}
      <p>
        {' '}
        <TextoBold fsize={'14px'}> Áreas: </TextoBold>{' '}
      </p>
      {workareas.map(area => (
        <>
          <ListFilter key={area.value}>
            <CheckTag
              type="checkbox"
              onChange={handleCheck}
              onClick={SetList}
              name={area.label}
              id={area.id}
              labelB={'#47D163'}
              value={[area.label]}
            />
            <CheckLabel
              htmlFor={area.name}
              id={area.id}
              labelWidth={'80%'}
              labelHeight={'20px'}
              labelRadius={'15px'}
              labelFsize={'12px'}
              labelPtop={'10%'}
              labelTransform={'2.5'}
              labelMargin={'10px'}
            >
              {area.label}
            </CheckLabel>{' '}
          </ListFilter>
        </>
      ))}
      <p>
        {' '}
        <TextoBold fsize={'14px'}> StartUps: </TextoBold>{' '}
      </p>
      {companies.map(companie => (
        <>
          <ListFilter key={companie.idvalue}>
            <CheckTag
              type="checkbox"
              onChange={handleCheck}
              onClick={SetList}
              name={companie.label}
              id={companie.id}
              labelB={'#47D163'}
              value={[companie.label]}
            />
            <CheckLabel
              htmlFor={companie.name}
              id={companie.id}
              labelWidth={'80%'}
              labelHeight={'20px'}
              labelRadius={'15px'}
              labelFsize={'12px'}
              labelPtop={'10%'}
              labelTransform={'2.5'}
              labelMargin={'10px'}
            >
              {companie.label}
            </CheckLabel>{' '}
          </ListFilter>
        </>
      ))}
      <ButtonFilter type="button" onClick={OnClick}>
        <FiFilter> </FiFilter>
      </ButtonFilter>
      {JSONINFO.filter(val => {
        if (searchTerm === '') {
          return;
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
          <DivsearchList onClick={cardActive}>
            <CardCompleted
              show={card}
              name={props.creator}
              exit={cardExit}
              key={val.id}
              title={val.title}
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
            <TextoBold>
              {' '}
              {val.title}
              <div>
                {val.typeCard === 'opened' ? (
                  <FaDoorOpen size={24} color="#1B5DFF" />
                ) : (
                  <FaDoorClosed size={24} color="#47D163" />
                )}{' '}
              </div>
            </TextoBold>
            <TextButton> {val.creator} </TextButton>
            <FormatText>
              <TextoBody> {val.description} </TextoBody>
            </FormatText>
            <p>{val.tag} </p>
          </DivsearchList>
          <CardCompleted id={val.id} titulo={props.title} />
        </SearchList>
      ))}
      {JSONINFO.filter(val => {
        if (search === '') {
          return '';
        } else if (
          val.tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map(val => (
        <SearchList key={val.id}>
          <DivsearchList onClick={cardActive}>
            <CardCompleted
              show={card}
              exit={cardExit}
              key={val.id}
              title={val.title}
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
            <TextoBold>
              {' '}
              {val.title}
              <div>
                {val.typeCard === 'opened' ? (
                  <FaDoorOpen size={24} color="#1B5DFF" />
                ) : (
                  <FaDoorClosed size={24} color="#47D163" />
                )}{' '}
              </div>
            </TextoBold>
            <TextoBold> {val.title} </TextoBold>
            <TextoBody> {val.description} </TextoBody>
            <p> {val.creator}</p>
            <p>{val.tag} </p>
          </DivsearchList>
        </SearchList>
      ))}
    </DivCapsulaSearch>
  );
};

export default FilterTag;
