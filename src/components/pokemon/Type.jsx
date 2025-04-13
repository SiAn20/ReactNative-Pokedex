import React from "react";
import getColorByType from "../../utils/getColorByType";
import { StyleSheet, View, Text } from "react-native";
import { capitalize } from "lodash";

export default function Type({ types }) {
  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item.type.name}
          style={{ backgroundColor: getColorByType(item.type.name), ...styles.pill }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
