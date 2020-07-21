import React from 'react';
import Header from '../Header/Header';
import ListPage from '../ListPage/ListPage';
import { useTheme } from '../../hooks/ThemeProvider';
import ListStyle from '../ListPage/ListPage.css';

export default function Main() {
  const { theme } = useTheme();
  
  let styling;
  if(theme === 'light') styling = ListStyle.Light;
  if(theme === 'dark') styling = ListStyle.Dark;

  return (
    <div className={styling}>
      <Header />
      <ListPage />
    </div>
  );
}  
