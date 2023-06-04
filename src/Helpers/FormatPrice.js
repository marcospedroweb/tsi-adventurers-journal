const FormatPrice = (price, only = false) => {
  const number = parseFloat(price.toString().replace(',', '.'));
  if (isNaN(number)) return '';

  const formatedPrice = number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return only ? formatedPrice.replace('R$ ', '') : formatedPrice;
};

export default FormatPrice;
