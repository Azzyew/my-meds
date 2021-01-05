import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    dayContainer: {
      flex: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#ff85a2',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100 / 2,
    },
    todayContainer: {
      flex: 2,
      backgroundColor: '#52d2ff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100 / 2,
    },
    month: {
      flexDirection: 'row',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 10,
    },
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 50,
      justifyContent: 'space-between',
      paddingTop: 8,
      paddingLeft: 10,
      paddingRight: 10,
    },
    day: {
      fontSize: 25,
    },
    today: {
      fontSize: 30,
    },
    medicine: {
      flex: 3,
      marginTop: 35,
      marginLeft: 10,
      marginRight: 10,
      border: 'solid',
      borderWidth: '1',
      borderColor: '#595959',
      borderRadius: 20,
    },
    name: {
      paddingLeft: 5,
      fontSize: 20,
    },
    dosage: {
      paddingLeft: 5,
      fontSize: 20,
    },
});
  
export default Styles;