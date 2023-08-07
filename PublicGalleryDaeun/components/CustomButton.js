import React from 'react';
import {StyleSheet, View, Pressable, Text, Platform} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom}) {
    return (
        <View style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => [
                    styles.wrapper,
                    Platform.OS === 'ios' && pressed && {opacity: 0.5},
                ]}>
                <Text style={[styles.text]}>{title}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    overflow: {
        borderRadius: 4,
        overflow: 'hidden',
    },

    wrapper: {
        borderRadius: 4,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e76d7',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },

    margin: {
        marginBottom: 8,
    },
});

export default CustomButton;
