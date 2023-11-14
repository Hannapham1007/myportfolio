import React from "react";
import Button from "./Button";

export default function ProjectItem({
  projectPic,
  projectTitle,
  projectContent,
  onClickViewCode,
  buttonTextViewCode,
  onClickDemo,
  buttonTextDemo,
}) {
  return (
    <>
      <div className="d-flex col-md-7 col-12 justify-content-center align-items-center">
        <img
          className="w-100"
          src={projectPic.src}
          alt=""
          style={{
            borderRadius: "20px",
            marginBottom: "16px",
            maxHeight: "400px",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center ">
        <h3>{projectTitle}</h3>
        <div className="project-text">
          <p> {projectContent}</p>
        </div>
        <div className="d-flex justify-content-around">
          <Button onClick={onClickViewCode} text={buttonTextViewCode} />
          <Button onClick={onClickDemo} text={buttonTextDemo} />
        </div>
      </div>
    </>
  );
}
