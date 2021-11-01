import React from "react";
import { Image, StyleSheet } from "react-native";

const s = StyleSheet.create({
  play: {
    width: 100,
    resizeMode: "contain",
  },
});

const PlayButton = ({ value }) => (
  <>
    {
      (value = true ? (
        <Image
          style={s.play}
          source={require("../../../../../assets/appImages/play.png")}
        />
      ) : (
        <Image
          style={s.play}
          source={require("../../../../../assets/appImages/play.png")}
        />
      ))
    }
  </>
);

export default PlayButton;
