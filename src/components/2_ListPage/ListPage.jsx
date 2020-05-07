import React, { useContext } from 'react';
import { XfilesContent } from '../../hooks/ContentProvider';
import { useTheme } from '../../hooks/ThemeProvider';

const ListPage = () => {
  const { characters } = useContext(XfilesContent);
  const { theme } = useTheme();
  
  let listHeader;
  if(theme === 'light') {listHeader = (<h3> LIGHT!!!!!! </h3>);}
  if(theme === 'dark') {listHeader = (<h3> DARK!!!!!!</h3>);}
  
  const elements = characters.map((character) => (
    <li key={character.name}>{character.name}</li>
  ));

  return (
    <>
      {listHeader}
      <ul>
        { elements }  
      </ul>
    </>
  );
};

export default ListPage;


// const elements = characters.map((character) => (
//   <div key={character.id}> 
//     <img src={character.image} />
//     <h3>{character.name}</h3>
//     <h6>{character.occupation}</h6>
//     <p>{character.description}</p>
//   </div>
// ));