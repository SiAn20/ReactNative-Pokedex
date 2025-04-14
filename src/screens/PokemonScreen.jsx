import React, { useState, useEffect } from "react";
import { View, Pressable } from "react-native";
import { getPokemonDetailsAPI } from "../api/pokemon";
import HeaderPokemon from "../components/pokemon/Header";
import Type from "../components/pokemon/Type";
import Stats from "../components/pokemon/Stats";
import Favorite from "../components/pokemon/Favorite";
import  useAuth  from "../hooks/useAuth";

export default function PokemonScreen(props) {
  const { navigation, route } = props;
  const { params } = route;
  const [pokemon, setPokemon] = useState(null);
  const {auth} = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsAPI(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : null),
      headerTintColor: "#fff",
    });
  }, [navigation, params]);

  if (!pokemon) return null;

  return (
    <View>
      <HeaderPokemon
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </View>
  );
}
