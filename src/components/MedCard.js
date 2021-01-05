import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles';

const MedCard = (props) => {
    return(
        <View style={Styles.medicine}>
            <Text style={Styles.name}>{props.name}</Text>
            <Text style={Styles.dosage}>{props.dosage}</Text>
        </View>
    );
}

export default MedCard;
