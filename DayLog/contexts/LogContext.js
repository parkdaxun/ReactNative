import {createContext, useState} from "react";
import React from 'react';
import {v4 as uuidv4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState([
        /*{
            id : uuidv4(),
            title : 'Log 03',
            body : 'Log 03',
            date : new Date().toISOString(),
        },
        {
            id : uuidv4(),
            title : 'Log 02',
            body : 'Log 02',
            date : new Date(Date.now() - 1000 * 60 * 3).toISOString(),
        },
        {
            id : uuidv4(),
            title : 'Log 01',
            body : 'Log 01',
            date : new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
        }, */
    ]);

    const onModify = (modified) => {
        const nextLogs = logs.map((log) =>
            log.id === modified.id ? modified : log,
        );
        setLogs(nextLogs);
    };

    const onCreate = ({title, body, date}) => {
        const log = {
            id : uuidv4(),
            title,
            body,
            date,
        };
        setLogs([log, ...logs]);
    };

    const onRemove = (id) => {
        const nextLogs = logs.filter((log) => log.id !== id);
        setLogs(nextLogs);
    };

    return (
        <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
            {children}
        </LogContext.Provider>
    );
}

export default LogContext;
