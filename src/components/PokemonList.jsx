import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 20, marginBottom: 40 }}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}
const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 20,
  },
});
