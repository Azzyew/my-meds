import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles';

const DayContainer = () => {
    return(
        <View>
            <Text style={Styles.month}>January</Text>
            <View style={Styles.dayContainer}>
                <Text>05</Text>
            </View> 
            <View style={Styles.dayContainer}>
                <Text>06</Text>
            </View>
            <View style={Styles.dayContainer}>
                <Text>07</Text>
            </View> 
            <View style={Styles.dayContainer}>
                <Text>08</Text>
            </View> 
        </View>
    );
}

export default DayContainer;