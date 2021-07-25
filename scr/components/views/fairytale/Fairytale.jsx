import React from 'react';
import { Text, View } from 'react-native';
import AudioBlock from '../../audioBlock/AudioBlock';
import TextBlock from '../../textBlock';

const Fairytale = ({
    params,
}) => (
    <View>
        <Text>Picture</Text>
        <Text>Title of Fairytale</Text>
        <TextBlock text={"One sappone time"}/>
        <AudioBlock text={"Audio Info"}/>
    </View>
);

export default Fairytale;
