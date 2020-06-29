import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
    <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
    <FlatList
    data={state}
    keyExtractor={item => item._id}
    renderItem={({ item }) => {
        return <TouchableOpacity onPress={() =>
        navigation.navigate('TrackDetail', { _id: item._id })
        }>
            <ListItem chevron title={item.name}/>
        </TouchableOpacity>
    }} />
    </>
    )
};

const styles = StyleSheet.create({});

export default TrackListScreen;