export const getPokemons = async (limit, offset) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error("Could not fetch pokemons");
  }
  const data = await response.json();
  return data;
};

export const getPokemonData = async (results) => {
  console.log("results", results);
  const pokemonArr = [],
    filterArr = [];
  await Promise.all(
    results.map((pokemonItem) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not fetch pokemon data");
          }
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          pokemonArr.push(data);
        });
    })
  );
  return pokemonArr;
};
