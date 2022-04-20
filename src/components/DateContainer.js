import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DateContainer({onInputChange}) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="date-container">
      <DatePicker
        className="date-input"
        id="job-from"
        selected={startDate}
        onChange={(date) => {
          setStartDate(date)
          onInputChange("job-from", date)
        }}
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
        onChange={(date) => setEndDate(date)}
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
