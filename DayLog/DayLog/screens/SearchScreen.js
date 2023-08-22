import React, {useContext} from 'react';
import {StyleSheet, Text, View} from "react-native";
import SearchContext from "../contexts/SearchContext";
import FeedList from "../component/FeedList";
import LogContext from "../contexts/LogContext";

function SearchScreen() {
    const {keyword} = useContext(SearchContext);
    const {logs} = useContext(LogContext);

    const filtered =
        keyword === ''
            ? []
            : logs.filter((log) =>
                [log.title, log.body].some((text) => text.includes(keyword)),
            );

    return (
        <View style={styles.block}>
            <FeedList logs={filtered} />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {flex :1},
});

export default SearchScreen;
