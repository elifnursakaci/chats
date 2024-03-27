import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../config/constans";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hi, SignUp</Text>
          <TextInput style={styles.input} placeholder="Enter your name" />
          <TextInput style={styles.input} placeholder="Enter your email" />
          <TextInput style={styles.input} placeholder="Enter your password" />
          <View style={styles.buttonContainer}>
            <Button title="Sign In" varient="secondary" />
            <Button title="Sign Up" varient="primary" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.sign,
    textAlign: "center",
    margin: 20,
  },
  contentContainer: {
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 20,
  },
  input: {
    backgroundColor: colors.sign,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 10,
    fontSize: 16,
    color: colors.sign,
    textAlign: "center",
  },
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

export default SignUp;
