import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import FeedLisItem from "./FeedLisItem";

function FeedList({logs, ListHeaderComponent}) {
    return (
        <FlatList
            data={logs}
            renderItem={({item}) => <FeedLisItem log={item} />}
            style={styles.block}
            keyExtractor={(log) => log.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListHeaderComponent={ListHeaderComponent}
        />
    );
}

const styles = StyleSheet.create({
    block: {flex:1},
    separator : {
        backgroundColor : '#e0e0e0',
        height : 1,
        width : '100%',
    },
});

export default FeedList;
