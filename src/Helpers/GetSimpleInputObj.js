import React from 'react';
import useForm from '../Hooks/userForm';

const GetSimpleInputObj = (type) => {
  return {
    validation: useForm(type),
    error: React.useState(''),
    ref: React.useRef(),
  };
};

export default GetSimpleInputObj;
