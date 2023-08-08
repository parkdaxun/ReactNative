import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import SignButtons from '../components/SignButton';
import SignInForm from "../components/SignInForm";
import {signIn, signUp} from '../lib/auth';

function SignInScreen({route}) {
    const {isSignUp} = route.params ?? {};
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loading, setLoading] = useState();

    const createChangeTextHandler = (name) => (value) => {
        setForm({...form, [name]: value});
    };

    const onSubmit = async () => {
        Keyboard.dismiss();
        const {email, password} = form;
        const info = {email, password};
        setLoading(true);
        try {
            const {user} = isSignUp ? await signUp(info) : await signIn(info);
            console.log(user);
        } catch(e) {
            Alert.alert('실패');
            console.log(e);
        } finally {
            setLoading(false);
        }
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
                    <SignButtons
                        isSignUp={isSignUp}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
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
