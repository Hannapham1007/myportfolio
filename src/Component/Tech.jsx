import React from "react";
import DevIcon from "./DevIcon";

export default function Tech() {
  return (
    <section className="tech">
      <h2 className="text-center mb-4">Tech</h2>
      <div className=" container row w-100 justify-content-center mx-auto">
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/java.png" }} iconText="Java" />
        </div>
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/react.png" }} iconText="React" />
        </div>
       
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/html.png" }} iconText="HTML" />
        </div>
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/css.png" }} iconText="CSS" />
        </div>
        
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/figma.png" }} iconText="Figma" />
        </div>
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/git.png" }} iconText="Git" />
        </div>
        <div className="col-md col-3">
          <DevIcon
            pic={{ src: "./images/netlify.png" }} iconText="Netlify"/>
        </div>
        <div className="col-md col-3">
          <DevIcon pic={{ src: "./images/github.png" }} iconText="GitHub" />
        </div>
      
      </div>
    </section>
  );
}
