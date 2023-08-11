import React, {useContext, useState} from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet} from "react-native";
import WriteHeader from "../component/WriteHeader";
import WriteEditor from "../component/WriteEditor";
import {useNavigation} from "@react-navigation/native";
import LogContext from "../contexts/LogContext";

function WriteScreen({route}) {
    const log = route.params?.log;
    const [title, setTitle] = useState(log?.title ?? '');
    const [body, setBody] = useState(log?.body ?? '');
    const {onCreate} = useContext(LogContext);
    const navigation = useNavigation();

    const onSave = () => {
        onCreate({
            title,
            body,
            date : new Date().toISOString(),
        });
        navigation.pop();
    };
    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <WriteHeader onSave={onSave} />
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
