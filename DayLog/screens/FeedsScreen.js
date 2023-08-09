import React from 'react';
import {StyleSheet, View} from "react-native";
import FloatingWriteButton from "../component/FloatingWriteButton";

function FeedsScreen() {
    return (
        <View style={styles.block}>
            <FloatingWriteButton />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex : 1,
    },
});

export default FeedsScreen;
