import React, { useState } from 'react';
import {
  FormContainer,
  FormHeader,
  ConfirmationButton
} from './StyledForm';
import Input from '../../components/Input';
import { accountInputData } from '../../staticData';

const Form = () => {

  const [accountInfo, setAccountInfo] = useState([]);

  /**
   * Rendering multiple input fields and getting data from the staticData file.
   */
  const renderInputs = () => accountInputData.map(({id, name, type, placeholder }) => {
    return <Input key={id} type={type} placeholder={placeholder} onChange={handleInputs} name={name} />
  })

  /**
   * Function to handle all inputs, however targets the "name" from the accountInput data.
   */
  const handleInputs = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.getAttribute('name')]: e.target.value })
  }

  const createAccount = (e) => {
    e.preventDefault();
    
  }

  return (
    <FormContainer>
      <FormHeader>Skapa Konto</FormHeader>
      {renderInputs()}
      <ConfirmationButton onClick={createAccount}>Skapa Konto</ConfirmationButton>
    </FormContainer>
  )
}

export default Form;