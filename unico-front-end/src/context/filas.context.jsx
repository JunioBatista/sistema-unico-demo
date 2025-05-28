import React, { createContext, useState, useContext } from 'react';

const FilasContext = createContext();

export const FilasContextProvider = ({ children }) => {
  const [filas, setFilas] = useState(
    {
      total: 0,
      connected: [],
      disconnected: []
    }
  );

  const updateFilas = (newResults) => {
    setFilas(newResults);
  };

  return (
    <FilasContext.Provider value={{ filas, updateFilas }}>
      {children}
    </FilasContext.Provider>
  );
};

export const useFilas = () => {
  return useContext(FilasContext);
};