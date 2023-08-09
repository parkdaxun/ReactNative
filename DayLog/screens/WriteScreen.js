import React from 'react';
import {SafeAreaView, StyleSheet} from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditor from "../component/WriteEditor";

function WriteScreen() {
    return (
        <SafeAreaView style={styles.block}>
            <WriteHeader />
            <WriteEditor />
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
