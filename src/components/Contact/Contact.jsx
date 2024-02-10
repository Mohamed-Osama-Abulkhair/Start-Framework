import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputKeyUp = (setter, inputValue) => {
    setter(inputValue);
  };

  return (
    <div className="container">
      <div className="contact py-5">
        <h2>Get in touch</h2>

        <div className="inputBox">
          <p className={`inputLabel ${name ? "active" : ""}`}>Your Name :</p>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => handleInputKeyUp(setName, e.target.value)}
          />
        </div>
        <div className="inputBox">
          <p className={`inputLabel ${age ? "active" : ""}`}>Your Age :</p>
          <input
            type="number"
            className="form-control"
            placeholder="Your Age"
            value={age}
            onChange={(e) => handleInputKeyUp(setAge, e.target.value)}
          />
        </div>
        <div className="inputBox">
          <p className={`inputLabel ${email ? "active" : ""}`}>Your Email :</p>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={(e) => handleInputKeyUp(setEmail, e.target.value)}
          />
        </div>
        <div className="inputBox">
          <p className={`inputLabel ${phone ? "active" : ""}`}>Your Phone :</p>
          <input
            type="text"
            className="form-control"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => handleInputKeyUp(setPhone, e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Send Message</button>
      </div>
    </div>
  );
}
