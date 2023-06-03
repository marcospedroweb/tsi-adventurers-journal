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
    message: 'Senha inválida. Deve ter pelo menos 6 caracteres.',
  },
  tel: {
    regex: /^\([1-9]{2}\) 9?[6-9]{1}[0-9]{3}-[0-9]{4}$/,
    message:
      'Número de telefone inválido. Deve ter pelo menos 11 caracteres. Ex: 1191111-1111',
  },
  image: {
    regex: /\.(png|jpeg|jpg)$/,
    message: 'Tipo de arquivo inválido. Tipos aceitos: .png, .jpeg e .jpg',
  },
  bio: {
    regex: /^[a-zA-Z0-9\s!?.,:áéíóúãõâêîôûàèìòùäëïöüçñ]{0,300}$/,
    message:
      'Deve ter no máximo 300 caracteres, com apenas letras, números, "?" e "!" permitidos.',
  },
  feedback: {
    regex: /^[a-zA-Z0-9\s!?.,:áéíóúãõâêîôûàèìòùäëïöüçñ]{0,250}$/,
    message:
      'Deve ter no máximo 250 caracteres, com apenas letras, números, "?" e "!" permitidos.',
  },
  avaliation: {
    regex: /^(10(\.0)?|[0-9](\.[0-9])?)$/,
    message: 'A nota deve ser entre 0,0 a 10,0',
  },
  creditCard: {
    regex: /^(?:\d{16}|\d{4} ?\d{4} ?\d{4} ?\d{4})$/,
    message: 'Cartão de credito inválido. Ex: 0000 0000 0000 0000',
  },
  cpf: {
    regex: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/,
    message: 'CPF inválido. Ex: 0000.000.0000-00',
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
