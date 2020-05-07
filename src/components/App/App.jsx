import React from 'react';
import { ContentProvider } from '../../hooks/ContentProvider';
import Main from '../Main/Main';
import { ThemeProvider } from '../../hooks/ThemeProvider';

export default function App() {
  return (
    <ContentProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </ContentProvider>
  );
}  
