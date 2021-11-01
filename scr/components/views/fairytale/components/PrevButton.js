import React from "react";
import { Image, StyleSheet } from "react-native";

const s = StyleSheet.create({
  prev: {
    width: 80,
    resizeMode: "contain",
  },
});

const PrevButton = ({ value }) => (
  <Image
    style={s.prev}
    source={require("../../../../../assets/appImages/prev.png")}
  />
);

export default PrevButton;
