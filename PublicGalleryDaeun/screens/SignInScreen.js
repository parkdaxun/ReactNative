import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BorderedInput from "../components/BorderedInput";
import CustomButton from "../components/CustomButton";

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

    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    return (
        <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior={Platform.select({ios: 'padding'})}>
            <SafeAreaView style={styles.fullscreen}>
                <Text style={styles.text}>PublicGalleryDaeun</Text>
                <View style={styles.form}>
                    <BorderedInput
                        hasMarginBottom
                        placeholder="이메일"
                        value={form.email}
                        onChangeText={createChangeTextHandler('email')}
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoCompleteType="email"
                        keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <BorderedInput
                        placeholder="비밀번호"
                        hasMarginBottom={isSignUp}
                        value={form.password}
                        onChangeText={createChangeTextHandler('password')}
                        ref={passwordRef}
                        returnKeyType={isSignUp ? 'next' : 'done'}
                        onSubmitEditing={() => {
                            if (isSignUp) {
                                confirmPasswordRef.current.focus();
                            } else {
                                onSubmit();
                            }
                        }}
                        secureTextEntry
                    />
                    {isSignUp &&
                        <BorderedInput
                            placeholder="비밀번호 확인"
                            value={form.confirmPassword}
                            onChangeText={createChangeTextHandler('confirmPassword')}
                            ref={confirmPasswordRef}
                            returnKeyType="done"
                            onSubmitEditing={onSubmit}
                            secureTextEntry
                        />}
                    <View style={styles.buttons}>
                        {isSignUp ? (
                            <>
                                <CustomButton
                                    title="회원가입"
                                    hasMarginBottom
                                    onPress={onSubmit}
                                />
                                <CustomButton
                                    title="로그인"
                                    theme="secondary"
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                />
                            </>
                        ) : (
                            <>
                                <CustomButton
                                    title="로그인"
                                    hasMarginBottom
                                    onPress={onSubmit}
                                />
                                <CustomButton
                                    title="회원가입"
                                    theme="secondary"
                                    onPress={() => {
                                        navigation.push('SignIn', {isSignUp : true});
                                    }}
                                />
                            </>
                        )}
                    </View>
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
