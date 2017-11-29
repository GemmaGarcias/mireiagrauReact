import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Calendar.css'
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const Calendar = (props) => (
	<div className="Calendar">
		<InfiniteCalendar
			className='mycalendar'
		    width={400}
		    height={400}
		    selected={today}
		    disabledDays={[0,6]}
		    minDate={lastWeek}
		  />
	</div>
	)

export default Calendar