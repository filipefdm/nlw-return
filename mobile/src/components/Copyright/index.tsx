import React from "react";

import { View, Text } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View style={styles.text}>
      <Text>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}
