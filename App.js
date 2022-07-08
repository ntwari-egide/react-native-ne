import { StatusBar } from "expo-status-bar";
import { Articles } from "./screens/articles";

import {
	useFonts,
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigator";
import { AppProvider } from "./contexts/app-context";

import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
