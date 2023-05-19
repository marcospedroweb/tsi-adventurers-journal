import React from 'react';
import useFetch from '../Hooks/useFetch';

const GetMsgObj = () => {
  const [data, setData] = React.useState('');
  const [error, setError] = React.useState('');
  const [errorBack, setErroBack] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const { loading, request } = useFetch();
  const ref = React.useRef();
  return {
    data,
    setData,
    error,
    setError,
    errorBack,
    setErroBack,
    success,
    setSuccess,
    ref,
    loading,
    request,
  };
};

export default GetMsgObj;
