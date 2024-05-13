import React from "react";
import ProjectItem from "./ProjectItem";
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
        <div className="row text-left">
          {data.map((project, index) => (
            <div key={index} className="mb-4">
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
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
