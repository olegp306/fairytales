import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import fairytales from "./fairytales";
import FairyTale from "./scr/views/fairytale/FairyTale";

const kolobokScenes = fairytales[0].ru.scenes;

export default function App() {
  const [orientation, setOrientation] = useState();
  const isPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  useEffect(() => {
    setOrientation(isPortrait() ? "portrait" : "landscape");
  }, []);

  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait() ? "portrait" : "landscape");
  });

  return (
    <View style={styles.container}>
      <FairyTale scenes={kolobokScenes} orientation={orientation} />

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
