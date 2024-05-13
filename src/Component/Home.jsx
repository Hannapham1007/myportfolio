import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import Nav from "./Nav";

const Home = () => {
  return (
    <section className="home">
      <Nav />

      <div className="container home-section d-flex align-items-center justify-content-center">
        <div className="row gy-4 align-left">
            <h1 className="text-lg-start text-md-center text-center">Full-stack Developer</h1>
          <div className="col-md-12 col-lg-8 col-12">
            <p className="home-sub-title">
              Hi 👋 I'm Hanna, a full-stack developer based in Gothenburg,
              Sweden📍. I’m always eager to learn about new technologies and
              enjoy working with others to achieve shared goals. Feel free to
              look through my projects or send me a message.
            </p>
            <div className="d-flex home-social-icon">
              <FaLinkedinIn
                className="mx-2"
                style={{ fontSize: "24px", cursor:"pointer" }}
                onClick={() => window.open("https://www.linkedin.com/in/hanna-pham-99979419a/")
                }
              />

              <FaGithub
                className="mx-2"
                style={{ fontSize: "24px", cursor:"pointer" }}
                onClick={() => window.open("https://github.com/Hannapham1007")}
              />

              <FaEnvelope className="mx-2" style={{fontSize:"24px", cursor:"pointer"}}
              onClick={() => window.open("mailto:hannapham996@gmail.com")}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-12 text-center justify-content-center align-items-center">
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
