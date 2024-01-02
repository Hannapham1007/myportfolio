import React from "react";
import ProjectItem from "./ProjectItem";
import FlutterProject from "./FlutterProject";
import projectData from "../projectData.json";

const Project = () => {
  const data = projectData.projects;

  return (
    <section className="project">
      <div className="container height-auto">
        <div className="text-center">
          <h2>Project</h2>
          <p>Here are a few projects I've worked on 🧩</p>
        </div>
        <div className="row mt-4 text-left">
          {data.slice(0, -1).map((project, index) => (
            <React.Fragment key={index}>
              <ProjectItem
                projectPic={{ src: project.image }}
                projectTitle={project.title}
                projectContent={project.description}
                techIsUsed={project.tech}
                buttonTextViewCode={"View Code"}
                onClickViewCode={() => window.open(project.gitlink)}
                buttonTextDemo={"Live Demo"}
                onClickDemo={() => window.open(project.demolink)}
              />
              {index < data.length - 1 && <span style={{ height: "50px" }}></span>}
            </React.Fragment>
          ))}
          <FlutterProject />
        </div>
      </div>
    </section>
  );
};

export default Project;
