import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailScreen({route}) {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>id: {route.params.id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
      fontSize: 40,
    },
})

export default DetailScreen;
