import React, {useContext, useState} from 'react';
import {StyleSheet} from "react-native";
import LogContext from "../contexts/LogContext";
import CalendarView from "../component/CalendarView";
import {format} from 'date-fns';
import FeedList from '../component/FeedList';

function CalendarScreen() {
    const {logs} = useContext(LogContext);
    const [selectedDate, setSelectedDate] = useState(
        format(new Date(), 'yyyy-mm-dd'),
    );

    const filteredLogs = logs.filter(
        (log) => format(new Date(log.date), 'yyyy-mm-dd') === selectedDate,
    )

    const markedDates = logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-mm-dd');
        acc[formattedDate] = {marked: true};
        return acc;
    }, {});

    return (
        <FeedList
            logs={filteredLogs}
            ListHeaderComponent={
                <CalendarView
                    markedDates={markedDates}
                    selectedDate={selectedDate}
                    onSelectDate={setSelectedDate}
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    block: {},
});

export default CalendarScreen;
