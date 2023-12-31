import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import DateHead from "../component/Todo/DateHead";
import Empty from "../component/Todo/Empty";
import AddTodo from "../component/Todo/AddTodo";
import TodoList from "../component/Todo/TodoList";

function TodoListScreen() {
    const today = new Date();

    const [todos, setTodos] = useState([
        {id : 1, text : '직업환경 설정', done : true},
        {id : 2, text : '리액트 네이티브 기초 공부', done : false},
        {id : 3, text : '투두리스트 만들기', done : false},
    ]);

    const onRemove = id => {
        const nextTodos = todos.filter(todo => todo.id !== id);
        setTodos(nextTodos);
    };

    const onInsert = text => {
        const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
        const todo = {
            id : nextId,
            text,
            done : false,
        };

        setTodos(todos.concat(todo));
    };

    const onToggle = id => {
        const nextTodos = todos.map(todo =>
            todo.id === id ? {...todo, done : !todo.done} : todo,
        );
        setTodos(nextTodos);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['bottom']} style={styles.block}>
                <DateHead date={today}/>
                {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>}
                <AddTodo onInsert={onInsert} />
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
