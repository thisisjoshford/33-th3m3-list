import React, { useContext } from 'react';
import { XfilesContent } from '../../hooks/ContentProvider';
import { useTheme } from '../../hooks/ThemeProvider';
import ListStyle from './ListPage.css';

const ListPage = () => {
  const { characters } = useContext(XfilesContent);
  const { theme } = useTheme();
  
  let styling;
  if(theme === 'light') styling = ListStyle.Light;
  if(theme === 'dark') styling = ListStyle.Dark;
  
  const elements = characters.map((character) => (
    <li key={character.name}>{character.name}</li>
  ));

  return (
    <>
      <ul className={styling}>
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