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
  const pokemonArr = [];
  await Promise.all(
    results.map(async (pokemonItem) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonItem.name}`
      );
      if (!response.ok) {
        throw new Error("Could not fetch pokemon data");
      }
      const data = await response.json();
      pokemonArr.push(data);
    })
  );
  return pokemonArr;
};
