import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { capitalize } from "lodash";
import getColorByType from "../../utils/getColorByType";

export default function HeaderPokemon(props) {
  const { name, order, type, image } = props;
  const pokemonColor = getColorByType(type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bg };

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentIng}>
          <Image source={{ uri: image }} style={styles.img} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    position: "absolute",
    width: "100%",
    height: 400,
    borderBottomEndRadius: 300,
    borderBottomStartRadius: 300,
    transform: [{ scaleX: 1.7 }],
  },
  content: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  name: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "bold",
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentIng: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});
