import React, { useState, useEffect } from 'react';
import {
  GetSitterContainer,
  SitterListWrapper,
  SearchSitterCity,
  SearchInputButtonWrapper,
  SearchInput,
  SearchButton,
  SitterHeader,
  CityText,
  CityTextInfo,
  RemoveCity,
  CompleteButton,
  SitterPost,
  SitterText,
  SitterDiv,
  DogSitterHeader,
  SitterDesc,
  SitterDescWrapper,
  SitterAcceptButton,
  NoMatchDiv,
  AcceptSittingButton,
  SitterConfirmtWrapper,
  GoBackButton
} from './StyledGetSitterPage';
import ToolTip from '../../components/Tooltip';
import axios from 'axios';

const GetSitterPage = () => {

  const [searchCity, setSearchCity] = useState('');
  const [allCities, setAllCities] = useState([]);
  const [citySearchDone, setCitySearchDone] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [searchSittings, setSearchSittings] = useState([]);
  const [widthBooking, setWidthBooking] = useState('74vh');
  const [sittingsFound, setSittingsFound] = useState(false);
  const [userUpdate, setUserUpdate] = useState([]);
  const [acceptSitting, setAcceptSitting] = useState(false);
  const [sittingId, setSittingId] = useState('');

  const useFetch = url => {
    const [dogSitting, setDogSitting] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const respons = await fetch(url);
        setDogSitting(await respons.json());
      };
      fetchData();
    }, [url]);
    return { dogSitting };
  };

  const { dogSitting } = useFetch("http://localhost:3001/api/sitting");

  /**
   * Function that filter sittings of chosen city. 
   */
  const findSitting = () => {
    if (allCities.length <= 0) {
      setCityError(true);
    } else if (allCities.length === 1) {
      allCities.forEach(chosenCity => {
        const availableSitting = dogSitting.filter(element => element.city === chosenCity.text);
        console.log(availableSitting, '1 sittning finns')
        if (availableSitting.length > 0) {
          setSearchSittings(availableSitting)
          setCitySearchDone(true);
          setSittingsFound(true);
          setWidthBooking('74vh');
        } else {
          setCitySearchDone(true);
          setSittingsFound(false);
        }
      })
    } else if (allCities.length > 1) {
      for (let cities of allCities) {
        for (let sittings of dogSitting) {
          if (sittings.city === cities.text) {
            console.log(sittings, 'fler än 1 finns')
            searchSittings.push(sittings);
            setCitySearchDone(true);
            setWidthBooking('auto');
            setSittingsFound(true);
          } else {
            const noMatch = dogSitting.filter(element => element.city === cities.text);
            if (noMatch.length === 0) {
              setCitySearchDone(true);
              setSittingsFound(false);
              setWidthBooking('auto');
            }
          }
        }
      }
    }
  }

  /**
   * Easy function for the user to go back if no cities were found.
   */
  const goBack = () => {
    setCitySearchDone(false);
  }

  /**
   * Gets the event target value you write in your input and adds a city to the state.
   * Also helps with typ for example if you write a city for example stockholm it will return Stockholm
   */
  const getCity = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.length > 0) {
      const newValue = `${value[0].toUpperCase()}${value.slice(1)}`;
      setSearchCity(newValue);
    }
  }


  /**
   * Adds a city to the setAllCities array.
   */
  const addCity = () => {
    if (searchCity === '') return;
    setAllCities([...allCities, { id: Date.now(), text: searchCity }])
  }

  /**
   * Simple function that filters out and removes the city you click on.
   * @param {id} id 
   */
  const removeCity = (id) => {
    setAllCities(allCities.filter((city) => city.id !== id));
  }

  const selectedSitting = (id, name) => event => {
    axios.get(`http://localhost:3001/api/user/specific/email/${name}`, {
      sitterFound: true,
      withCredentials: true,
    }).then(response => {
      setUserUpdate(response.data);
      setAcceptSitting(true);
      setSittingId(id);
    })
  }

  /**
   * Simple function to go back if the user is not sure he wants the sitting.
   */
  const notAccepted = () => {
    setAcceptSitting(false);
  }

  const acceptAndConfirmSitting = () => {
    userUpdate.needSitting.forEach(chosenSitting => {
      if (chosenSitting._id === sittingId) {
        chosenSitting.sitterFound = true;
        axios.put(`http://localhost:3001/api/user/edit/${userUpdate._id}`, {
          withCredentials: true,
          data: {
            updates: userUpdate
          }
        })
        axios.put(`http://localhost:3001/api/sitting/edit/${sittingId}`, {
          sitterFound: true,
          withCredentials: true,
        })
      }
    })
  }

  /**
   * Renders all sittings for the dog sitter to see and pick.
   */
  const renderSittings = () => searchSittings.map(({ _id, date, time, breed, description, city, owner }) => {
    return (
      <SitterPost key={_id}>
        <DogSitterHeader>person i behov av hundpassning:</DogSitterHeader>
        <DogSitterHeader>{owner}</DogSitterHeader>
        <SitterDiv>
          <SitterText>Datum: {date}</SitterText>
          <SitterText>Klockslag: {time}</SitterText>
        </SitterDiv>
        <SitterDiv>
          <SitterText>{breed}</SitterText>
          <SitterAcceptButton onClick={selectedSitting(_id, owner)}>Passa denna hund</SitterAcceptButton>
          <SitterText>{city}</SitterText>
        </SitterDiv>
        <SitterDescWrapper>
          <SitterDesc>{description}</SitterDesc>
        </SitterDescWrapper>
      </SitterPost>
    )
  })

  return (
    <React.Fragment>
      {acceptSitting ? <GetSitterContainer style={{ height: '74vh' }}>
        <SitterConfirmtWrapper style={{ width: '30%' }}>
          <AcceptSittingButton onClick={acceptAndConfirmSitting}>Bekräfta Passning</AcceptSittingButton>
          <GoBackButton onClick={notAccepted}>Tillbaka</GoBackButton>
        </SitterConfirmtWrapper>
      </GetSitterContainer> :
        <GetSitterContainer style={{ height: widthBooking }}>
          {citySearchDone ?
            <SitterListWrapper>{sittingsFound ? renderSittings() :
              <NoMatchDiv>
                <DogSitterHeader style={{ color: '#000' }}>Inga hundpassningar fanns på valda städer</DogSitterHeader>
                <CompleteButton onClick={goBack} style={{ width: '50%' }}>Gå tillbaka</CompleteButton>
              </NoMatchDiv>}</SitterListWrapper>
            : <SitterListWrapper>
              <SitterHeader>Sök hundpassning</SitterHeader>
              <SearchSitterCity>
                <SearchInputButtonWrapper>
                  <SearchInput onChange={getCity} placeholder="Stad för passning"></SearchInput>
                  <SearchButton onClick={addCity}>Lägg till stad</SearchButton>
                </SearchInputButtonWrapper>
              </SearchSitterCity>
              <CityTextInfo>Dina valda städer:</CityTextInfo>
              {allCities.map((searchCity, id) => (
                <CityText key={id}>{searchCity.text}
                  <RemoveCity onClick={() => removeCity(searchCity.id)} />
                </CityText>
              ))}
              {cityError ? <ToolTip text="Du måste välja en stad" /> : null}
              <CompleteButton onClick={findSitting}>Hitta passning i vald stad</CompleteButton>
            </SitterListWrapper>}
        </GetSitterContainer>
      }
    </React.Fragment>
  )
}

export default GetSitterPage;