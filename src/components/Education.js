import React from "react";
import TextInput from "./TextInput";
import DateContainer from "./DateContainer";

function Education({inputChangeHandler}) {
  return (
    <div>
          <div className="form-section">
      <h2>Education</h2>
      <TextInput id="school" label="School" onInputChange={inputChangeHandler}/>
      <TextInput id="education-level" label="Education Level" onInputChange={inputChangeHandler}/>
      <DateContainer onInputChange={inputChangeHandler} fieldFrom={"school-from"} fieldUntil={"school-until"}/>
    </div>
    </div>
  )
}

export default Education