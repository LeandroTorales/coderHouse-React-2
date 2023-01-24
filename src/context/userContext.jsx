import React, { createContext } from "react";

export const userContext = createContext({ objeto: "Soy un contexto" });

export const UserContextProvider = ({ children }) => {
  return (
    <>
      <userContext.Provider value={{ user: "juancito" }}>
        {children}
      </userContext.Provider>
    </>
  );
};
