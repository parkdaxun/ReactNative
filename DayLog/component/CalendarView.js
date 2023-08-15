import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from "react-native";

function CalendarView() {

    const markedDates = {
        '2023-08-14' : {
            selected: true,
        },

        '2023-08-03' : {
            selected: true,
        },

        '2023-08-10' : {
            selected: true,
        },
    };

    return (
      <Calendar
          style={styles.calendar}
          markedDates={markedDates}
          theme={{
              selectedDayBackgroundColor : '#1c4811',
              arrowColor : '#1c4811',
              dotColor : '#1c4811',
              todayTextColor : '#1c4811',
          }}
      />
    );
}

const styles = StyleSheet.create({
    calendar: {
        borderBottomWidth : 1,
        borderBottomColor : '#e0e0e0',
    },
});

export default CalendarView;
