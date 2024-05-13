import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";


function Footer() {
  return (
    <footer className="contact footer">
      <div className="container">
        <div className="row text-center">
          <h2 className="text-center" style={{color:"var(--white)"}}>Contact</h2>
          <div className="col-md-6 col-12 justify-content-center align-items-center">
          <div className=" align-items-center">
            <h5 className="text-white">HANNA PHAM</h5>
            <p className="text-white">
              hannapham996@gmail.com
            </p>
            </div>
            
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
            <div className="d-flex home-social-icon">
              <FaLinkedinIn
                className="mx-2"
                style={{ fontSize: "24px", cursor:"pointer", color:"var(--white)" }}
                onClick={() => window.open("https://www.linkedin.com/in/hanna-pham-99979419a/")
                }
              />

              <FaGithub
                className="mx-2"
                style={{ fontSize: "24px", cursor:"pointer", color:"var(--white)"  }}
                onClick={() => window.open("https://github.com/Hannapham1007")}
              />

              <FaEnvelope className="mx-2" style={{fontSize:"24px", cursor:"pointer", color:"var(--white)" }}
              onClick={() => window.open("mailto:hannapham996@gmail.com")}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
