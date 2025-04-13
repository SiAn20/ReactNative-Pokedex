import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

export default function PokedexNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
