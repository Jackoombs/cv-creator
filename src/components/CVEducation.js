import React from "react";
import { useEffect } from "react";

function CVEducation(props) {

  return (
    <div className={`${props.className} cv-section`}>
      <h3>{props.section}</h3>

      <h4>School</h4>
      <p>
        {props.data.school} |
        <em> {props.data["school-from"]}{(props.data["school-until"]?` - ${props.data["school-until"]}`:'')}</em>
      </p>

      <h4>Education Level</h4>
      <p>{props.data["education-level"]}</p>

      <p></p>
    </div>
  )
}

export default CVEducation