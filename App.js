import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Scene from "./scr/components/views/fairytale";
import fairytales from "./fairytales";

const kolobokScenes = fairytales[0].ru.scenes;

export default function App() {
  const [sceneNumber, setSceneNumber] = useState(0);

  const onPressNext = () => {
    setSceneNumber(
      sceneNumber !== kolobokScenes.length - 1 ? sceneNumber + 1 : 0
    );
  };

  const onPressPrev = () => {
    setSceneNumber(
      sceneNumber === 0 ? kolobokScenes.length - 1 : sceneNumber - 1
    );
  };

  const scene = kolobokScenes[sceneNumber];
  const { image, record, text } = scene;

  console.log("sceneNumber", sceneNumber);
  const isLastScene = kolobokScenes.length - 1 === sceneNumber;
  // console.log("scene", scene);

  return (
    <View style={styles.container}>
      <Scene
        image={image}
        record={record}
        onPressNext={onPressNext}
        onPressPrev={onPressPrev}
        isLastScene={isLastScene}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
