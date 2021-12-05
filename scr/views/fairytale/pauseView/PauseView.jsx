import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import MuteSwitcher from "../components/MuteSwitcher";
import PlayButton from "../components/PlayButton";
import PauseButton from "../components/PauseButton";

const s = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 20,
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
  },
});

const AUTOCLOSETIME = 3000;

const PauseView = ({
  closeHandler,
  isPlaying,
  onPressPlayPause,
  onPressPrev,
  onPressNext,
}) => {
  const [closeTimer, setCloseTimer] = useState();
  useEffect(() => {
    setCloseTimer(setTimeout(closeHandler, AUTOCLOSETIME));
    // fadeIn();
  }, []);

  const restartTimer = () => {
    clearTimeout(closeTimer);
    setCloseTimer(setTimeout(closeHandler, AUTOCLOSETIME));
  };
  const onPressPlayPauseHandler = () => {
    restartTimer();
    onPressPlayPause();
  };

  const onPressPrevHandler = () => {
    restartTimer();
    onPressPrev();
  };
  const onPressNextHandler = () => {
    restartTimer();
    onPressNext();
  };

  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 1000,
  //   }).start();
  // };

  return (
      <TouchableOpacity
        onPress={closeHandler}
        style={[
          StyleSheet.absoluteFillObject,
          {
            position: "absolute",
            flex: 1,
            justifyContent: "space-between",
            backgroundColor: "#000000BF",
          },
        ]}
      >
        <View style={s.top}>
          <MuteSwitcher value={true} />
        </View>
        <View style={s.center}>
          {isPlaying ? (
            <PauseButton onPress={onPressPlayPauseHandler} />
          ) : (
            <PlayButton onPress={onPressPlayPauseHandler} />
          )}
        </View>
        <View style={s.bottom}>
          <PrevButton onPress={onPressPrevHandler} />
          <NextButton onPress={onPressNextHandler} />
        </View>
      </TouchableOpacity>
  );
};

export default PauseView;
