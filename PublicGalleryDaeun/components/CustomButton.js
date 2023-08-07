import React from 'react';
import {StyleSheet, View, Pressable, Text, Platform} from 'react-native';

function CustomButton({onPress, title, hasMarginBottom, theme}) {
    const isPrimary = theme === 'primary';

    return (
        <View style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => [
                    styles.wrapper,
                    isPrimary && styles.primaryWrapper,
                    Platform.OS === 'ios' && pressed && {opacity: 0.5},
                ]}>
                <Text
                    style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText,
                    ]}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}

CustomButton.defaultProps = {
    theme: 'primary',
};

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
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },

    margin: {
        marginBottom: 8,
    },

    primaryWrapper: {
        backgroundColor: '#9e76d7',
    },

    primaryText: {
        color: 'white',
    },

    secondaryText: {
        color: '#9e76d7',
    },
});

export default CustomButton;
