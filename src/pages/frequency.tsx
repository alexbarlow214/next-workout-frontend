import {useState} from 'react'
import FullCalendar from '@fullcalendar/react' 
import formDate from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from "@fullcalendar/interaction"
import { Box, List, ListItem, ListItemText, Typography, useTheme} from "@mui/material"
import { tokens } from "../components/theme"
import Header from "../components/Header"

export default function Frequency() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDataClick = (selected) => {
        const title = prompt("Please enter a new title for your event")
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const handleEventClick = (selected) => {
        if(window.confirm(`Are you sure you want to delete the even '${selected.event.title}'`)){
            selected.event.remove()
        }
    }
  return (
    <Box m="20px">
        <Header title="Calendar" subtitle="Frequency"/>
    </Box>
  )
}
