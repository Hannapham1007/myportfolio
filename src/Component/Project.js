import React from "react";

const Project = () => {
 
  return (
    <section name="project" style={{ backgroundColor: "var(--grey)" }}>
      <div className="container height-auto">
        <div className="text-center">
          <h2>Project</h2>
          <p>Here are a few projects I've worked on 🧩</p>
        </div>
        <div className="row mt-4">
          <ProjectItem
            projectPic={{ src: "./images/project1.png" }}
            projectTitle={"DUY TAN"}
            projectContent={
              "Duy Tan is a Vietnamese restaurant, located at Kvilletorget Gothenburg. I created their website from scratch using Firebase as hosting and React as frontend."
            }
            onClick={() => window.open("http://duytanab.se")}
          />

          <span style={{ height: "50px" }}></span>
          <ProjectItem
            projectPic={{ src: "./images/project1.png" }}
            projectTitle={"DUY TAN"}
            projectContent={
              "Duy Tan is a Vietnamese restaurant, located at Kvilletorget Gothenburg. I created their website from scratch using Firebase as hosting and React as frontend."
            }
            
            />
        </div>
      </div>
    </section>
  );
};

export default Project;

function ProjectItem({ projectPic, projectTitle, projectContent, onClick }) {
  return (
    <>
      <div className="d-flex col-md-7 col-12 justify-content-center align-items-center">
        <img className="w-100" src={projectPic.src} alt=""></img>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center">
        <h3>{projectTitle}</h3>
        <p>{projectContent}</p>
        <div className="mt-3">
          <VisitWebsiteButton onClick={onClick} />
        </div>
      </div>
    </>
  );
}

function VisitWebsiteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn primary align-center"
      style={{
        backgroundColor: "var(--primary)",
        color: "var(--white)",
        borderRadius: "10px",
        padding: "8px 22px",
      }}
    >
      {" "}
      Visit Website
    </button>
  );
}

