import React from "react";
import DevIcon from "./DevIcon";

const techItems = [
  { src: "./images/java.png", iconText: "Java" },
  { src: "./images/react.png", iconText: "React" },
  { src: "./images/html.png", iconText: "HTML" },
  { src: "./images/css.png", iconText: "CSS" },
  { src: "./images/git.png", iconText: "Git" },
  { src: "./images/github.png", iconText: "GitHub" },
  { src: "./images/figma.png", iconText: "Figma" },
  { src: "./images/docker.png", iconText: "Docker"},
  { src: "./images/netlify.png", iconText: "Netlify" },
  { src: "./images/postgresql.png", iconText:"PostgreSQL"}
];

const Tech = () => {
  return (
    <section className="tech">
      <div className="container">

      <h2 className="text-center mb-4">Tech</h2>
      <div className="container row justify-content-center">
        {techItems.map((item, index) => (
          <div key={index} className="col-lg col-md-3 col-3 mb-3">
            <DevIcon pic={item} iconText={item.iconText} />
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default Tech;
