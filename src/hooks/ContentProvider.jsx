import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPeople } from '../services/apiFetch';

export const XfilesContent = createContext();

export const ContentProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const paging = (num) => {
    if(page >= 1)
      setPage(page + num);
  };

  useEffect(() => {
    getPeople(page)
      .then(peeps => setCharacters(peeps));
  }, [page]);

  return (
    <XfilesContent.Provider value={{ characters, paging }}>
      {children}
    </XfilesContent.Provider>
  );
};

ContentProvider.propTypes = {
  children: PropTypes.node
};
