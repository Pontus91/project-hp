import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const getDate = (e) => {
    let sitterTime = new Date(e.target.value)
    let sitterTimeMilli = sitterTime.getTime();
    let todaysTime = Date.now()-86400000;
    if(sitterTimeMilli > todaysTime){
      setValidation(true);
      setDateError('#022f27');
    } else {
      setValidation(false);
      setDateError('#980c0c');
    }
    dispatch({ type: 'UPDATE_TIME', value: e.target.value })
  }

  const getTime = (e) => {
    console.log(e.target.value);
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
      console.log('yepp')
    } else {
      console.log('nope')
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
