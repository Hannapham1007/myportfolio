import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from "./Nav";

const Home = () => {
  return (
    <section className="home">
      <Nav/>

      <div
        className="container home-section d-flex align-items-center justify-content-center"
       
      >
        <div className="row gy-4 align-left">
          <div className="col-md-8 col-12">
            <h1 className="home-title"> Hi 👋 I'm Hanna</h1>

            <p className="home-sub-title">
              I'm a junior software developer based in Gothenburg, Sweden📍. My interests include web
              development, fullstack development and UX/UI design.
            </p>
            <div className="home-social-icon" style={{ display: "flex" }}>
              <FaLinkedinIn
                style={{ fontSize: "24px", marginRight: "10px" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/hanna-pham-99979419a/"
                  )
                }
              />

              <FaGithub
                style={{ fontSize: "24px" }}
                onClick={() => window.open("https://github.com/Hannapham1007")}
              />
            </div>
          </div>
          <div className="col-md-4 col-12 text-center justify-content-center align-items-center">
            <img
              src={"./images/profilbild.jpg"}
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
