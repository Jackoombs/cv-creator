import React from "react";
import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";

function CV({data}) {

  return (
    <div className="cv">
      <div className="cv-header">
        <h2>{(data.title?data.title:"") + " " + (data['first-name']?data['first-name']:"") + " " + (data['last-name']?data['last-name']:"")}</h2>
      </div>

      <div className="cv-section">
        <h3>Description</h3>
        <p>{data.description}</p>
      </div>

      <CVExperience 
        section="Experience"
        className="experience"
        data={data}
      />

      <CVEducation
        section="Education"
        className="education"
        data={data}
      />
    </div>
  )
}

export default CV