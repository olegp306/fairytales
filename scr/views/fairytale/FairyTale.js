import React, { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Text, View, StyleSheet } from "react-native";
import ScenesList from "../scenesList/ScenesList";
import PauseButton from "./components/PauseButton";
import PauseView from "./pauseView/PauseView";

const FairyTale = ({ scenes, orientation }) => {
  const [sceneNumber, setSceneNumber] = useState(0);
  const [currentSound, setCurrentSound] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isOpenControls, setIsOpenControls] = useState(false);

  const scene = scenes[sceneNumber];
  const { record } = scene;

  const isLastScene = scenes.length - 1 === sceneNumber;

  const loadingSound = async () => {
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
    setCurrentSound(sound);
  };

  const playSound = async () => {
    await currentSound.playAsync();
    setIsPlaying(true);

    currentSound.setOnPlaybackStatusUpdate(async (status) => {
      if (status.didJustFinish === true && !isLastScene) {
        onPressNextHandler();
      }
      if (isLastScene) {
        setIsPlaying(false);
        if (currentSound) {
          await currentSound.unloadAsync();
        }
      }
    });
  };

  const onPressPrevHandler = async () => {
    setSceneNumber(sceneNumber === 0 ? scenes.length - 1 : sceneNumber - 1);
  };

  const onPressNextHandler = async () => {
    setSceneNumber(sceneNumber !== scenes.length - 1 ? sceneNumber + 1 : 0);
  };

  const onSetSceneNumberHandler = async (index) => {
    setSceneNumber(index);
  };

  const onPressPlayPauseHandler = async () => {
    if (isPlaying) {
      await currentSound.pauseAsync();
      setIsPlaying(false);
    } else {
      playSound();
      setIsPlaying(true);
    }
  };

  const onSlidePressHandler = () => {
    console.log("onSlidePressHandler", isOpenControls);
    setIsOpenControls(!isOpenControls);
  };

  useEffect(() => {
    const asyncFn = async () => {
      await loadingSound();
    };
    asyncFn();
  }, []);

  useEffect(() => {
    const asyncFn = async () => {
      if (isPlaying) {
        await playSound();
      }
    };
    asyncFn();
  }, [currentSound]);

  useEffect(() => {
    const asyncFn = async () => {
      if (currentSound) {
        //unload prev
        await currentSound.unloadAsync();
        //load new
        await loadingSound();

        // if (isPlaying) {
        //   await playSound();
        // }
      }
    };

    asyncFn();
  }, [sceneNumber]);

  return (
    <>
      <ScenesList
        scenes={scenes}
        sceneNumber={sceneNumber}
        onChangeSlide={onSetSceneNumberHandler}
        onSlidePress={onSlidePressHandler}
        orientation={orientation}
      />
      {isOpenControls && (
        <PauseView
          closeHandler={() => setIsOpenControls(false)}
          isPlaying={isPlaying}
          // isOpenControls={isOpenControls}
          onPressPrev={onPressPrevHandler}
          onPressNext={onPressNextHandler}
          onPressPlayPause={onPressPlayPauseHandler}
        />
      )}
    </>
  );
};

export default FairyTale;
