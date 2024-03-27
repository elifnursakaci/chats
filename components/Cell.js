import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { colors } from "../config/constans";

const Cell = ({ title, icon, onPress, tintColor, style }) => {
  return (
    <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons name={icon} size={24} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginStart: 16,
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: colors.red,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cell;
