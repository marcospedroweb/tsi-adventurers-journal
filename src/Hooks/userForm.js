import React from 'react';

const types = {
  name: {
    regex: /^[a-zA-Z0-9\s]+$/,
    message: 'Nome inválido. (Não é permitido caracteres especiais)',
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  password: {
    regex: /.{6,}/,
    message: 'Senha inválido. Deve ter pelo menos 6 caracteres.',
  },
  tel: {
    regex: /^\([1-9]{2}\) 9?[6-9]{1}[0-9]{3}-[0-9]{4}$/,
    message: 'Senha inválido. Deve ter pelo menos 6 caracteres.',
  },
  image: {
    regex: /\.(png|jpeg|jpg)$/,
    message: 'Tipo de arquivo invalido. Tipos aceitos: .png, .jpeg e .jpg',
  },
  bio: {
    regex: /^[a-zA-Z0-9\s!]{0,250}$/,
    message:
      'Deve ter no máximo 250 caracteres, com apenas letras, números, e "!" permitidos.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0 && type !== 'bio') {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    setError,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
