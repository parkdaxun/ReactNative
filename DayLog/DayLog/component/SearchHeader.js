import React from 'react';
import {Pressable, TextInput, StyleSheet, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SearchHeader() {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.block, {width: width-32, height: 24}]}>
            <TextInput style={styles.input} placeholder="검색어를 입력하세요" autoFocus />
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity : 0.5}]}>
                <Icon name="cancel" size={20} color="#9e9e9e" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    block : {
        flexDirection : 'row',
        alignItems : 'center',
        color : 'white',
    },

    input : {
        flex : 1,
    },

    button : {
        marginLeft : 0,
    },
});

export default SearchHeader;
