import React, {useContext} from 'react';
import {StyleSheet, Text, View} from "react-native";
import LogContext from "../contexts/LogContext";

function CalendarScreen() {
    const {text} = useContext(LogContext);
    return (
      <View style={styles.block}>
      </View>
    );
}

const styles = StyleSheet.create({
    block: {},
});

export default CalendarScreen;
