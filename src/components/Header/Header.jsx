import React from 'react';
import Toggle from '../ThemeToggle/Toggle';
import { useTheme, useToggle } from '../../hooks/ThemeProvider';
import Styling from '../ListPage/ListPage.css';

const Header = () => {
  const { theme } = useTheme();
  const { toggle } = useToggle();

  let styling;
  if(theme === 'light') styling = Styling.Light;
  if(theme === 'dark') styling = Styling.Dark;

  return (
    <>
      <h1 className={styling}>X-Files SEARCH API</h1>
      <Toggle value={theme === 'dark'} toggle={toggle} />
    </>
  );
};

export default Header;
