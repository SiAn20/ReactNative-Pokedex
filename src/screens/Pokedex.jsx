import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function Pokedex() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <Text>Pokedex</Text>
      <Text>Pokemon</Text>
    </View>
  );
}
