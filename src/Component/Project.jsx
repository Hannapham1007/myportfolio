import React from "react";
import FlutterProject from "./FlutterProject";
import ProjectItem from "./ProjectItem";
import projectData from "../projectData.json";

const Project = () => {
  const data = projectData.projects;
  console.log(data);
  return (
    <section className="project">
      <div className="container height-auto">
        <div className="text-center">
          <h2>Project</h2>
          <p>Here are a few projects I've worked on 🧩</p>
        </div>
        <div className="row mt-4 text-left">
          <ProjectItem
            projectPic={{ src: data[0].image }}
            projectTitle={data[0].title}
            projectContent={data[0].description}
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open(data[0].gitlink)}
            buttonTextDemo={"Live Demo"}
            onClickDemo={() => window.open(data[0].demolink)}
          />

          <span style={{ height: "50px" }}></span>

          <ProjectItem
            projectPic={{ src: data[1].image }}
            projectTitle={data[1].title}
            projectContent={data[1].description}
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open(data[1].gitlink)}
            buttonTextDemo={"Live Demo"}
            onClickDemo={() => window.open(data[1].demolink)}
          />

          <span style={{ height: "50px" }}></span>

          <FlutterProject />

          <span style={{ height: "50px" }}></span>
          <ProjectItem
            projectPic={{ src: data[2].image }}
            projectTitle={data[2].title}
            projectContent={data[2].description}
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open(data[2].gitlink)}
            buttonTextDemo={"Live Demo"}
            onClickDemo={() => window.open(data[2].demolink)}
          />

          <span style={{ height: "50px" }}></span>
          <ProjectItem
            projectPic={{ src: data[3].image }}
            projectTitle={data[3].title}
            projectContent={data[3].description}
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open(data[3].gitlink)}
            buttonTextDemo={"Live Demo"}
            onClickDemo={() => window.open(data[3].demolink)}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
