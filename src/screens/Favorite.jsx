import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function Favorite() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <Text>Favorite</Text>
    </View>
  );
}
