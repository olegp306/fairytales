import React from "react";
import { Text, View } from "react-native";

const AudioBlock = ({ audio, ...rest }) => (
  <View {...rest}>
    <Text>audio</Text>
  </View>
);

export default AudioBlock;
