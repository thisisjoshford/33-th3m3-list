import React from 'react';
import { ContentProvider } from '../../hooks/ContentProvider';
import Header from '../1_Header/Header';
import ListPage from '../2_ListPage/ListPage';

export default function App() {
  return (
    <ContentProvider>
      <Header />
      <ListPage />
    </ContentProvider>
  );
}  
