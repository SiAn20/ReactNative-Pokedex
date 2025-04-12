import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Pokedex" component={Pokedex} />
    </Tab.Navigator>
  );
}
