import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Scene from "./scr/views/fairytale";
import ScenesList from "./scr/views/scenesList/ScenesList";
import PauseView from "./scr/views/fairytale/pauseView/PauseView";

import fairytales from "./fairytales";
import FairyTale from "./scr/views/fairytale/FairyTale";

const kolobokScenes = fairytales[0].ru.scenes;

export default function App() {

  return (
    <View style={styles.container}>
      <FairyTale scenes={kolobokScenes} />
    

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
