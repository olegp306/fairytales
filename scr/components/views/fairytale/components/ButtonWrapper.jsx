import React from "react";
import {TouchableOpacity } from "react-native";

const ButtonWrapper = ({ onPress, children, rest }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
    {React.cloneElement(children, { onPress, ...rest })}
  </TouchableOpacity>
);

export default ButtonWrapper;
