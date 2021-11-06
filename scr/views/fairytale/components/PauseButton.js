import React from "react";
import { Text, StyleSheet,View } from "react-native";
import ButtonWrapper from "./ButtonWrapper";

const s = StyleSheet.create({
  pause: {
    // width: 60,
  },
});

const PauseButton = ({ onPress }) => (
  <ButtonWrapper activeOpacity={0.8} onPress={onPress}>
    <View style={s.pause}>
      <Text  style={{ fontWeight: 'bold', color:'white', fontSize:25 }}>PAUSE</Text>
    </View>
  </ButtonWrapper>
);

export default PauseButton;
