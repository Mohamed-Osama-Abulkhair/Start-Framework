import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="container home mb-3">
      <div className="row py-1 align-items-center ">
        <div className="col-md-6">
          <div className="details">
            <p>Welcome to my portfolio </p>
            <h1>
              Hello, my name's<span> React Framework</span>.
            </h1>
            <p>
              I'm a Full Stack Developer, I specialize in the MERN (MongoDB,
              Express.js, React.js, Node.js) stack.<br></br>In addition to my
              development skills, I'm adept at UI/UX design and graphic design.
            </p>
            <div>
              <a
                href="https://drive.google.com/uc?export=download&id=1-08bhc2vPUVfqCkvADwmsXFydq9cmP6O"
                download
              >
                <button>Download My Cv</button>
              </a>
              <Link to="/portfolio">
                <button>
                  <div className="d-flex align-items-center">
                    See my work
                      <span className="d-flex align-items-center ms-2">
                        <span className="arrow"></span>
                        <i className="fa-solid fa-caret-right"></i>
                      </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-10">
                <img
                  className="w-100"
                  src="images/profile.png"
                  alt="profile image"
                />
              </div>
              <div className="col-2 ps-3">
                <div className="d-flex align-items-center follow">
                  <h5>Follow me on </h5>
                  <div className="arrow"></div>
                  <i className="fa-solid fa-caret-down"></i>
                  <a
                    href="https://www.behance.net/mohamedosama183?fbclid=IwAR3Fk_S5jmrW5P-lYmvO8j5ix9A-Hvawls_kWWKIsMtgFoaLszQeaXdvQz0"
                    target="_blank"
                  >
                    <i className="fa-brands fa-behance"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/Mohamed-Osama-Abulkhair?fbclid=IwAR17sjqR6rHRH5u0c-6d1e4JgJmpB1izjY0H2WSJU70AM5x-6_2zoYFpKlI"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/Mohamed-Osama-Abulkhair?fbclid=IwAR3zjTWKOwWXD5DfTJT9BAHYOXr0LeyvPxUi9QzgeorZtlh5XzCe0uJ2RYE"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
