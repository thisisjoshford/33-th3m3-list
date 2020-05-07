import React from 'react';
import Toggle from '../ThemeToggle/Toggle';
import { useTheme, useToggle } from '../../hooks/ThemeProvider';
const Header = () => {
  const { theme } = useTheme();
  const { toggle } = useToggle();

  return (
    <>
      <h1>X-Files SEARCH API</h1>
      <Toggle value={theme === 'dark'} toggle={toggle} />
    </>
  );
};

export default Header;
