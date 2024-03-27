// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";

// const Home = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Home</Text>
//       <Button
//         title="Go To Settings Screen"
//         onPress={() => {
//           navigation.push("Setting");
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const Setting = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Setting</Text>
//       <Button
//         title="Go To Home Screen"
//         onPress={() => {
//           navigation.push("Home");
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// const MainStack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainStack.Navigator>
//         <MainStack.Screen name="Home" component={Home} />
//         <MainStack.Screen name="Setting" component={Setting} />
//       </MainStack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // Ionicons eklendi

// const Home = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Home</Text>
//     </SafeAreaView>
//   );
// };

// const Setting = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Setting</Text>
//     </SafeAreaView>
//   );
// };

// const Tabs = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused ? "chatbubbles" : "chatbubbles-outline";
//             } else if (route.name === "Setting") {
//               // 'Settings' -> 'Setting' olarak düzeltildi
//               iconName = focused ? "settings" : "settings-outline";
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tabs.Screen name="Home" component={Home} />
//         <Tabs.Screen name="Setting" component={Setting} />
//       </Tabs.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import { colors } from "./config/constans";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";

const ChatsStack = createStackNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator headerMode="none">
      <ChatsStack.Screen name="Chats" component={Chats} />
      <ChatsStack.Screen name="Chat" component={Chat} />
    </ChatsStack.Navigator>
  );
};

const SettingStack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <SettingStack.Navigator headerMode="none">
      <SettingStack.Screen name="Settings" component={Settings} />
    </SettingStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Chats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}
    >
      <Tabs.Screen name="Chats" component={ChatsScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

const MainStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen name="SignUp" component={SignUp} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
