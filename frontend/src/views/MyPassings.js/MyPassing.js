import React, { useState, useEffect } from 'react';
import {
  PassingContainer,
  PassingWrapper,
  SitterPost,
  DogSitterHeader,
  SitterDescWrapper,
  SitterDiv,
  SitterText,
  SitterDesc,
  StatusAccepted,
} from './StyledMyPassing';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const MyPassing = () => {

  const loginInfo = useSelector(state => state.userReducer.userState);
  const dispatch = useDispatch();
  const [dogsOnMyCare, setDogsOnMyCare] = useState([]);
  const [myPassing, setMyPassing] = useState(false);
  const [adjustSitting, setAdjustSitting] = useState('');

  /**
   * UseEffect Hook to get userdata and set it to redux state.
   * Also if a user is not logged in it redirects to the startpage instantly.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/login',
    }).then(response => {
      if (response.data.status === 'not logged in') {
        window.location.assign('/');
      } else {
        let data = { ...response.data }
        dispatch({ type: 'UPDATE_USER', value: data })
      }
    })
  }, [dispatch])

  /**
     * UseEffect function to get data for sittings.
     */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:3001/api/user/specific/sittings/${loginInfo._id}`,
    }).then(response => {
      setDogsOnMyCare(response.data.doSitting);
      if (response.data.doSitting.length > 0) {
        setMyPassing(true);
      }
      if(response.data.doSitting.length > 2){
        setAdjustSitting('auto');
      }
    })
  }, [setDogsOnMyCare, loginInfo._id])

  const renderMySittings = () => dogsOnMyCare.map(({ date, time, breed, description, city, owner, _id }) => {
    return (
      <SitterPost key={_id}>
        <DogSitterHeader>Ägare till hunden du passar:</DogSitterHeader>
        <DogSitterHeader>{owner}</DogSitterHeader>
        <SitterDiv>
          <SitterText>Datum: {date}</SitterText>
          <SitterText>Klockslag: {time}</SitterText>
        </SitterDiv>
        <SitterDiv>
          <SitterText>{breed}</SitterText>
          <StatusAccepted>DU PASSAR DENNA HUND</StatusAccepted>
          <SitterText>{city}</SitterText>
        </SitterDiv>
        <SitterDescWrapper>
          <SitterDesc>{description}</SitterDesc>
        </SitterDescWrapper>
      </SitterPost>
    )
  })


  return (
    <PassingContainer style={{height: adjustSitting}}>
      <PassingWrapper style={{height: adjustSitting}}>
        {myPassing ? renderMySittings() : <DogSitterHeader style={{color: '#000'}}>Du passar inga hundar för tillfället</DogSitterHeader>}
      </PassingWrapper>
    </PassingContainer>
  )
}

export default MyPassing;