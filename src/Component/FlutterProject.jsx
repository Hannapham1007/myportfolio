import React from "react";
import projectData from "../projectData.json"
import TechButton from "./TechButton";

function FlutterProject() {
  const data = projectData.projects;

  return (
    <section id="projectFlutter">
      <div className="row">
        <div className="d-flex col-md-12 col-lg-6 col-12 justify-content-center align-items-center">
          <img className="w-100" style={{borderRadius:'20px', marginBottom:'16px', maxHeight:'400px', objectFit:'cover'}} src={data[7].image} alt=""></img>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-12 col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center">
          <h3>{data[7].title}</h3>
          <p className="flutter-project-text">
            {data[7].description}
          </p>
          <div style={{marginBottom:'20px'}}>
            {data[7].tech.map((item, index)=>(
              <TechButton key={index} text={item}></TechButton>
            ))}
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-outline" onClick={()=> window.open(data[7].gitlink)}>
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlutterProject;
