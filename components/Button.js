import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../config/constans";

const Button = ({ title, varient }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    backgroundColor: colors.red,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 10,
    fontSize: 16,
    color: colors.sign,
    textAlign: "center",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default Button;
