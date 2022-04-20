import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'; 


function DateContainer({onInputChange, fieldFrom, fieldUntil}) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-container">
      <DatePicker
        className="date-input"
        id="job-from"
        selected={startDate}
        onChange={(date) => {
          onInputChange(fieldFrom, format(date, 'MM/yyyy'))
          setStartDate(date)}}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
      <label htmlFor="job-from">From</label>
      <DatePicker
        className="date-input"
        id="job-until"
        selected={endDate}
        onChange={(date) => {
          onInputChange(fieldUntil, format(date, 'MM/yyyy'))
          setEndDate(date)}}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="MM/yyyy"
        showMonthYearPicker />
        <label htmlFor="job-until">Until</label>
    </div>

  )
}

export default DateContainer
