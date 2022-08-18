import {
  useCallback, useState, useMemo
} from 'react'
import moment from 'moment'
import {
  Calendar,
  momentLocalizer,
  Views
} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import './index.scss'
import { CalendarEvent } from '~/types';

const events: Array<CalendarEvent> = [
  {
    id: 0,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getDay())),
    end: new Date(new Date().setHours(new Date().getDay())),
  },
]


export default function CreateEventWithNoOverlap({
  localizer = momentLocalizer(moment),
}) {
  const [myEvents, setEvents] = useState<Array<CalendarEvent>>(events)

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(2022, 1, 1, 6),
    }),
    []
  )

  return (
    <div className="Quotes">
      <Calendar
        defaultDate={defaultDate}
        views={['week', 'day']}
        defaultView={Views.WEEK}
        min={new Date(2022, 1, 1, 8)}
        max={new Date(2022, 1, 1, 19)}
        events={myEvents}
        localizer={localizer}
        scrollToTime={scrollToTime}
      />
    </div>
  )
}
