import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import getColorByType from "../utils/getColorByType";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function PokemonCard({ pokemon }) {
  const navigation = useNavigation();
  const pressableCard = () => {
    navigation.navigate("PokemonScreen", { id: pokemon.id });
  };

  const pokemonColor = getColorByType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyle };

  return (
    <Pressable onPress={pressableCard}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.numberStyle}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.nameStyle}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.imgStyle} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    width: 180,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
  },
  numberStyle: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
  nameStyle: {
    position: "absolute",
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  imgStyle: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 100,
    height: 100,
  },
});
