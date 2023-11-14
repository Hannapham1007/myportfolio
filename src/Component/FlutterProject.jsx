import React from "react";

function FlutterProject() {
  return (
    <section id="projectFlutter">
      <div className="row">
        <div className="d-flex col-md-7 col-12 justify-content-center align-items-center">
          <img className="w-100" style={{borderRadius:'20px', marginBottom:'16px', maxHeight:'400px', objectFit:'cover'}} src="./images/flutterProject.png" alt=""></img>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
          <h3>Maritime English</h3>
          <p className="flutter-project-text">
            This is my Bachelor's Thesis. We developed a language learning
            application in Maritime English by using Dart as
            programming language with the Flutter framework.
          </p>
          <div className="d-flex">
            <button type="button" className="btn btn-outline" onClick={()=> window.open("https://github.com/Hannapham1007/fluttermaritime")}>
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlutterProject;
