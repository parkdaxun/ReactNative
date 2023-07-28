import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={styles.background}>
            <Button
                title="Detail 1 열기"
                onPress={() => navigation.navigate('Detail', {id: 1})}
            />
            <Button
                title="Detail 2 열기"
                onPress={() => navigation.navigate('Detail', {id: 2})}
            />
            <Button
                title="Detail 3 열기"
                onPress={() => navigation.navigate('Detail', {id: 3})}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
    },
})

export default HomeScreen;
