import React from 'react';
import {Pressable, View, StyleSheet, Platform} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {useNavigation} from "@react-navigation/native";

function FloatingWriteButton() {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Write');
    }

    return(
        <View style={styles.wrapper}>
            <Pressable
                style={({pressed}) => [
                    styles.button,
                    Platform.OS === 'ios' && {
                        opacity : pressed ? 0.6 : 1,
                    },
                ]}
                onPress={onPress}>
                <Icon name="add" size={24} style={styles.icon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper : {
        position : 'absolute',
        bottom : 16,
        right : 16,
        width : 56,
        height : 56,
        borderRadius : 28,
        shadowColor : '#4d4d4d',
        shadowOffset : {width : 0, height : 4},
        shadowOpacity : 0.3,
        shadowRadius : 4,
    },

    button : {
        width : 56,
        height : 56,
        borderRadius : 28,
        backgroundColor : '#000000',
        justifyContent : 'center',
        alignItems : 'center',
    },

    icon : {
        color : 'white',
    },
});

export default FloatingWriteButton;
