import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Map from '../components/Map';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
            setErr(e);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return (
    <SafeAreaView forceInset={{top: 'always'}}>
    <Text h2>Create Track</Text>
    <Map/>
    {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;