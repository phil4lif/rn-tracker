import React from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const TrackCreateScreen = () => {
    return (
    <SafeAreaView forceInset={{top: 'always'}}>
    <Text h2>TrackCreateScreen</Text>
    <Map/>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;