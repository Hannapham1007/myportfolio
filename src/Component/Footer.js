import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-12 justify-content-center align-items-center">
          <div className=" align-items-center">
            <h5 className="text-white">HANNA PHAM</h5>
            <p className="text-white" style={{ fontSize: "12px" }}>
              hannapham996@gmail.com
            </p>
            </div>
            
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <button className="btn" onClick={() => window.open("https://www.linkedin.com/in/hanna-pham-99979419a/")}>
                <i
                  className="fab fa-linkedin-in"
                  style={{ color: "white" }}
                ></i>
              </button>
              <button className="btn" onClick={() => window.open("https://github.com/Hannapham1007")}>
                <i className="fab fa-github" style={{ color: "white" }}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
