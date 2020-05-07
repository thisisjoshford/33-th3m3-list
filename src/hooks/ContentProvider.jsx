import React, { createContext, useState, useEffect } from 'react';
import { getPeople } from '../services/apiFetch';

const XfilesContent = createContext();

export const ContentProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getPeople()
      .then(peeps => setCharacters(peeps));

  });
  return (
    <XfilesContent.Provider value={characters}>
      {children}
    </XfilesContent.Provider>
  );
};
