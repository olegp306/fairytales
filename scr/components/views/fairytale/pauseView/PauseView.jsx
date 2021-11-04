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
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.9)",
  },

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

const PauseView = ({ record, onPressNext, onPressPrev }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

    const { sound } = await Audio.Sound.createAsync(record);

    setSound(sound);
    playSound(sound);
    setIsPlaying(true);
  };

  const playSound = async (sound) => {
    console.log("useEffect playSound");
    await sound.playAsync();
    setIsPlaying(true);
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish === true) {
        onPressNextHandler();
      }
    });
  };

  useEffect(() => {
    loadingSound();
  }, [record]);

  const onPressPauseHandler = async () => {
    console.log("onPressPauseHandler");
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  const onPressPlayHandler = async () => {
    console.log("onPressPlayHandler");
    playSound(sound);
    setIsOpen(false);
  };

  const onPressScreen = async () => {
    console.log("onPressScreen");
  };

  const onPressPrevHandler = async () => {
    console.log("onPressPrev");
    await sound.unloadAsync();
    setIsOpen(false);
    onPressPrev();
  };

  const onPressNextHandler = async () => {
    console.log("onPressNext");
    await sound.unloadAsync();
    setIsOpen(false);
    onPressNext();
  };
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsOpen(!isOpen)}>
      <View style={s.wrapper} opacity={isOpen ? 1 : 0} onPress={onPressScreen}>
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
          <PrevButton onPress={onPressPrevHandler} />
          <NextButton onPress={onPressNextHandler} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PauseView;
