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

const MyItem = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (<List><ListItem><ListItemText>sdf</ListItemText></ListItem></List>) 
}

function renderEventContenta(dayInfo) {
   
    return (<MyItem/>)
  }
  function renderEventContent(eventInfo) {
    return (
      <>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

export default function Frequency() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
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
    <Box m="20px" flex="1">
        <Header title="Calendar" subtitle="Frequency"/>
        <Box flex="1 1 100%" ml="15px">
            <FullCalendar
            height ="75vh"
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin
            ]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={false}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            //eventContent={renderEventContent}
            //dayCellContent={renderEventContenta}
            // dayCellClassNames="dayCell"
            fixedWeekCount={false}
            initialEvents={[
                {id:"1234", title:"All-day event", date: "2023-02-05"}
            ]}
            />
        </Box>
    </Box>
  )
}
