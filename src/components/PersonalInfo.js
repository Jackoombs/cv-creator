import React, { useState } from "react";
import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput"

function PersonalInfo({inputChangeHandler}) {

  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <TextInput id="title" label="Title" onInputChange={inputChangeHandler}/>
      <TextInput id="first-name" label="First Name" onInputChange={inputChangeHandler}/>
      <TextInput id="last-name" label="Last Name" onInputChange={inputChangeHandler}/>
      <TextAreaInput id="description" label="Description" onInputChange={inputChangeHandler}/>
    </div>
  )
}

export default PersonalInfo