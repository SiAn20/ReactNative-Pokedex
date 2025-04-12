import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function AccountScreen() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight }}>
      <Text>Account</Text>
    </View>
  );
}
