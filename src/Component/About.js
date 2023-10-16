import React from "react";

const About = () => {
  return (
    <section className="about" >
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row ">
          <h2 className="text-center mb-4">About me</h2>

          <div className="col-md-6 col-12">
            <h3 className="text-center mb-4">Get to know me!</h3>
            <div className="about-text">
            
            <p>
              My name is Hanna Pham. I recently completed my bachelor in
              Computer Engineering at Chalmers University. The
              program focused on programming, algorithms, data structures,
              database, and human-computer interaction.
            I'm always learning and I enjoy
              working with others to achieve shared goals.</p>
              <p>In my free time I like to workout, cook delicious meals, design and code simple things.</p>
              <p>I'm open to opportunities where I can contribute, learn and grow. Feel free to look through my projects or send me a message.</p>

              </div>
          </div>
          <div className="col-md-1"> </div>
          <div className="col-md-5 col-12">
            <h3 className="text-center mb-4">My skills</h3>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-3 col-3">
                <DevIcon pic={{ src: "./images/java.png" }} iconText="Java" />
              </div>
              <div className="col-md-3 col-3">
                <DevIcon
                  pic={{ src: "./images/javascript.png" }}
                  iconText="JavaScript"
                />
              </div>
              <div className="col-md-3 col-3">
                <DevIcon pic={{ src: "./images/html.png" }} iconText="HTML" />
              </div>
              <div className="col-md-3 col-3 ">
                <DevIcon pic={{ src: "./images/css.png" }} iconText="CSS" />
              </div>
             

              <div className="col-md-3 col-3">
                <DevIcon pic={{ src: "./images/react.png" }} iconText="React" />
              </div>
              <div className="col-md-3 col-3 ">
                <DevIcon
                  pic={{ src: "./images/bootstrap.png" }}
                  iconText="Bootstrap"
                />
              </div>
              <div className="col-md-3 col-3">
                <DevIcon pic={{ src: "./images/figma.png" }} iconText="Figma" />
              </div>
              <div className="col-md-3 col-3">
                <DevIcon
                  pic={{ src: "./images/github.png" }}
                  iconText="GitHub"
                />
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

function DevIcon({ pic, iconText }) {
  return (
    <div className="center text-center">
      <img className="dev-icon" src={pic.src} alt={""} width={45} height={45} />
      <p className="text-center mt-1">{iconText}</p>
    </div>
  );
}
