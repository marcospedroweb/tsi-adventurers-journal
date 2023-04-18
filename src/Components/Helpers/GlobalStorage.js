import React from 'react';
// Cria o contexto global das paginas

// É necessario importar esta variavel para acessar o context
const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //Crie suas variaveis/funções globais aqui

  return (
    <GlobalContext.Provider>
      {/* {children} será to elemento/pagina dentro do contexto */}
      {children}
    </GlobalContext.Provider>
  );
};
