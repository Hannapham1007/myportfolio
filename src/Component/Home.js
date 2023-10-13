import React from "react";
import profile from "./profilbild.jpg";


const Home = () => {
  return (
    <section name="home" style={{ backgroundColor: "var(--grey)" }}>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row gy-4 text-center">
          <div className="col-md-8 col-12">
            <h1> Hi 👋 I'm Hanna</h1>

            <p className="home-sub-title">
              I'm a software developer. I love to be creative and find solutions
              to problems through the combination of programming and design. My
              interests include web development, fullstack development and UX/UI
              design. Feel free to look through my portfolio.  
              
            </p>

            <button className=" btn" onClick={() => window.open("https://www.linkedin.com/in/hanna-pham-99979419a/")}>
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="btn " onClick={() => window.open("https://github.com/Hannapham1007")} >
              <i className="fab fa-github"></i>
            </button>
          </div>
          <div className="col-md-4 col-12 justify-content-center align-items-center">
            <img
              src={profile}
              style={{ width: "250px", height: "250px" }}
              alt="profile"
              className="rounded-circle justify-content-center"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
