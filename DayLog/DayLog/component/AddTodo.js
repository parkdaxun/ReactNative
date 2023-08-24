import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback,
    Keyboard
} from "react-native";
import TransparentCircleButton from "./TransparentCircleButton";
import FloatingWriteButton from "./FloatingWriteButton";
import Icon from "react-native-vector-icons/MaterialIcons";

function AddTodo({onInsert}) {
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    }

    return (
      <View style={styles.block}>
          <TextInput
              placeholder="할일을 입력해주세요."
              style={styles.input}
              value={text}
              onChangeText={setText}
          />
          <View style={styles.position}>
              <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
                  <View style={styles.buttonStyle}>
                      <Icon name="add" size={24} style={styles.icon} />
                  </View>
              </TouchableOpacity>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
   block : {
       height : 64,
       paddingHorizontal : 10,
       borderColor : '#bdbdbd',
       borderTopWidth : 1,
       borderBottomWidth : 1,
       alignItems : 'center',
       display : 'flex',
       flexDirection : 'row',
   },

    input : {
       fontSize : 15,
        paddingVertical : 8,
        padding : 13,
    },

    buttonStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        width : 48,
        height : 48,
        //backgroundColor : 'black',
        borderRadius : 24,
    },

    icon : {
       color : 'black',
    },

    position : {
       justifyContent : 'flex-end',
        flex : 1,
        alignItems : 'flex-end',
    },
});

export default AddTodo;
