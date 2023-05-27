import React from 'react';
import { useNavigate } from 'react-router-dom';
// Cria o contexto global das paginas

// É necessario importar esta variavel para acessar o context
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  //Crie suas variaveis/funções globais aqui
  const [session, setSession] = React.useState({
    logged: false,
    user: '',
  });
  const [alertEditing, setAlertEditing] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [searchAdventure, setSearchAdventure] = React.useState('');

  return (
    <GlobalContext.Provider
      value={{
        session,
        setSession,
        alertEditing,
        setAlertEditing,
        editing,
        setEditing,
        searchAdventure,
        setSearchAdventure,
      }}
    >
      {/* {children} será to elemento/pagina dentro do contexto */}
      {children}
    </GlobalContext.Provider>
  );
};
