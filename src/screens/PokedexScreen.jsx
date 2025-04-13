import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getPokemonsAPI } from "../api/pokemon";
import { getPokemonDetailsByUrlAPI } from "../api/pokemon";
import Constants from "expo-constants";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlAPI(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image:
            pokemonDetails.sprites?.other?.["official-artwork"]
              ?.front_default ?? null,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }
  };

  return (
    <View style={{ paddingTop: Constants.statusBarHeight, marginTop: 10 }}>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </View>
  );
}
