import React from 'react';
import { StyledInput } from './StyledInput';

const Input = ({ val, type, placeholder, onChange, keyValue, name }) => {
  return(
    <StyledInput
      value={val}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      key={keyValue}
      name={name}
    />
  )
}

export default Input;