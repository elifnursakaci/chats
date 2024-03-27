import { View, StyleSheet } from "react-native";
import React from "react";
import ContactRow from "../components/ContectRow";
import { colors } from "../config/constans";
import Separtor from "../components/Separtor";
import Cell from "../components/Cell";

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Elifnur ŞAKACI"
        subtitle="elifnursakaci@gmail.com"
        style={styles.ContactRow}
      />
      <Separtor />

      <Cell
        onPress={() => {
          alert("dont touch me again");
        }}
        title="Logout"
        icon="log-out-outline"
        tintColor={colors.red}
      />

      <Separtor />
      <Cell
        onPress={() => {
          alert("How can ı help you?");
        }}
        title="Help"
        icon="information-outline"
        tintColor={colors.help}
        style={{ marginTop: 20 }}
      />

      <Separtor />
      <Cell
        onPress={() => {
          alert("Tell a friend");
        }}
        title="Tell a friend"
        icon="heart-outline"
        color={colors.pink}
        tintColor={colors.pink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ContactRow: {
    backgroundColor: "white",
    marginTop: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
});

export default Settings;
