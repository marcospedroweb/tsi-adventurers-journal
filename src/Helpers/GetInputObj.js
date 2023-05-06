import React from 'react';
import useForm from '../Hooks/userForm';

const GetInputObj = (type) => {
  return {
    validationLogin: useForm(type),
    validationRegister: useForm(type),
    errorLogin: React.useState(''),
    errorRegister: React.useState(''),
    refLogin: React.useRef(),
    refRegister: React.useRef(),
  };
};

export default GetInputObj;
