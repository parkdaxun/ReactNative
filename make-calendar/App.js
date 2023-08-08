import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Calendar} from 'react-native-calendars';

export default function App() {
  const markedDates = {
    '2023-08-08': {
      selected: true,
    },

    '2023-08-13': {
      marked: true,
    },
  }

  return (
      <View>
        <View style={styles.box} />
        <Calendar
            style={styles.calendar}
            markedDates={markedDates}
            theme={{
              selectedDayBackgroundColor: '#009688',
              arrowColor: '#009688',
              dotColor: '#009688',
              todayTextColor: '#009688',
            }}
        />
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
