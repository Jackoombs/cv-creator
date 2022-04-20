import React from "react";
import CVSection from "./CVSection";

function CV({data}) {

  return (
    <div className="cv">
      <div className="cv-header">
        <h2>{(data.title?data.title:"") + " " + (data['first-name']?data['first-name']:"") + " " + (data['last-name']?data['last-name']:"")}</h2>
      </div>
      <CVSection 
        section="Description"
        className="description"
      />
    </div>
  )
}

export default CV