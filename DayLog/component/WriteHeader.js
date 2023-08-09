import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import TransparentCirecleButton from "./TransparentCirecleButton";

function WriteHeader() {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.pop();
    };

    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <TransparentCirecleButton
                    onPress={onGoBack}
                    name="arrow-back"
                    color="#424242"
                />
            </View>
            <View style={styles.buttons}>
                <TransparentCirecleButton
                    onPress={onGoBack}
                    name="delete-forever"
                    color="#ef5350"
                    hasMarginRight
                />
                <TransparentCirecleButton name="check" color="#1c4811" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block : {
        height : 48,
        paddingHorizontal : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },

    buttons : {
        flexDirection : 'row',
        alignItems : 'center',
    },
});

export default WriteHeader;
