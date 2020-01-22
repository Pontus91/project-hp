import React, { useState } from 'react';
import {
  FormContainer,
  FormHeader,
  ConfirmationButton
} from './StyledForm';
import Tooltip from '../../components/Tooltip';
import Input from '../../components/Input';
import { accountInputData } from '../../staticData';
import axios from 'axios';

const Form = () => {

  const [accountInfo, setAccountInfo] = useState([]);
  const [accountValidation, setAccountValidation] = useState(false);
  const [validationInfo, setValidationInfo] = useState('');
  const [validationError, setValidationError] = useState(true);

  /**
   * Rendering multiple input fields and getting data from the staticData file.
   */
  const renderInputs = () => accountInputData.map(({ id, name, type, placeholder }) => {
    return <Input key={id} type={type} placeholder={placeholder} onChange={handleInputs} name={name} />
  })

  /**
   * Function to handle all inputs, however targets the "name" from the accountInput data.
   */
  const handleInputs = (e) => {
    setAccountInfo({ ...accountInfo, [e.target.getAttribute('name')]: e.target.value })
  }

  /** 
   * Checking valdiation on your email.
   */
  const emailValCheck = () => {
    if (accountInfo.email === undefined) {
      setValidationInfo('Du måste fylla i input fälten innan du skapar ditt konto');
      setAccountValidation(true);
      setValidationError(true)
    } else {
      let validEmail = accountInfo.email.includes('@');
      if (validEmail === false) {
        setValidationInfo('Inkludera ett @ i e-postadressen för att den ska kunna vara giltig');
        setAccountValidation(true);
        setValidationError(true)
      } else {
        if (validEmail === true) {
          setValidationError(false);
        }
      }
    }
  }

  /**
   * Checking validation on password.
   */
  const passwordValCheck = () => {
    if (accountInfo.password === undefined) {
      setValidationInfo('Du måste fylla i input fälten innan du skapar ditt konto');
      setAccountValidation(true);
      setValidationError(true)
    } else {
      if (accountInfo.password.length < 5) {
        setValidationInfo('Lösenordet måste vara minst fem karaktärer');
        setAccountValidation(true);
        setValidationError(true)
      } else {
        if (accountInfo.password.length >= 5) {
          setValidationError(false);
        }
      }
    }
  }

  /**
   * Checking validation on the phonenumber.
   */
  const phoneValCheck = () => {
    if (accountInfo.phone === undefined) {
      setValidationInfo('Du måste fylla i input fälten innan du skapar ditt konto');
      setAccountValidation(true);
      setValidationError(true)
    } else {
      let isNum = /^\d+$/.test(accountInfo.phone);
      if (accountInfo.phone.length !== 10 || isNum === false) {
        setValidationInfo('Du måste fylla i ett telefonnummer som består av enbart nummer och är tio siffror långt');
        setAccountValidation(true);
        setValidationError(true)
      } else {
        if (accountInfo.phone.length === 10 && isNum === true) {
          setValidationError(false);
        }
      }
    }
  }


  /**
   * Create account function that checks validation of the input fields and sets validationError to false if valdiation is okay.
   */
  const checkValidation = (e) => {
    e.preventDefault();
    emailValCheck();
    passwordValCheck();
    phoneValCheck();
    if (validationError === false) {
      createAccount();
    }
  }

  /**
   * Function to create the action.
   */
  const createAccount = async () => {
    await axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:3001/api/user',
      data: accountInfo,
    });
    window.location.assign('/login');
  }

  return (
    <FormContainer>
      <FormHeader>Skapa Konto</FormHeader>
      {renderInputs()}
      {accountValidation ? <Tooltip text={validationInfo} /> : null}
      <ConfirmationButton onClick={checkValidation}>Skapa Konto</ConfirmationButton>
    </FormContainer>
  )
}

export default Form;