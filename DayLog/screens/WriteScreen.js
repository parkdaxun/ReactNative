import React, {useContext, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet} from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditor from "../component/WriteEditor";
import {useNavigation} from "@react-navigation/native";
import LogContext from "../contexts/LogContext";

function WriteScreen({route}) {
    const log = route.params?.log;
    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.body ?? '');
    const navigation = useNavigation();
    const {onCreate, onModify, onRemove} = useContext(LogContext);

    const onAskRemove = () => {
        Alert.alert(
            '삭제',
            '정말로 삭제하실건가요?',
            [
                {text: '최소', style: 'cancel'},
                {
                    text: '삭제',
                    onPress: () => {
                        onRemove(log?.id);
                        navigation.pop();
                    },
                    style: 'destructive',
                },
            ],
            {
                cancelable: true,
            },
        );
    }

    const onSave = () => {
        if(log) {
            onModify({
                id : log.id,
                date : log.date,
                title,
                body,
            });
        } else {
            onCreate({
                title,
                body,
                date: new Date().toISOString(),
            });
        }
        navigation.pop();
    };
    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <WriteHeader
                    onSave={onSave}
                    onAskRemove={onAskRemove}
                    isEditing={!!log}
                />
                <WriteEditor
                    title={title}
                    body={body}
                    onChangeTitle={setTitle}
                    onChangeBody={setBody}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex : 1,
        backgroundColor : 'white',
    },

    avoidingView : {
        flex : 1,
    },
});

export default WriteScreen;
