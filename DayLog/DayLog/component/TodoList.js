import React from 'react';
import {FlatList, View, Text, StyleSheet} from "react-native";
import TodoItem from "./TodoItem";

function TodoList({todos, onToggle}) {
    return (
        <FlatList
            style={styles.list}
            data={todos}
            renderItem = {({item}) => (
                <TodoItem id={item.id} text={item.text} done={item.done} onToggle={onToggle} />
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    list : {
        flex : 1,
    },
});

export default TodoList;
