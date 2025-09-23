import { PokemonGrid } from "@/app/components";
import { PokemonsResponse, SimplePokemon } from "@/app/interfaces";

const getPokemons = async (
  limit = 100,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((data) => data.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de pokemons <small>estaticos</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
