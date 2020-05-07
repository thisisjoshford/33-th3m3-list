import React, { useContext } from 'react';
import { XfilesContent } from '../../hooks/ContentProvider';

const ListPage = () => {
  const { characters } = useContext(XfilesContent);

  const elements = characters.map((character) => (
    <div key={character.id}> 
      <img src={character.image} />
      <h3>{character.name}</h3>
      <h6>{character.occupation}</h6>
      <p>{character.description}</p>
    </div>
  ));

  return (
    <>
      <h3>List of all XFiles Characters</h3>
      { elements }
    </>
  );
};

export default ListPage;
