import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";

function Form({inputChangeHandler}) {
  return (
    <form action="">
      <PersonalInfo inputChangeHandler={inputChangeHandler}/>
      <Experience inputChangeHandler={inputChangeHandler}/>
      <Education inputChangeHandler={inputChangeHandler}/>
    </form>
  )
}

export default Form
