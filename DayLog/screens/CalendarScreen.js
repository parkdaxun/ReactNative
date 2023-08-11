import React, {useContext} from 'react';
import {StyleSheet, Text, View} from "react-native";
import LogContext from "../contexts/LogContext";
import CalendarView from "../component/CalendarView";

function CalendarScreen() {
    const {text} = useContext(LogContext);
    return (
      <CalendarView />
    );
}

const styles = StyleSheet.create({
    block: {},
});

export default CalendarScreen;
