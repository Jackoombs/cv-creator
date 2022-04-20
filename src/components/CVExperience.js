import React from "react";
import { useEffect } from "react";

function CVExperience(props) {

  useEffect(() => {
    console.log(props.data)
  },[props])
  
 
  return (
    <div className={`${props.className} cv-section`}>
      <h3>{props.section}</h3>

      <h4>Job Title</h4>
      <p>
        {props.data.position} |
        <em> {props.data["job-from"]}{(props.data["job-until"]?` - ${props.data["job-until"]}`:'')}</em>
      </p>

      <h4>Company</h4>
      <p>{props.data.company}</p>

      <h4>Job Description</h4>
      <p>{props.data["job-description"]}</p>

      <p></p>
    </div>
  )
}

export default CVExperience