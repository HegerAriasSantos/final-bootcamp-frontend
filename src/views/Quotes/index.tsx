import {
  useCallback, useState, useMemo, useEffect
} from 'react'
import moment from 'moment'
import {
  Calendar,
  momentLocalizer,
  Views
} from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import './index.scss'
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { RootState } from '~/Context';
import axios from 'axios';
import { SERVER_ENDPOINT } from '~/lib/config';

const events = [
  {
    id: 0,
    title: 'Open service',
    start: new Date(new Date().setHours(8, 0, 0, 0)),
    end: new Date(new Date().setHours(8, 0, 0, 0)),
  },
]


export default function CreateEventWithNoOverlap({
  localizer = momentLocalizer(moment),
  dayLayoutAlgorithm = 'no-overlap',
}) {
  const username = useSelector((state: RootState) => state.User.value?.name);
  const userId = useSelector((state: RootState) => state.User.value?.id) ?? -1;
  const [myEvents, setEvents] = useState(events)

  const handleSelectSlot =
    ({ start, end }: { start: Date, end: Date }) => {
      const CrossedEvent = myEvents.filter(event => {
        const eventStart = event.start;
        const eventEnd = event.end;
        const Start = start;
        const End = end;
        return (Start > eventStart && Start < eventEnd) || (End > eventStart && End < eventEnd);
      });
      console.log(CrossedEvent);
      if (CrossedEvent.length > 0) {
        Swal.fire({
          title: 'Error',
          text: "There is an event in this time",
          icon: 'error',
        })
        return;
      }

      const title = username;
      if (title) {
        setEvents((prev) => [...prev, { start, end, title, id: userId }])
      }
    }
  useEffect(() => {
    console.log(myEvents);
  }, [myEvents])

  const handleSelectEvent = useCallback(
    (event: any) => alert(event.title),
    []
  )

  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(2022, 1, 1, 6),
    }),
    []
  )
  useEffect(() => {
    axios(`${SERVER_ENDPOINT}/quote/list-quote`)
      .then(res => console.log(res))
  }, [])

  return (
    <div className="Quotes">
      <Calendar
        dayLayoutAlgorithm={dayLayoutAlgorithm}
        defaultDate={defaultDate}
        views={['week', 'day']}
        defaultView={Views.WEEK}
        min={new Date(2022, 1, 1, 8)}
        max={new Date(2022, 1, 1, 19)}
        events={myEvents}
        localizer={localizer}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        scrollToTime={scrollToTime}
      />
    </div>
  )
}