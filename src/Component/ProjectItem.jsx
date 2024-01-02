import React from "react";
import Button from "./Button";
import TechButton from "./TechButton";

export default function ProjectItem({
  projectPic,
  projectTitle,
  projectContent,
  techIsUsed = [],
  onClickViewCode,
  buttonTextViewCode,
  onClickDemo,
  buttonTextDemo,
}) {
  return (
    <>
      <div className="d-flex col-md-12 col-lg-6 col-12 justify-content-center align-items-center">
        <img
          className="w-100"
          src={projectPic.src}
          alt=""
          style={{
            borderRadius: "10px",
            marginBottom: "16px",
            objectFit: "cover",
          }}
        ></img>
      </div>
      <div className="col-lg-1"></div>
      <div className="  col-md-12 col-lg-5 col-12 d-flex flex-column justify-content-center align-items-center ">
        <h3>{projectTitle}</h3>
        <div className="project-text">
          <p> {projectContent}</p>
        </div>
        <div style={{marginBottom:'20px'}}>
          {techIsUsed.map((item, index) =>(
            <TechButton key={index} text={item}></TechButton>
          ))}
          
        </div>
        <div className="d-flex justify-content-around">
          <Button onClick={onClickViewCode} text={buttonTextViewCode} />
          <Button onClick={onClickDemo} text={buttonTextDemo} />
        </div>
      </div>
    </>
  );
}
