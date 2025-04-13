import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

export default function PockemonCard({ pokemon }) {
  const pressableCard = () => {
    console.log("Card pressed!");
  };
  return (
    <Pressable onPress={pressableCard}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyle}>
            <Text style={styles.numberStyle}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.nameStyle}>{pokemon.name}</Text>
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
    width: 150,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    backgroundColor: "grey",
  },
  numberStyle: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
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
