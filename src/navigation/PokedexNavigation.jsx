import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/PokedexScreen";
import Pokemon from "../screens/Pokemon";

export default function PokedexNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexScreen"
        component={PokedexScreen}
        options={{ title: "Pokedex", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={Pokemon}
        options={{ title: "Pokemon", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}
