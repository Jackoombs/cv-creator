import React from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import DateContainer from "./DateContainer";

function Experience({inputChangeHandler}) {
  return (
    <div className="form-section">
      <h2>Experience</h2>
      <TextInput id="position" label="Position" onInputChange={inputChangeHandler}/>
      <TextInput id="company" label="Company" onInputChange={inputChangeHandler}/>
      <TextAreaInput id="job-description" label="Description" onInputChange={inputChangeHandler}/>
      <DateContainer onInputChange={inputChangeHandler} fieldFrom={"job-from"} fieldUntil={"job-until"}/>
    </div>
  )
}

export default Experience