import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles';

const Today = (props) => {
    return(
            <View style={Styles.todayContainer}>
                <Text style={Styles.today}>{props.today}</Text>
            </View>
    );
}

export default Today;