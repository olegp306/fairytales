import React from "react";
import { StyleSheet, Image } from "react-native";
import ButtonWrapper from "./ButtonWrapper";

const s = StyleSheet.create({
  next: {
    width: 80,
    resizeMode: "contain",
  },
});
const NextButton = ({ onPress }) => (
  <ButtonWrapper  onPress={onPress}>
    <Image
      style={s.next}
      source={require("../../../../../assets/appImages/next.png")}
    />
  </ButtonWrapper>
);

export default NextButton;
