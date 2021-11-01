import React from "react";
import { StyleSheet, Button, Image } from "react-native";

const s = StyleSheet.create({
  next: {
    width: 80,
    resizeMode: "contain",
  },
});
const NextButton = ({ onClick }) => (
    <Image
      style={s.next}
      source={require("../../../../../assets/appImages/next.png")}
    />
);

export default NextButton;
