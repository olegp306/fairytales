import React from "react";
import { Text, View ,Button } from "react-native";
import { Audio } from 'expo-av';

const AudioBlock = ({ audio, ...rest }) => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../../../assets/json/kolobok/records/kol_1.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false
  });
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View >
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

export default AudioBlock;
