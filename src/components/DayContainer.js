import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles';

const DayContainer = (props) => {
    return(
        <View style={Styles.container}>
            <View style={Styles.dayContainer}>
                <Text style={Styles.day}>{props.day}</Text>
            </View>       
        </View>
    );
}

export default DayContainer;