import React from 'react';
import { View } from 'react-native';
import DayContainer from './components/DayContainer';
import MedCard from './components/MedCard';

const Dashboard = () => {
    return(
        <View>
            <DayContainer />
            <MedCard name='Sertralina' dosage='100mg' />
            <MedCard name='Bupropiona' dosage='150mg' />
            <MedCard name='Vitersol' dosage='2.000 UI' />
            <MedCard name='Vitamina D' dosage='5.000 UI' />

        </View>
    );
}

export default Dashboard;