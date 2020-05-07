import React, { useContext } from 'react';
import { ContentProvider } from '../../hooks/ContentProvider';

const ListPage = () => {
  const characters = useContext(ContentProvider);
  console.log(characters);

  return (
    <>
      <h3>List of all XFiles Characters</h3>
    </>
  );
};

export default ListPage;
