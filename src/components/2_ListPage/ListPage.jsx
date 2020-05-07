import React, { useContext } from 'react';
import { XfilesContent } from '../../hooks/ContentProvider';

const ListPage = () => {
  const characters = useContext(XfilesContent);

  console.log(characters);

  return (
    <>
      <h3>List of all XFiles Characters</h3>
    </>
  );
};

export default ListPage;
