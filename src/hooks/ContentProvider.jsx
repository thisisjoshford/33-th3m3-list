import React, { createContext, useState } from 'react';

const XfilesContent = createContext();

export const ContentProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <XfilesContent.Provider value={characters}>
      {children}
    </XfilesContent.Provider>
  );
};
