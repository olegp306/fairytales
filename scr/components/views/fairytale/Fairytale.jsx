import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import PauseView from "./pauseView/PauseView";

const s = StyleSheet.create({
 
  backgroundImage: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  top: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mute: {
    width: "8%",
  },
});

const Fairytale = () => {
 
  return (
    <ImageBackground
      resizeMethod="scale"
      style={s.backgroundImage}
      source={require("../../../../assets/json/kolobok/images/kol_1.jpg")}
    >
      <View >
        <PauseView />      
      </View>
    </ImageBackground>
  );
};

export default Fairytale;
