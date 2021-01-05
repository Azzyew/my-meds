import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    dayContainer: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#ff85a2',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 40,
      width: 40,
      borderRadius: 100 / 2,
      marginTop: 5,
    },
    month: {
      flexDirection: 'row',
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
    }
});
  
export default Styles;