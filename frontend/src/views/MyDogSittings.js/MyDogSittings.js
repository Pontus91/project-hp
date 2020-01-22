import React, { useEffect, useState } from 'react';
import {
  MyDogSittingContainer,
  MyDogSittingWrapper,
  MyDogSittingHeader,
  SitterPost,
  DogSitterHeader,
  SitterDesc,
  SitterText,
  SitterDescWrapper,
  SitterDiv,
  StatusText
} from './StyledMyDogSittings';
import axios from 'axios';

const MyDogSittings = () => {

  const [properStyle, setProperStyle] = useState('74vh');
  const [neededSittings, setNeededSittings] = useState([]);
  const [sitterStatus, setSitterStatus] = useState('Status: Ingen passning hittad');
  const [status, setStatus] = useState('');

  /**
   * UseEffect function to get data for sittings.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/sitting/user',
    }).then(response => {
      setNeededSittings(response.data);
    })
  }, [setNeededSittings])

  /**
   * Just to check if you have sittings or not.
   * And change state otherwise.
   */
  useEffect(() => {
    if (neededSittings.length > 2) {
      setProperStyle('auto');
    }
  }, [neededSittings.length])

  const renderNeededSittings = () => neededSittings.map(({ _id, date, time, breed, description, city, sitterFound, owner }) => {
    if (sitterFound === true) {
      setSitterStatus('Status: Passning hittad');
      setStatus('#44ef2f');
    }
    return (
      <SitterPost key={_id}>
        <DogSitterHeader>person i behov av hundpassning</DogSitterHeader>
        <DogSitterHeader>{owner}</DogSitterHeader>
        <SitterDiv>
          <SitterText>Datum: {date}</SitterText>
          <SitterText>Klockslag: {time}</SitterText>
        </SitterDiv>
        <SitterDiv>
          <SitterText>{breed}</SitterText>
          <StatusText style={{color: status}}>{sitterStatus}</StatusText>
          <SitterText>{city}</SitterText>
        </SitterDiv>
        <SitterDescWrapper>
          <SitterDesc>{description}</SitterDesc>
        </SitterDescWrapper>
      </SitterPost>
    )
  })

  return (
    <MyDogSittingContainer style={{ height: properStyle }}>
      <MyDogSittingWrapper>
        <MyDogSittingHeader>Nedanstående syns alla tider jag behöver min hund passad:</MyDogSittingHeader>
        {renderNeededSittings()}
      </MyDogSittingWrapper>
    </MyDogSittingContainer>
  )
}

export default MyDogSittings;
