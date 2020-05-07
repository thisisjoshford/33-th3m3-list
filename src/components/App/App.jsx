import React from 'react';
import { ContentProvider } from '../../hooks/ContentProvider';
import Header from '../1_Header/Header';
import ListPage from '../2_ListPage/ListPage';
import { ThemeProvider } from '../../hooks/ThemeProvider';
import Toggle from '../ThemeToggle/Toggle';

export default function App() {
  return (
    <ContentProvider>
      <ThemeProvider>
        <Header />
        <ListPage />
      </ThemeProvider>
    </ContentProvider>
  );
}  
