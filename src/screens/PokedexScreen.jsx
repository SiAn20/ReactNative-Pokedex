import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import { getPokemonsAPI } from "../api/pokemon";

export default function PokedexScreen() {
  useEffect(() => {
    (async () => {
      loadPokemmons();
    })();
  }, []);

  const loadPokemmons = async () => {
    try {
      const response = await getPokemonsAPI();
      console.log("Pokemons loaded:", response);
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }
  };

  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <Text>Pokedex</Text>
      <Text>Pokemon</Text>
    </View>
  );
}
