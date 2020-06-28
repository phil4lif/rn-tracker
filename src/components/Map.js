import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for (let i = 0; i < 10; i++){
        points.push({
            latitude: 33.504021 + i * 0.001,
            longitude: -112.095422 + i * 0.001,

        });
    }
    return (
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude: 33.504021,
            longitude: -112.095422,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}>
            {/* <Polyline coordinates={points} /> */}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;