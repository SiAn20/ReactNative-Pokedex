import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons, loadPokemons, isNext }) {
  const loadMore = () => {
    if (isNext) {
      loadPokemons();
    }
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}  // Solo lo ejecuta si hay más datos
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isNext ? (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 20, marginBottom: 40 }}
            color="#AEAEAE"
          />
        ) : null // No muestra el indicador si no hay más datos
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 20,
  },
});
