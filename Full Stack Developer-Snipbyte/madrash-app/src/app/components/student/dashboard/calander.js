"use client";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const myEventsList = [
    {
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2023, 11, 0),
        end: new Date(2023, 11, 1),
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2023, 11, 7),
        end: new Date(2023, 11, 10),
    },

    {
        id: 4,
        title: "Some Event",
        start: new Date(2023, 11, 9, 0, 0, 0),
        end: new Date(2023, 11, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: "Conference",
        start: new Date(2023, 11, 11),
        end: new Date(2023, 11, 13),
        desc: "Big conference for important people",
    },
];


const Calander = (props) => {
    return (
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
        //   style={{ height: '100vh' }}
        />
    )
}

export default Calander;
