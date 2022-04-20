import React from "react";

function TextAreaInput(props) {
  return (
    <div className="input">
      <textarea type="textarea" id={props.id} rows={6} onChange={e => props.onInputChange(props.id, e.target.value)} placeholder={props.label}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

export default TextAreaInput