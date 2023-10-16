import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container " >
        <div className="text-center">
          <h2>Contact</h2>
          <p>
            Feel free to contact me by submitting the form below and I will get
            back to you as soon as possible
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <form className="contact-form mt-4 p-3 rounded-2" style={{backgroundColor:'var(--white)'}} method='POST' action="https://getform.io/f/e490d44a-b88f-4dfc-9df4-38914c39bbbe">
           
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  autoComplete="given-name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  autoComplete="off"
                  className="form-control"
                  id="message"
                  placeholder="Enter your message"
                  style={{ height: "150px" }}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-outline"
                 style={{padding:'8px 24px'}}
                >
                  Submit
                </button>
              </div>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
