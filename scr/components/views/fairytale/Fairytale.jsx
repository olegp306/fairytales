import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AudioBlock from "../../audioBlock/AudioBlock";
import TextBlock from "../../textBlock";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  text:{

  }
});

const Fairytale = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMethod="scale"
        style={styles.backgroundImage}
        source={require("../../../../assets/json/kolobok/images/kol_1.jpg")}
      >
        <Text style={styles.text}>Inside</Text>      
        <AudioBlock text={"Audio Info"} /> 
      </ImageBackground>
    </View>
  );
};

export default Fairytale;
