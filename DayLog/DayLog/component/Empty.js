import React from 'react';
import {View, Text, StyleSheet} from "react-native";

function Empty() {
    return(
      <View style={styles.block}>
          <Text style={styles.description}>아직 할일을 입력하지 않았습니다!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    block : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },

    description : {
        fontSize : 16,
        color : 'black',
    },
});

export default Empty;
