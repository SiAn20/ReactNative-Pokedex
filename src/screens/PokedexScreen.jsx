import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { getPokemonsAPI } from "../api/pokemon";
import { getPokemonDetailsByUrlAPI } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsAPI();

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
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <PokemonList pokemons={pokemons} />
    </View>
  );
}
