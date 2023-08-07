import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import BorderedInput from "../components/BorderedInput";
import CustomButton from "../components/CustomButton";

function SignInScreen({navigation, route}) {
    const {isSignUp} = route.params ?? {};

    return (
        <SafeAreaView style={styles.fullscreen}>
            <Text style={styles.text}>PublicGalleryDaeun</Text>
            <View style={styles.form}>
                <BorderedInput hasMarginBottom placeholder="이메일"/>
                <BorderedInput placeholder="비밀번호" hasMarginBottom={isSignUp}/>
                {isSignUp && <BorderedInput placeholder="비밀번호 확인" />}
                <View style={styles.buttons}>
                    {isSignUp ? (
                        <>
                            <CustomButton title="회원가입" hasMarginBottom />
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
                            <CustomButton title="로그인" hasMarginBottom />
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
    );
}

const styles = StyleSheet.create({
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
