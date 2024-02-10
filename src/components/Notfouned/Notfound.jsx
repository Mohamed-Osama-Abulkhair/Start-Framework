import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css"

export default function Notfound() {
  return (
    <div className="container notFound py-5">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h2>There's NOTHING here...</h2>
            <img src="images/404.svg" alt="error 404" />
            <Link to="/">
              <button>Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
