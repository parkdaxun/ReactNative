import React from 'react';
import {View, StyleSheet} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import DateHead from "../component/DateHead";

function TodoListScreen() {
    const today = new Date();
    console.log(today);

    return (
        <SafeAreaProvider>
            <DateHead date={today}/>
        </SafeAreaProvider>
    );
}

export default TodoListScreen;
