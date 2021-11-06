import React from "react";
import { Image, StyleSheet } from "react-native";
import ButtonWrapper from "./ButtonWrapper";

const s = StyleSheet.create({
  prev: {
    width: 80,
    resizeMode: "contain",
  },
});

const PrevButton = ({ onPress }) => (
  <ButtonWrapper activeOpacity={0.8} onPress={onPress}>
    <Image
      style={s.prev}
      source={require("../../../../assets/appImages/prev.png")}
    />
  </ButtonWrapper>
);

export default PrevButton;
