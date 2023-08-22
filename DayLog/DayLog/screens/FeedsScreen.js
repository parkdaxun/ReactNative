import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import FloatingWriteButton from "../component/FloatingWriteButton";
import LogContext from "../contexts/LogContext";
import FeedList from "../component/FeedList";

function FeedsScreen() {
    const {logs} = useContext(LogContext);
    console.log(JSON.stringify(logs, null, 2));

    return (
        <View style={styles.block}>
            <FeedList logs={logs} />
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
