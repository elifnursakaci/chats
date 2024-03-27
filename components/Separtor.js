import { View, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../config/constans";

const Separtor = () => {
  return <View style={Styles.separator} />;
};

const Styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.border,
    width: "100%",
    marginStart: 88,
  },
});

export default Separtor;
