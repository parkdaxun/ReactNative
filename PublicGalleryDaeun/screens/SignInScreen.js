import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SignButtons from '../components/SignButton';
import SignInForm from "../components/SignInForm";

function SignInScreen({navigation, route}) {
    const {isSignUp} = route.params ?? {};
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const createChangeTextHandler = (name) => (value) => {
        setForm({...form, [name]: value});
    };
    const onSubmit = () => {
        Keyboard.dismiss();
        console.log(form);
    };

    return (
        <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior={Platform.select({ios: 'padding'})}>
            <SafeAreaView style={styles.fullscreen}>
                <Text style={styles.text}>PublicGalleryDaeun</Text>
                <View style={styles.form}>
                    <SignInForm
                        isSignUp={isSignUp}
                        onSubmit={onSubmit}
                        form={form}
                        createChangeTextHandler={createChangeTextHandler}
                    />
                    <SignButtons isSignUp={isSignUp} onSubmit={onSubmit} />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex: 1,
    },

    fullscreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },

    form: {
        marginTop: 64,
        width: '100%',
        paddingHorizontal: 16,
    },

    buttons: {
        marginTop: 64,
    },
});

export default SignInScreen;
