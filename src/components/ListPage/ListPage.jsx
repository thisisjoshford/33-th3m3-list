import React, { useContext } from 'react';
import { XfilesContent } from '../../hooks/ContentProvider';
import { useTheme } from '../../hooks/ThemeProvider';
import ListStyle from './ListPage.css';

const ListPage = () => {
  const { characters, page, paging } = useContext(XfilesContent);
  const { theme } = useTheme();
  
  let styling;
  if(theme === 'light') styling = ListStyle.Light;
  if(theme === 'dark') styling = ListStyle.Dark;
  
  const elements = characters.map((character) => (
    <li key={character.name}>{character.name}</li>
  ));

  return (
    <>
      <br></br>

      <button 
        onClick={() => paging(-1)} 
        disabled={page === 1}
      >&#8672;
      </button>

      <button 
        onClick={() => paging(1)}
        disabled={characters.length < 33}
      >&#8674;
      </button>

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