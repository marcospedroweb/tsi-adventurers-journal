import React from 'react';

export const convertImageToBase64 = (file, callback) => {
  //Criar um objeto de arquivo, para permitir a leitura do arquivo
  const reader = new FileReader();

  //Quando é feita a leitura completa do arquivo, é possivel ver esse resultado
  reader.onloadend = () => {
    const base64String = reader.result;
    //Com o resultado, transforma de base64, chamando o callback para retornar esse texto
    callback(base64String);
  };

  //Faz com a leitura seja feita, depois ativa a função acima "reader.onloadend"
  reader.readAsDataURL(file);
};

export const convertImageToBase64Promise = (file) => {
  //Retorna uma promisse, isso é necessario para conseguir converter o arquivo para base64
  return new Promise((resolve, reject) => {
    convertImageToBase64(file, (base64String) => {
      resolve(base64String);
    });
  });
};
