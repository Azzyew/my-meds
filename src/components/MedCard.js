import React from 'react';
import { Text, View } from 'react-native';

const MedCard = (props) => {
    return(
        <View>
            <Text>{props.name}</Text>
            <Text>{props.dosage}</Text>
        </View>
    );
}

export default MedCard;
