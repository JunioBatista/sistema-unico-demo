import React, { createContext, useState, useContext } from 'react';

const SearchResultsContext = createContext();


export const SearchResultsProvider = ({ children }) => {
  const [results, setResults] = useState(
    {
      total: 0,
      connected: [],
      disconnected: []
    }
  );

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <SearchResultsContext.Provider value={{ results, updateResults }}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export const useSearchResults = () => {
  return useContext(SearchResultsContext);
};