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
