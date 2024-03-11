import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const RepositoryItem = (props) => {
    return (
    <View key={props.id} style={styles.container}>
        <Text big bold>id:{props.id}</Text>
        <Text blue>FullName:{props.fullName}</Text>
        <Text bold>Description:{props.description}</Text>
        <Text blue>Language: {props.language}</Text>
        <Text small>Starts: {props.stargazerzCount}</Text>
        <Text small>Rating: {props.ratingAverage}</Text>
    </View>
        )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    }
})
export default RepositoryItem