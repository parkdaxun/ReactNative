import React from 'react';
import {View, StyleSheet, SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import DateHead from "../component/DateHead";
import Empty from "../component/Empty";

function TodoListScreen() {
    const today = new Date();

    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['bottom']} style={styles.block}>
                <DateHead date={today}/>
                <Empty />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    block : {
        flex : 1,
        backgroundColor : 'white',
    },
});

export default TodoListScreen;
