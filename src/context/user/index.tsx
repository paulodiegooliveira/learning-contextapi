import React, { createContext, useState } from "react";

// Tipando os dados que eu quero para usuario
type UserType = {
  name: string;
  lastName: string;
  email: string;
};

// Tipando as propos  do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

// Valoer  default do contexto
const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {},
};

// // Criando nosso ontexto UserContext
// const UserContextProvider =  React.createContext({
//   const [state, setState] = useState(DEFAULT_VALUE.state);
//   return (
//     <UserContext.Provider value{{state, setState}}>
//     {{children}}
//     </UserContext.Provider>
//   )
// });

// export {UserContextProvider};
// export default UserContext;
