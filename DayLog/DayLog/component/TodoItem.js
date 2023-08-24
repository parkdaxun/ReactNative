import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function TodoItem({id, text, done}) {
    return (
        <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        padding : 16,
        alignItems : 'center',
    },

    circle : {
        width : 24,
        height : 24,
        borderRadius : 12,
        borderColor : 'black',
        borderWidth : 1,
        marginRight : 16,
    },

    text : {
        flex : 1,
        fontSize : 16,
        color : 'black',
    },
});

export default TodoItem;
