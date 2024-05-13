import React from "react";
import { FaGlobe, FaGithubAlt} from "react-icons/fa";
import './styles/ProjectItem.css';

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
    <div className="py-4 px-4 project-item">
      <div className="row">
        <div className="d-flex col-lg-6 col-md-12 col-12 justify-content-center mb-2">
          <img
            className="w-75 rounded-2"
            src={projectPic.src}
            alt="project"
          ></img>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3>{projectTitle}</h3>
            <div className="project-text">
              <p>{projectContent}</p>
            </div>
            <div className="mb-2">
              {techIsUsed.map((item, index) => (
                <div className="btn mx-1 mb-2" style={{ background: "var(--grey)" }} key={index}>{item}</div>
              ))}
            </div>
            <div className="d-flex justify-content-around">
              <button className="btn btn-outline d-flex align-items-center" onClick={onClickViewCode}> <FaGithubAlt style={{marginRight:'4px'}} />{buttonTextViewCode}</button>
              <button className="btn btn-outline d-flex align-items-center" onClick={onClickDemo}><FaGlobe style={{marginRight:'4px'}}/>{buttonTextDemo}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
