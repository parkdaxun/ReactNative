import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function App() {
  return (
      <View>
        <View style={styles.box} />
        <Calendar style={styles.calendar} />
      </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height : 50,
  },
  calendar: {
    borderBottomColor: '#e0e0e0',
  },
});
