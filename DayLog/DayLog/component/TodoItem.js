import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

function TodoItem({id, text, done}) {
    return (
        <View style={styles.item}>
            <View style={[styles.circle, done && styles.filled]}>
                {done && (
                    <Image source={require('../assets/icons/check_white/check_white.png')} />
                )}
            </View>
            <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
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

    filled : {
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'black',
    },

    lineThrough : {
        color : '#646464',
        textDecorationLine : 'line-through',
    },
});

export default TodoItem;
