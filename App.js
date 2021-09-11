import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Fairytale from "./scr/components/views/fairytale";

// import PlayListView from "./scr/components/playList";
// import AudioRecord from "./scr/components/audioRecord";

export default function App() {
  return (
    <View style={styles.container}>
      <Fairytale />
      {/* <PlayList />/ */}
      {/* <PlayListView /> */}
      {/* <AudioRecord /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
