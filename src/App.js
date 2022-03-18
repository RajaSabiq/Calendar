import React, { useEffect, useState } from 'react';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHolidayData } from './store/actionCreater';

const localizer = momentLocalizer(moment);

function App() {
  const dispatch = useDispatch();
  const holidays = useSelector((state) => state.calendar.holidays);
  const [holidayList, setHolidayList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  useEffect(() => {
    dispatch(
      getHolidayData(new Date().getMonth() + 1, 'US', new Date().getFullYear())
    );
  }, []);

  useEffect(() => {
    if (holidays.length > 0) {
      var temp = [];
      holidays.map((holiday, index) => {
        temp.push({
          id: index,
          title: holiday.name,
          start: new Date(holiday.date.iso),
          end: new Date(holiday.date.iso),
          type: 'holiday',
          allDay: true,
        });
      });
      setHolidayList(temp);
    }
  }, [holidays]);
  return (
    <div className='App'>
      <Calendar
        localizer={localizer}
        events={holidayList}
        onNavigate={(date, view) => {
          if (currentMonth !== date.getMonth() + 1) {
            dispatch(
              getHolidayData(date.getMonth() + 1, 'US', date.getFullYear())
            );
            setCurrentMonth(date.getMonth() + 1);
          }
        }}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            backgroundColor: '#ff0000',
            color: '#fff',
            borderRadius: '0px',
            border: '0px',
            display: 'block',
            padding: '8px',
            marginTop: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
          };
          return {
            style: newStyle,
          };
        }}
        startAccessor='start'
        endAccessor='end'
        style={{
          height: 500,
        }}
      />
    </div>
  );
}

export default App;
