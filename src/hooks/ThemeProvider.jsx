import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggle = ({ target }) => {
    if(target.checked) setTheme('dark');
    if(!target.checked) setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export const useToggle = () => {
  const toggle = useContext(ThemeContext);
  return toggle;
};
