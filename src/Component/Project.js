import React from "react";
import FlutterProject from "./FlutterProject";

const Project = () => {
  return (
    <section className="project">
      <div className="container height-auto">
        <div className="text-center" >
          <h2 >Project</h2>
          <p>Here are a few projects I've worked on 🧩</p>
        </div>
        <div className="row mt-4 text-left">
          <FlutterProject/>

          <span style={{ height: "50px" }}></span>
          <ProjectItem
            projectPic={{ src: "./images/openweatherProject.png"  }}
            projectTitle={"Weather Application"}
            projectContent={
              "My classmates and I collaborated on developing a weather application as a part of our Technigo JavaScript and React uppskill course. I was responsible for fetching and presenting weather data using API from Openweathermap. We used JavaScript, HTML and CSS programming languages."
            
            }
           
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open("https://github.com/Hannapham1007/technigo-weather-app")}
            buttonTextDemo={"Live Demo"}
            onClickDemo={()=> window.open("https://openweather-project.netlify.app/")}
            

           
          />
          

          <span style={{ height: "50px" }}></span>
          <ProjectItem
            projectPic={{ src: "./images/duytanproject.png" }}
            projectTitle={"DUY TAN"}
            projectContent={
              "Duy Tan is a Vietnamese restaurant, located at Kvilletorget Gothenburg. I created their website using Firebase as hosting and React as frontend."
            }
            buttonTextViewCode={"View Code"}
            onClickViewCode={() => window.open("https://github.com/Hannapham1007/duytan-web")}
            buttonTextDemo={"Live Demo"}
            onClickDemo={()=> window.open("http://duytanab.se")}
          />

         
        </div>
      </div>
    </section>
  );
};

export default Project;

function ProjectItem({ projectPic, projectTitle, projectContent, onClickViewCode, buttonTextViewCode, onClickDemo, buttonTextDemo}) {
  return (
    <>
      <div className="d-flex col-md-7 col-12 justify-content-center align-items-center">
        <img className="w-100" src={projectPic.src} alt="" style={{borderRadius:'20px', marginBottom:'16px', maxHeight:'400px', objectFit:'cover'}} ></img>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-4 col-12 d-flex flex-column justify-content-center align-items-center ">
        <h3>{projectTitle}</h3>
        <div className="project-text">
        <p> {projectContent}</p>

        </div>
        <div className="d-flex justify-content-around">
        <ButtonViewCode onClick={onClickViewCode} text={buttonTextViewCode}/>
        <ButtonDemo onClick={onClickDemo} text={buttonTextDemo}/>

        </div>
        
        
      </div>
    </>
  );
}

function ButtonViewCode({ onClick, text}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn btn-outline"
    >
      {text}
    </button>
  );
}
function ButtonDemo({ onClick, text}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="btn btn-outline"
    >
      {text}
    </button>
  );
}
