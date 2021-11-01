import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import NextButton from "../components/NextButton";
import PrevButton from "../components/PrevButton";
import MuteSwitcher from "../components/MuteSwitcher";
import PlayButton from "../components/PlayButton";
import PauseButton from "../components/PauseButton";

const s = StyleSheet.create({
  wrapper: {
    // position:'absolute',
    // flex:1 ,
    flexDirection:"column",
    justifyContent:"space-between",
    // width:'100%',
    height:'100%',
    backgroundColor: "rgba(52, 52, 52, 0.9)",
  },

  top: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight:20,
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight:20,
    paddingLeft:20,

  },
});

const PauseView = ({ slide }) => {
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const loadingSound = async () => {
    console.log("useEffect loadingSound");
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false,
    });

    const { sound } = await Audio.Sound.createAsync(
      require("../../../../../assets/json/kolobok/records/kol_1.mp3")
    );

    setSound(sound);
    playSound(sound);
    setIsPlaying(true);
  };

  const playSound = async (sound) => {
    console.log("useEffect playSound");
    await sound.playAsync();
    setIsPlaying(true);
  };

  useEffect(() => {
    loadingSound();
  }, []);

  const onPressPauseHandler = async () => {
    console.log("onPressPauseHandler");
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  const onPressPlayHandler = async () => {
    console.log("onPressPlayHandler");
    playSound(sound);
    setIsOpen(!isOpen);
  };

  const onPressScreen = async () => {
    console.log("onPressScreen");
  };

  const onPrevClick = () => {
    console.log("onPrevClick");
  };
  const onNextClick = () => {
    console.log("onNextClick");
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsOpen(!isOpen)}>
      <View
        style={s.wrapper}
        opacity={isOpen ? 1 : 0}
        onPress={onPressScreen}
      >
        <View style={s.top}>
          <MuteSwitcher value={true} />
        </View>
        <View style={s.center}>
          {isPlaying ? (
            <PauseButton onPress={onPressPauseHandler} />
          ) : (
            <PlayButton onPress={onPressPlayHandler} />
          )}
        </View>
        <View style={s.bottom}>
          <PrevButton onClick={onPrevClick} />
          <NextButton onClick={onNextClick} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PauseView;
