import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from "react-native";

function CalendarView({markedDates, selectedDate, onSelectDate}) {
    const markedSelectedDate = {
        ...markedDates,
        [selectedDate]: {
            selected: true,
            marked: markedDates[selectedDate]?.marked,
        },
    };

    return (
      <Calendar
          style={styles.calendar}
          markedDates={markedSelectedDate}
          onDayPress={(day) => {
              onSelectDate(day.dateString);
          }}
          theme={{
              selectedDayBackgroundColor : '#000000',
              arrowColor : '#000000',
              dotColor : '#000000',
              todayTextColor : '#000000',
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
