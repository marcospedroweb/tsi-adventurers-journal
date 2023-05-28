const FormatPrice = (price) => {
  const number = parseFloat(price.replace(',', '.'));
  if (isNaN(number)) return '';

  const formatedPrice = parseFloat(number).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatedPrice;
};

export default FormatPrice;
