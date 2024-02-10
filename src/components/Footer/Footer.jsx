import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="py-5">
      <div className="container footer ">
        <div className="row gy-4">
          <div className="col-md-6 text-center">
            <h4>Subscribe to my Newsletter</h4>
            <div className="row">
              <div className="col-8 pe-0">
                <input
                  className="form-control"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="col-4 ps-0">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center location">
            <h4>Location</h4>
            <div className="d-flex align-items-baseline justify-content-center">
              <i className="fa-solid fa-location-dot pe-3"></i>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-md-3 text-center">
            <h4>Follow me</h4>
            <div className="follow d-flex justify-content-around">
              <a
                href="https://www.facebook.com/mohamed.osama28599/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
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
    </footer>
  );
}
