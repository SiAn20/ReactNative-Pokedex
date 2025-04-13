import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PockemonCard from "./PockemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PockemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 20,
  },
});
