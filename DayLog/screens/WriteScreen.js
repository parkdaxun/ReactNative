import React from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import WriteHeader from "../component/WriteHeader";

function WriteScreen() {
    return (
        <SafeAreaView style={styles.block}>
            <WriteHeader />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex : 1,
        backgroundColor : 'white',
    },
});

export default WriteScreen;
