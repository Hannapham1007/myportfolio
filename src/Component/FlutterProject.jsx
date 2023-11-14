import React from "react";
import projectData from "../projectData.json"

function FlutterProject() {
  const data = projectData.projects;

  return (
    <section id="projectFlutter">
      <div className="row">
        <div className="d-flex col-md-7 col-12 justify-content-center align-items-center">
          <img className="w-100" style={{borderRadius:'20px', marginBottom:'16px', maxHeight:'400px', objectFit:'cover'}} src={data[5].image} alt=""></img>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
          <h3>{data[5].title}</h3>
          <p className="flutter-project-text">
            {data[5].description}
          </p>
          <div className="d-flex">
            <button type="button" className="btn btn-outline" onClick={()=> window.open(data[5].gitlink)}>
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlutterProject;
