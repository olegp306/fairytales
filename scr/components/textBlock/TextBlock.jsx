import React from 'react';
import { Text, View } from 'react-native';

const TextBlock = ({text, ...rest}) => (
    <View {...rest}>
        <Text>{text}</Text>
    </View>
);

export default TextBlock;
