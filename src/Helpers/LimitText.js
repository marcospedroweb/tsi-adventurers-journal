const LimitText = (text) => {
  const MAX_CARACTERES = 20;

  if (text.length <= MAX_CARACTERES) return text;
  else return text.substring(0, MAX_CARACTERES) + '...';
};

export default LimitText;
