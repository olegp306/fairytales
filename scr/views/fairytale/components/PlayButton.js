import React from "react";
import { Image, StyleSheet } from "react-native";
import ButtonWrapper from "./ButtonWrapper";

const s = StyleSheet.create({
  play: {
    height: 100,
    resizeMode: "contain",
  },
});

const PlayButton = ({ onPress }) => (
  <ButtonWrapper activeOpacity={0.8} onPress={onPress}>
    <Image
      onPress={onPress}
      style={s.play}
      source={require("../../../../assets/appImages/play.png")}
    />
  </ButtonWrapper>
);

export default PlayButton;
