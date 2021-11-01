import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AudioBlock from "../../audioBlock/AudioBlock";
import TextBlock from "../../textBlock";
import NextButton from "./components/NextButton";
import PrevButton from "./components/PrevButton";
import MuteSwitcher from "./components/MuteSwitcher";
import PlayButton from "./components/PlayButton";

const s = StyleSheet.create({
  container: {
    width: "90%",
    // justifyContent:'center'
    alignSelf: "center",
  },

  backgroundImage: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  top: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mute: {
    width: "8%",
  },
});

const Fairytale = () => {
  const onPrevClick = () => {
    console.log("onPrevClick");
  };

  const onNextClick = () => {
    console.log("onNextClick");
  };

  return (
    <ImageBackground
      resizeMethod="scale"
      style={s.backgroundImage}
      source={require("../../../../assets/json/kolobok/images/kol_1.jpg")}
    >
      <View style={s.container}>
        <View style={s.top}>
          <MuteSwitcher value={true} />
        </View>
        <View style={s.center}>
          <AudioBlock text={"Audio Info"} />
          <PlayButton value />
        </View>
        <View style={s.bottom}>
          <PrevButton onClick={onPrevClick} />
          <NextButton onClick={onNextClick} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Fairytale;
