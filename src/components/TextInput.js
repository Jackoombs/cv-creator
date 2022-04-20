import React from "react";

function TextInput(props) {
  return (
    <div className="input">
      <input type="text" id={props.id} onChange={e => props.onInputChange(props.id, e.target.value)} placeholder={props.label}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default TextInput