import React from 'react';
// Cria o contexto global das paginas

// É necessario importar esta variavel para acessar o context
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //Crie suas variaveis/funções globais aqui
  const [session, setSession] = React.useState({
    logged: false,
    user: '',
  });

  return (
    <GlobalContext.Provider value={{ session, setSession }}>
      {/* {children} será to elemento/pagina dentro do contexto */}
      {children}
    </GlobalContext.Provider>
  );
};