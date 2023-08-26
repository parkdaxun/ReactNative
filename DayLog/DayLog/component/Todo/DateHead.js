import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatted = '${year}년 ${month}월 ${day}일';

    return (
      <View style={styles.block}>
         <Text style={styles.dateText}>{year}년 {month}월 {day}일</Text>
      </View>
    );
}

const styles =StyleSheet.create({
    block : {
        padding : 16,
        backgroundColor : 'black',
    },

    dateText : {
        fontSize : 20,
        color : 'white',
        alignItems : 'center',
        textAlign : 'center',
    },
});

export default DateHead;
