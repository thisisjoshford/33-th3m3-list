export const getPeople = (page = 1) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=33&page=${page}`)
    .then(res => res.json())
    .then(json => json.results);
};
