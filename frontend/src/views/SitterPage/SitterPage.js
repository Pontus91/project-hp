import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  SitterContainer,
  FormSitterWrapper,
  SitterHeader,
  SitterForm,
  SitterLabel,
  SitterInput,
  SitterTextArea,
  SitterButton
} from './StyledSitterPage';

const SitterPage = () => {

  const dispatch = useDispatch();
  const [validation, setValidation] = useState(false);
  const [dateError, setDateError] = useState('');
  const [breedError, setBreedError] = useState('');
  const createSitterInfo = useSelector(state => state.sitterReducer.sitterState);


  /**
   * Validation function for date.
   * If date is correct, validation === true
   */
  const getDate = (e) => {
    let sitterTime = new Date(e.target.value)
    let sitterTimeMilli = sitterTime.getTime();
    let todaysTime = Date.now()-86400000; // ta bort -86400000 ? 
    if(sitterTimeMilli > todaysTime){
      setValidation(true);
      setDateError('#022f27');
    } else {
      setValidation(false);
      setDateError('#980c0c');
    }
    dispatch({ type: 'UPDATE_DATE', value: e.target.value })
  }

  const getTime = (e) => {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    let currentTime = e.target.value.split(":");
    currentTime.pop();
    const timeToNumber = Number(currentTime);

    if (timeToNumber >= hour){
      console.log('rätt')
    }

    dispatch({ type: 'UPDATE_TIME', value: e.target.value })


  }

  const getBreed = (e) => {
    if(e.target.value.length >= 3){
      setValidation(true);
      setBreedError('#022f27');
    } else {
      setValidation(false);
      setBreedError('#980c0c');
    
    }
    dispatch({ type: 'UPDATE_BREED', value: e.target.value })
  }

  const getAdditionalInfo = (e) => {
    dispatch({ type: 'UPDATE_DESCRIPTION_INFO', value: e.target.value })
  }

  const sitterValidation = (e) => {
    e.preventDefault();
    if (validation === true){
      axios({
        method: 'post',
        url: 'http://localhost:3001/api/sitting',
        withCredentials: true,
        data: {
          date: createSitterInfo.date,
          time: createSitterInfo.time,
          breed: createSitterInfo.breed,
          description: createSitterInfo.description,

        }
      }).then(response => {
        console.log(response)
      
      }).catch(response => {
        console.log(response, 'failed')
      });
    } 
  }

  return (
    <SitterContainer>
      <FormSitterWrapper>
        <SitterHeader>Hitta hundpassning</SitterHeader>
        <SitterForm>
          <SitterLabel>Vilken dag behöver du passning?</SitterLabel>
          <SitterInput type="date" placeholder="åååå-mm-dd" onChange={getDate} style={{borderColor: dateError}} />
          <SitterLabel>Vilken tid behöver du passning?</SitterLabel>
          <SitterInput type="time" placeholder="hh:mm" onChange={getTime} />
          <SitterLabel>Vilken hundras har du?</SitterLabel>
          <SitterInput onChange={getBreed} style={{borderColor: breedError}} />
          <SitterLabel>Ytterligare information</SitterLabel>
          <SitterTextArea onChange={getAdditionalInfo}></SitterTextArea>
          <SitterButton onClick={sitterValidation}>Hitta hundpassning</SitterButton>
        </SitterForm>
      </FormSitterWrapper>
    </SitterContainer>
  )
}

export default SitterPage;
