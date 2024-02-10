import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container about py-5">
      <div className="row">
        <h2>
          About <span>Me</span>
        </h2>
        <div className="col-md-6">
          <p className="aboutDetails">
            I'm A Multi-Passionate Ninja,<br></br>As a Full Stack Developer, I
            specialize in the MERN (MongoDB, Express.js, React.js, Node.js)
            stack. My technical skills enable me to seamlessly navigate both the
            frontend and backend of web development, ensuring holistic
            solutions.<br></br> In addition to my development skills, I'm adept
            at UI/UX design and graphic design. I believe in creating not just
            functional but also visually appealing and user-friendly digital
            experience
          </p>
          <div className="d-flex align-items-center call">
            <p>
              <i className="fa-solid fa-phone pe-2"></i>+20 10000 365 98
            </p>
            <p>
              <i className="fa-solid fa-envelope ps-5 pe-2"></i>
              mohamed.osama@gmail.com
            </p>
          </div>

          <Link to="/contact">
            <button>Hire Me</button>
          </Link>
          <a
            className="ms-5"
            href="https://drive.google.com/uc?export=download&id=1-08bhc2vPUVfqCkvADwmsXFydq9cmP6O"
            download
          >
            <button>Download My Cv</button>
          </a>
        </div>
        <div className="col-md-6">
          <h5>Graphic Designer</h5>
          <h5>UI, UX Designer</h5>
          <h5>Frontend Developer</h5>
          <h5>Backend Developer</h5>
        </div>
      </div>
    </div>
  );
}
