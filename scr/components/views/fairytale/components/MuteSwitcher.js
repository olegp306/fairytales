import React from "react";
import { Image, StyleSheet } from "react-native";

const s = StyleSheet.create({
  mute: {
  },
});

const MuteSwitcher = ({ value }) => (
  <>
    {value ? (
      <Image
        style={s.mute}
        source={require("../../../../../assets/appImages/mute.png")}
      />
    ) : (
      <Image
        style={s.mute}
        source={require("../../../../../assets/appImages/mute.png")}
      />
    )}
  </>
);

export default MuteSwitcher;
