import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import { Link } from 'react-router-dom';

const MyCalendar = () => {
  const [dateState, setDateState] = useState(new Date());

  const changeDate = (date) => {
    setDateState(date);
  };

  return (
    <div className="calendar-container">
                        <Link to="/HomePage" className="arrow-top-left">&#8592;</Link>

      <h1>Calendar</h1>
      <Calendar value={dateState} onChange={changeDate} />
      <p>
        Current selected date is{' '}
        <b>
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(dateState)}
        </b>
      </p>
    </div>
  );
};

export default MyCalendar;
