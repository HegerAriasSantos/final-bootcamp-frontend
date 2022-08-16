import React from 'react'
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function index() {
    return (
        <div className='quotes'>
           <FullCalendar 
            plugins={[dayGridPlugin]}
           />
        </div>
    )
  }

export default index;