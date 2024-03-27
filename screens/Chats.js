import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import ContactRow from "../components/ContectRow";
import Separtor from "../components/Separtor";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/constans";
const chats = [
  {
    name: "Jhony Depp",
    users: ["elifnursakaci@gmail.com", "a@gmail.com"],
    messages: [],
  },
];

const Chats = ({ navigation }) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);

  const handleFABPress = () => {
    alert("new user name");
  };

  // const [chats,setChats]= useState([]);
  // useEffect(() => {
  //   firebase.firestore().collaction("chats").onSnapShot((snapshot)=>{

  //   })
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <ContactRow
            name="jhony Depp"
            subtitle="React Native Cours"
            onPress={() => {
              navigation.navigate("Chat");
            }}
          />
          <Separtor />
        </React.Fragment>
      ))}
      <TouchableOpacity style={styles.Fab} onPress={handleFABPress}>
        <View style={styles.fabContainer}>
          <Ionicons name="add" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  serprator: {
    height: 1,
    backgroundColor: "#E2E2E2",
    width: "100%",
    marginStart: 88,
  },
  container: {
    flex: 1,
  },
  Fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  fabContainer: {
    zIndex: 1000,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Chats;
